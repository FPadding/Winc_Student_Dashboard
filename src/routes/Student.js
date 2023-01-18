import { useParams } from "react-router-dom"
import GraphList from "../Components/GraphList"
import Legend from "../Components/Legend"

const Student = ({ allGraphsData, showFunRating, showDifficultyRating }) => {
    const student = useParams().studentName
    return (
        <>
            <Legend />
            <h2>{`${student}'s ratings`}</h2>
            <GraphList
                allGraphsData={allGraphsData[student]}
                showFunRating={showFunRating}
                showDifficultyRating={showDifficultyRating}
            />
        </>
    )
}

export default Student