
// bring in d3 if its not globaly available (e.g. browser side usage)
var d3 = d3 || require('d3');

var element =  typeof module !== 'undefined' && module.exports ? 'body' : '#my-visualisation';

var data = [3, 5, 8, 4, 7];

// create the outer svg
var svg = d3.select(element)
            .append('svg')
              .attr('height', 100)
              .attr('width', 500);

// append circles for each data point sized relative to the value
svg.selectAll('circle')
    .data(data)
    .enter()
        .append('circle')
        .attr('cx', function (d, i) {
            return (i + 1) * 100 - 50;
        })
        .attr('cy', svg.attr('height') / 2)
        .attr('r', function (d) {
            return d * 5;
        });

// Export it
if (typeof module !== 'undefined' && module.exports) {
    module.exports = svg;
}

