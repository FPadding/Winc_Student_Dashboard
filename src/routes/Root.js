import React from "react"
import ratingData from "../ratingData"
import { Route, Routes } from "react-router-dom"
import GraphList from "../Components/GraphList"
import Student from "./Student"
import FilterListItem from "../Components/FilterListItem"
import NavBar from "../Components/NavBar"
import Radio from "../Components/Radio"


class Root extends React.Component {
    constructor() {
        super()
        this.state = {
            ratingData: ratingData,
            allStudents: this.getAllStudents(),
            shownRatings: "both",
            shownStudents: [],
            maxAssignmentsPerGraph: 14,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)

    }


    getAverage(array, key) {
        return array.reduce((currentSum, newValue) => currentSum + parseInt(newValue[key]), 0) / array.length
    }

    firstWord(string) {
        return string.split(" ")[0]
    }

    getAllStudents() {
        const students = ratingData.map(entry =>
            entry.name
        )
        const uniqueStudents = [...new Set(students)]
        return uniqueStudents
    }

    filterStudents(ratingsArray, studentsArray) {
        if (this.state.shownStudents.length) {
            return ratingsArray.filter(entry =>
                studentsArray.some(student =>
                    entry.name === student
                )
            )
        }
        return ratingsArray
    }

    groupByAssignment(array) {
        let allAssignments = {}
        array.forEach(entry => {
            const assignmentNameShort = entry.assignment.split(" ")[0] //removes spaces, so the name can be used as an object key
            const ratings = {
                funRating: entry.funRating,
                difficultyRating: entry.difficultyRating,
            }
            if (allAssignments.hasOwnProperty(assignmentNameShort)) {
                allAssignments[assignmentNameShort].push(ratings)
            }
            else {
                allAssignments[assignmentNameShort] = [ratings]
            }
        });
        return allAssignments
    }

    getAllAverages(array) {
        const groupedAssignments = this.groupByAssignment(array)
        const allAssignments = Object.keys(groupedAssignments)
        const allAverages = allAssignments.map(assignment => {
            return {
                assignment: assignment,
                funRating: this.getAverage(groupedAssignments[assignment], "funRating"),
                difficultyRating: this.getAverage(groupedAssignments[assignment], "difficultyRating")
            }
        })
        return allAverages
    }

    groupByStudent(array) {
        let allRatingsByStudent = {}
        array.forEach(entry => {
            const student = entry.name
            const assignmentWithRatings = {
                assignment: this.firstWord(entry.assignment),
                funRating: parseInt(entry.funRating),
                difficultyRating: parseInt(entry.difficultyRating),
            }
            if (allRatingsByStudent.hasOwnProperty(student)) {
                allRatingsByStudent[student].push(assignmentWithRatings)
            }
            else {
                allRatingsByStudent[student] = [assignmentWithRatings]
            }
        })
        return allRatingsByStudent
    }

    //one chunk means one graph

    divideArrayIntoChunks(array) {

        const numberOfGraphs = Math.ceil(array.length / this.state.maxAssignmentsPerGraph)
        const assignmentsPerGraph = Math.ceil(array.length / numberOfGraphs)
        let newArray = []
        if (!array.length % numberOfGraphs) {
            for (let i = 0; i < array.length; i += assignmentsPerGraph) {
                newArray.push(array.slice(i, i + assignmentsPerGraph))
            }
        }
        else {
            for (let i = 0; (array.length - i) % (assignmentsPerGraph - 1); i += assignmentsPerGraph) {
                newArray.push(array.slice(i, i + assignmentsPerGraph))
            }
            for (let i = (newArray.length * assignmentsPerGraph); i < array.length; i += assignmentsPerGraph - 1) {
                newArray.push(array.slice(i, i + assignmentsPerGraph - 1))
            }
        }
        return newArray
    }



    divideObjectIntoChunks(object) {
        let newObject = {}
        this.state.allStudents.forEach(student => {
            const dividedRatings = this.divideArrayIntoChunks(object[student])
            newObject[student] = dividedRatings
        })
        return newObject
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFilterChange(event) {
        const { name } = event.target
        this.state.shownStudents.includes(name) ?
            this.setState({
                shownStudents: [...this.state.shownStudents].filter(student => name !== student)
            }) :
            this.setState({
                shownStudents: [...this.state.shownStudents].concat(name)
            })

    }

    showRatings(ratingType) {
        return (this.state.shownRatings === ratingType || this.state.shownRatings === "both")
    }

    getFilteredAverageGraphData() {
        const filteredRatings = this.filterStudents(this.state.ratingData, this.state.shownStudents)
        const averageRatings = this.getAllAverages(filteredRatings)
        return this.divideArrayIntoChunks(averageRatings)
    }

    getFilteredStudentGraphData() {
        const ratingsGroupedByStudent = this.groupByStudent(this.state.ratingData)
        return this.divideObjectIntoChunks(ratingsGroupedByStudent)
    }


    render() {
        return (
            <>
                <header>
                    <h1>Student Dashboard</h1>
                </header>
                <div>
                    <NavBar allStudents={this.state.allStudents} />
                    <div className="content">
                        <div>
                            <form onChange={this.handleChange}>
                                <Radio
                                    value="fun"
                                    checked={this.state.shownRatings === "fun"}
                                    text="Show Fun ratings"
                                />

                                <br />
                                <Radio
                                    value="difficulty"
                                    checked={this.state.shownRatings === "difficulty"}
                                    text="Show difficulty ratings"
                                />

                                <br />
                                <Radio
                                    value="both"
                                    checked={this.state.shownRatings === "both"}
                                    text="Show both"
                                />
                            </form>
                        </div>

                        <div className="filterlist">
                            <form onChange={this.handleFilterChange} >
                                {this.getAllStudents().map((student, index) =>
                                    <FilterListItem
                                        checked={this.state.shownStudents.includes(student)}
                                        student={student}
                                        key={index}
                                    />
                                )}
                            </form>
                        </div>
                        <Routes>
                            <Route
                                path="/"
                                element={<GraphList
                                    allGraphsData={this.getFilteredAverageGraphData()}
                                    showFunRating={this.showRatings("fun")}
                                    showDifficultyRating={this.showRatings("difficulty")}
                                />}
                            />
                            <Route
                                path="/:studentName"
                                element={<Student
                                    allRatings={this.getFilteredStudentGraphData()}
                                    showFunRating={this.showRatings("fun")}
                                    showDifficultyRating={this.showRatings("difficulty")}
                                />}
                            />
                        </Routes>
                    </div>
                </div>
            </>
        )
    }
}


export default Root