import { useParams } from "react-router-dom"
import { GraphList } from "../Components/GraphList"

export function Student({ allRatings }) {
    const student = useParams().studentName
    return (
        <GraphList allGraphsData={allRatings[student]} />
    )
}