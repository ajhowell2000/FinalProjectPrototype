var success= function(teams){
    console.log("Data collected",teams)
    console.log(teams[0].Championships)
    drawgraph(teams)
    ;
}

var error= function(err){
    console.log("Something went wrong", err)
}
var teamPromise= d3.csv("SerieA.csv")
teamPromise.then(success,error)

var width="600";
var height="600";

var svg= d3.select("svg")
        .attr("width", width)
        .attr("height",height)
        .attr("id", "graph")
var drawgraph= function(teams){

var screen={width:800, height:400}

var margins={top:75, bottom:100, left:100, right:100,}
var graph={width:screen.width-margins.right-margins.left}

var teams= [{ Cor:1, Name1:"Championships", Name2:"Championships"},
{ Cor:1, Name1:"Value", Name2:"Value"}, {Cor:0.5, Name1:"Value", Name2:"Championships"},{Cor:0.5,Name1:"Championships", Name2:"Value"}]

var Scales= d3.scaleBand()
    .domain(["Championships", "Value"])
    .range([0,graph.width-500])

var xPos= function(team){
   return Scales(team.Name1)+90
}
var yPos= function(team){
    return Scales(team.Name2)+75
}
var rect= svg.selectAll("rect")
    .data(teams)
    .enter()
    .append("rect")
    
    .attr("class", "rect1")
    .attr("x",xPos)
    .attr("y", yPos)
    .attr("width","50")
    .attr("height", "50")
    .attr("fill", "red")
    
svg.selectAll("text")
    .data(teams)
    .enter()
    .append("text")
    .attr("class", "Text")    
    .attr("transform","translate(100,"+(150)+")")
    .text(function(team){return team.Cor})
    

   
  
createaxes(Scales)
}
   
var createaxes= function(Scales){
    var xAxis=d3.axisTop(Scales)
    var yAxis=d3.axisLeft(Scales)
    
   //creating x-axis
    svg.append("g")
        .attr("class", "axis")
.attr("transform","translate(90,"+(75)+")")
        .call(xAxis)
    //y-axis
   
    svg.append("g")
    .attr("class", "axis2")
    .attr("transform","translate(90,"+(75)+")")
    .call(yAxis)
    

}

//var initgraph= function(){}


//var changegraph= function(){}

//var initLabels= function(xScale,yScale){}