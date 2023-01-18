import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryGroup,
} from "victory";



const Graph = ({ graphData, showFunRating, showDifficultyRating }) => (
    <VictoryChart domainPadding={8}>
        <VictoryGroup offset={6}>
            {showDifficultyRating &&
                <VictoryBar
                    data={graphData}
                    x="assignment"
                    y="difficultyRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={graphData.map(
                        avg => avg.assignment
                    )}
                />
            }
            {showFunRating &&
                <VictoryBar
                    data={graphData}
                    x="assignment"
                    y="funRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={graphData.map(
                        avg => avg.assignment
                    )}
                />
            }

        </VictoryGroup >
        <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            style={{
                tickLabels: {
                    angle: -40,
                    textAnchor: "end",
                    padding: 0
                },
                ticks: {
                    size: 5,
                    stroke: "#000",
                    strokeWidth: 4
                }
            }}

            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={graphData.map(
                avg => avg.assignment
            )}
        />
        <VictoryAxis dependentAxis />
    </VictoryChart>
)

export default Graph