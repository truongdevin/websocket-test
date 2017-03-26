// import d3 from "d3"
const d3 = require("d3")

const connection = new WebSocket('ws://localhost:8001');
connection.onmessage = (event) => { 
    const pathData = JSON.parse(event.data)
    console.log(pathData)

    // const lineFunction = d3.svg.line()
    //     .x((d) => d.x)
    //     .y((d) => d.y)
    //     .interpolate("linear")

    const lineFunction = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        // .interpolate("linear")

    const path = d3.select("svg").append("path")
        .attr("d", lineFunction(pathData))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");

    window.setTimeout(() => {
        path.remove()
    }, 2000)
        
    document.getElementById('result0').value=event.data;
};

