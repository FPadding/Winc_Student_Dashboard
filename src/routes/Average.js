import GraphList from "../Components/GraphList";
import Legend from "../Components/Legend";

const Average = ({ allGraphsData, showFunRating, showDifficultyRating }) => (
    <>
        <Legend />
        <h2>Average ratings</h2>
        <GraphList
            allGraphsData={allGraphsData}
            showFunRating={showFunRating}
            showDifficultyRating={showDifficultyRating}
        />
    </>
)

export default Average