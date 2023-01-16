import React from "react"
import ratingData from "../ratingData"
import { Route, Routes, Link } from "react-router-dom"
import { GraphList } from "../Components/GraphList"
import { Student } from "./Student"


class Root extends React.Component {
    constructor() {
        super()
        this.state = {
            ratingData: ratingData,
            allAverages: [],
            allStudents: [],
            ratingsGroupedByStudent: {},
            showFunRating: true,
            showDifficultyRating: true,
        }
        // this.groupByAssignment = this.groupByAssignment.bind(this)
        // this.getAllAverages = this.getAllAverages.bind(this)

    }

    getAverage(array, key) {
        return array.reduce((currentSum, newValue) => currentSum + parseInt(newValue[key]), 0) / array.length
    }

    firstWord(string) {
        return string.split(" ")[0]
    }

    groupByAssignment(array) {
        let allAssignments = {}

        array.forEach(entry => {
            const assignmentName = this.firstWord(entry.assignment) //removes spaces, so the name can be used as an object key
            const ratings = {
                funRating: entry.funRating,
                difficultyRating: entry.difficultyRating,
            }
            if (allAssignments.hasOwnProperty(assignmentName)) {
                allAssignments[assignmentName].push(ratings)
            }
            else {
                allAssignments[assignmentName] = [ratings]
            }
        });
        // console.log(allAssignments)
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
                assignment: entry.assignment,
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

    divideArrayIntoChunks(array, numberOfChunks) {
        const itemsPerChunk = Math.ceil(array.length / numberOfChunks)
        let newArray = []
        for (let i = 0; i < array.length; i += itemsPerChunk) {
            newArray.push(array.slice(i, i + itemsPerChunk))
        }
        return newArray
    }

    divideObjectIntoChunks(array, numberOfChunks) {
        const allRatingsByStudent = this.groupByStudent(array)
        let newObject = {}
        const allStudents = Object.keys(allRatingsByStudent)
        allStudents.forEach(student => {
            const dividedRatings = this.divideArrayIntoChunks(allRatingsByStudent[student], numberOfChunks)
            newObject[student] = dividedRatings
        })
        return newObject
    }

    componentDidMount() {
        const allAverages = this.getAllAverages([...this.state.ratingData])
        const allAveragesSplit = this.divideArrayIntoChunks(allAverages, 4)
        const ratingsGroupedByStudent = this.divideObjectIntoChunks([...this.state.ratingData], 4)
        const allStudents = Object.keys(ratingsGroupedByStudent)
        console.log(ratingsGroupedByStudent)
        this.setState({
            allAverages: allAveragesSplit,
            allStudents: allStudents,
            ratingsGroupedByStudent: ratingsGroupedByStudent,
        })
    }






    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <ul>
                        {this.state.allStudents.map(student => (
                            <li>
                                <Link to={`/${student}`}>{student}</Link>
                            </li>
                        ))}
                    </ul>

                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={<GraphList
                            allGraphsData={this.state.allAverages}
                        />}
                    />
                    <Route
                        path="/:studentName"
                        element={<Student
                            allRatings={this.state.ratingsGroupedByStudent}
                        />}
                    />
                </Routes>
            </div>
        )
    }
}


export default Root