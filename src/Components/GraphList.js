import Graph from "./Graph"

const GraphList = ({ allGraphsData, showFunRating, showDifficultyRating }) => (
    <>
        {
            allGraphsData.map((chunk, index) => (
                <Graph
                    graphData={chunk}
                    showDifficultyRating={showDifficultyRating}
                    showFunRating={showFunRating}
                    key={index}
                />
            )

            )
        }
    </>
)
export default GraphList

