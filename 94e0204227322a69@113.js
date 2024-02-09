function _1(md){return(
md`# U.S. Maps

This map comes pre-projected in U.S. Albers (a [conic equal-area](/@d3/conic-equal-area) projection) from the [TopoJSON U.S. Atlas](https://github.com/topojson/us-atlas) for fast rendering. To [overlay data on the map](/@d3/u-s-state-capitals), use the projection \`d3.geoAlbersUsa().scale(1300).translate([487.5, 305])\`, which is configured for a 975x610 viewport. See also a variant of this projection that [includes Puerto Rico](/@d3/u-s-map-with-puerto-rico).`
)}

function _map(path,topojson,us,htl,d3){return(
htl.html`<svg viewBox="0 0 975 610">
  <g fill="none" stroke="#000" stroke-linejoin="round" stroke-linecap="round">
    <path stroke="#aaa" stroke-width="0.5" d="${path(topojson.mesh(us, us.objects.counties, (a, b) => a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0)))}"></path>
    <path stroke-width="0.5" d="${path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}"></path>
    <path d="${path(topojson.feature(us, us.objects.nation))}"></path>
    ${us.objects.counties.geometries.map((county) => {
        const centroid = path.centroid(county);
        return htl.node`<g>
          <path d="${path(county)}"></path>
          <text x="${centroid[0]}" y="${centroid[1]}" dy=".35em">${county.properties.name}</text>
          <title>${county.properties.name}</title>
        </g>`;
    })}
  </g>
</svg>`
)}

function _path(d3){return(
d3.geoPath()
)}

function _us(FileAttachment){return(
FileAttachment("counties-albers-10m.json").json()
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["counties-albers-10m.json", {url: new URL("./files/6b1776f5a0a0e76e6428805c0074a8f262e3f34b1b50944da27903e014b409958dc29b03a1c9cc331949d6a2a404c19dfd0d9d36d9c32274e6ffbc07c11350ee.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("map")).define("map", ["path","topojson","us","htl","d3"], _map);
  main.variable(observer("path")).define("path", ["d3"], _path);
  main.variable(observer("us")).define("us", ["FileAttachment"], _us);
  return main;
}
