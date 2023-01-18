import React from "react"
import ratingData from "../ratingData"
import { Route, Routes } from "react-router-dom"
import Student from "./Student"
import FilterListItem from "../Components/FilterListItem"
import NavBar from "../Components/NavBar"
import Radio from "../Components/Radio"
import Average from "./Average"

class Root extends React.Component {
    constructor() {
        super()
        this.state = {
            shownRatings: "both",
            shownStudents: [],
            maxAssignmentsPerGraph: 14,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)

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

    firstWord(string) {
        return string.split(" ")[0]
    }

    //returns an object with shortened assignment names as keys, and arrays of their respective ratings as values
    groupByAssignment(array) {
        let allAssignments = {}
        array.forEach(entry => {
            const { assignment, funRating, difficultyRating } = entry
            const assignmentNameShort = this.firstWord(assignment) //removes spaces, so the name can be used as an object key
            const ratings = {
                funRating: funRating,
                difficultyRating: difficultyRating,
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

    getAverage(array, key) {
        return array.reduce((currentSum, newValue) => currentSum + parseInt(newValue[key]), 0) / array.length
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



    //returns an object with student names as keys, and arrays of their respective ratings as values
    groupByStudent(array) {
        let allRatingsByStudent = {}
        array.forEach(entry => {
            const { name, assignment, funRating, difficultyRating } = entry
            const assignmentWithRatings = {
                assignment: this.firstWord(assignment),
                funRating: parseInt(funRating),
                difficultyRating: parseInt(difficultyRating),
            }
            if (allRatingsByStudent.hasOwnProperty(name)) {
                allRatingsByStudent[name].push(assignmentWithRatings)
            }
            else {
                allRatingsByStudent[name] = [assignmentWithRatings]
            }
        })
        return allRatingsByStudent
    }


    //devides an array of ratings into smaller arrays, so that the ratings are split over multiple graphs
    divideArrayIntoChunks(array) {
        if (array.length) {
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
        return []
    }

    //the graph data gets passed to the Student Component as an object, so this extra function is needed
    divideObjectIntoChunks(object) {
        let newObject = {}
        this.getAllStudents().forEach(student => {
            const dividedRatings = this.divideArrayIntoChunks(object[student])
            newObject[student] = dividedRatings
        })
        return newObject
    }

    getFilteredAverageGraphData() {
        const filteredRatings = this.filterStudents(ratingData, this.state.shownStudents)
        const averageRatings = this.getAllAverages(filteredRatings)
        return this.divideArrayIntoChunks(averageRatings)
    }

    getStudentGraphData() {
        const ratingsGroupedByStudent = this.groupByStudent(ratingData)
        return this.divideObjectIntoChunks(ratingsGroupedByStudent)
    }

    showRatings(ratingType) {
        return (this.state.shownRatings === ratingType || this.state.shownRatings === "both")
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

    render() {
        return (
            <>
                <header>
                    <h1>Student Dashboard</h1>
                </header>
                <NavBar allStudents={this.getAllStudents()} />
                <div className="graphs">
                    <Routes>
                        <Route
                            path="/"
                            element={<Average
                                allGraphsData={this.getFilteredAverageGraphData()}
                                showFunRating={this.showRatings("fun")}
                                showDifficultyRating={this.showRatings("difficulty")}
                            />}
                        />
                        <Route
                            path="/:studentName"
                            element={<Student
                                allGraphsData={this.getStudentGraphData()}
                                showFunRating={this.showRatings("fun")}
                                showDifficultyRating={this.showRatings("difficulty")}
                            />}
                        />
                    </Routes>
                </div>
                <div className="filters">
                    <h3>Filters</h3>
                    <form onChange={this.handleFilterChange} >
                        {this.getAllStudents().map((student, index) =>
                            <FilterListItem
                                checked={this.state.shownStudents.includes(student)}
                                student={student}
                                key={index}
                            />
                        )}
                    </form>
                    <hr />
                    <form onChange={this.handleChange}>
                        {["fun ratings", "difficulty ratings", "both"].map((string, index) =>
                            <Radio
                                value={this.firstWord(string)}
                                checked={this.state.shownRatings === this.firstWord(string)}
                                text={`Show ${string}`}
                                key={index}
                            />
                        )}
                    </form>
                </div>
            </>
        )
    }
}


export default Root