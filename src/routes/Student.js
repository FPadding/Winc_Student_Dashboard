import { useParams } from "react-router-dom"
import GraphList from "../Components/GraphList"

const Student = ({ allRatings, showFunRating, showDifficultyRating }) => {
    const student = useParams().studentName
    return (
        <GraphList
            allGraphsData={allRatings[student]}
            showFunRating={showFunRating}
            showDifficultyRating={showDifficultyRating}
        />
    )
}
export default Student