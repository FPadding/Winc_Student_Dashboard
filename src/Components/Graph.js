import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryGroup,
} from "victory";

const Graph = ({ graphData, showFunRating, showDifficultyRating }) => (
    <VictoryChart domainPadding={8}>
        <VictoryGroup offset={7} >
            {showDifficultyRating &&
                <VictoryBar
                    color="#3c558f"
                    data={graphData}
                    x="assignment"
                    y="difficultyRating"
                    tickFormat={graphData.map(
                        avg => avg.assignment
                    )}
                />
            }
            {showFunRating &&
                <VictoryBar
                    color="#8f443c"
                    data={graphData}
                    x="assignment"
                    y="funRating"
                    tickFormat={graphData.map(
                        avg => avg.assignment
                    )}
                />
            }
        </VictoryGroup >
        <VictoryAxis
            style={{
                tickLabels: {
                    angle: -40,
                    textAnchor: "end",
                    padding: 0
                },
                ticks: {
                    size: 5,
                    stroke: "#000",
                    strokeWidth: 2,
                }
            }}
            tickFormat={graphData.map(avg =>
                avg.assignment
            )}
        />
        <VictoryAxis
            dependentAxis
            tickValues={[1, 2, 3, 4, 5]}
            style={{
                grid: {
                    stroke: "#00000033"
                }
            }}
        />
    </VictoryChart>
)

export default Graph