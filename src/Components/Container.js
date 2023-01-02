import React from "react"
import ratingData from "../ratingData"
import AverageGraph from "./AverageGraph"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            ratingData: ratingData,
            allAverages: []
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
        let allStudents = {}
        array.forEach(entry => {
            const student = entry.name
            const assignmentWithRatings = {
                assignment: entry.assignment,
                funRating: entry.funRating,
                difficultyRating: entry.difficultyRating,
            }
            if (allStudents.hasOwnProperty(student)) {
                allStudents[student].push(assignmentWithRatings)
            }
            else {
                allStudents[student] = [assignmentWithRatings]
            }
        })
        return allStudents
    }

    componentDidMount() {
        const allAverages = this.getAllAverages([...this.state.ratingData])
        const allAveragesSplit = this.divideArrayIntoChunks(allAverages, 4)
        console.log(allAveragesSplit)
        this.setState({
            allAverages: allAveragesSplit
        })
    }



    divideArrayIntoChunks(array, numberOfChunks) {
        const itemsPerChunk = Math.ceil(array.length / numberOfChunks)
        let newArray = []
        for (let i = 0; i < array.length; i += itemsPerChunk) {
            newArray.push(array.slice(i, i + itemsPerChunk))
        }
        return newArray
    }


    render() {
        return (
            <div>
                {
                    this.state.allAverages.map(chunk => (
                        <AverageGraph graphData={chunk} />
                    )

                    )
                }
            </div>
        )
    }
}


export default Container