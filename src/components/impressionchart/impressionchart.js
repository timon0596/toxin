let impressionChart = require.context("../../img/chart", true, /\.svg$/)
console.log(impressionChart)
$("section.impressions .chart img").each(function(i,el){
	el.src="./img"+impressionChart.keys()[i].slice(1)
})