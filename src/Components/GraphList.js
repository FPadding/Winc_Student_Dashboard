import Graph from "./Graph"

export function GraphList({ allGraphsData }) {
    return (
        <>
            {
                allGraphsData.map(chunk => (
                    <Graph graphData={chunk} />
                )

                )
            }
        </>
    )
}

