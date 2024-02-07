<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D3.js Chart</title>
    <!-- Include D3.js library -->
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <!-- Include TopoJSON library -->
    <script src="https://cdn.jsdelivr.net/npm/topojson@3"></script>
    <style>
        /* Add any custom styles here */
    </style>
</head>
<body>
    <!-- SVG container for D3.js chart -->
    <svg id="chart"></svg>

    <!-- D3.js code -->
    <script>
        const width = 975;
        const height = 610;

        const zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoomed);

        const svg = d3.select("#chart")
            .attr("viewBox", [0, 0, width, height])
            .attr("width", width)
            .attr("height", height)
            .attr("style", "max-width: 100%; height: auto;")
            .on("click", reset);

        const g = svg.append("g");

        // Load your TopoJSON data
        d3.json("path/to/your/states-albers-10m.json").then(function(us) {
            const path = d3.geoPath();

            const states = g.append("g")
                .attr("fill", "#444")
                .attr("cursor", "pointer")
                .selectAll("path")
                .data(topojson.feature(us, us.objects.states).features)
                .join("path")
                .on("click", clicked)
                .attr("d", path);

            states.append("title")
                .text(d => d.properties.name);

            g.append("path")
                .attr("fill", "none")
                .attr("stroke", "white")
                .attr("stroke-linejoin", "round")
                .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));

            svg.call(zoom);
        });

        function reset() {
            g.transition().style("fill", null);
            svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
        }

        function clicked(event, d) {
            const [[x0, y0], [x1, y1]] = path.bounds(d);
            event.stopPropagation();
            g.transition().style("fill", null);
            d3.select(this).transition().style("fill", "red");
            svg.transition().duration(750).call(
                zoom.transform,
                d3.zoomIdentity
                    .translate(width / 2, height / 2)
                    .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
                    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
                d3.pointer(event, svg.node())
            );
        }

        function zoomed(event) {
            const {transform} = event;
            g.attr("transform", transform);
            g.attr("stroke-width", 1 / transform.k);
        }
    </script>
</body>
</html>
