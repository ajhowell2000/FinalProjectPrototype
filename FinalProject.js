var success= function(teams){
    console.log("Data collected",teams)
    console.log(teams[0].Championships)
    drawgraph(teams);
}

var error= function(err){
    console.log("Something went wrong", err)
}
var teamPromise= d3.csv("SerieA.csv")
teamPromise.then(success,error)

var width="600";
var height="300";

var svg= d3.select("svg")
        .attr("width", screen.width)
        .attr("height", screen.height)
        .attr("id", "graph")
var drawgraph= function(teams){

var screen={width:800, height:400}

var margins={top:75, bottom:100, left:100, right:100,}
var graph={width:screen.width-margins.left-margins.right}

var rect= svg.selectAll("rect")
    .data(teams)
    .enter()
    .append("rect")
    

    rect.text(teams[8].Championships)
    .attr("fill", "blue")
   
    
       

var xScale= d3.scaleOrdinal()
    .domain(["championships", "mval"])
    .range(1)

var yScale= d3.scaleOrdinal()
    .domain(["mval","championships"])
    .range(1)}

var createaxes= function(xScale, yScale){
    var xAxis=d3.axisTop(xScale)
    var yAxis=d3.axisLeft(yScale)
    
    var axes= d3.select("svg")
            .append("g")
            .attr("class", "axes")
    //y-axis
    axes.append("g")
    .call(yAxis)
    
    //x-axis
        axes.append("g")
    .call(xAxis)
}



//var initgraph= function(){}


//var changegraph= function(){}

//var initLabels= function(xScale,yScale){}