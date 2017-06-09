var matrix = [
		[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
       [.6, 0, 0, 0, .6, 0.6, .6, 0, .6, .6, 0, .6, .6, .6],
       [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 1.33, 0, 0, 0, 1.33, 1.33, 0, 0, 0, 0],
       [0, 1.3, 1.3, 1.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
       [0, 1.3, 0, 0, 0, 0, 0, 1.3, 0, 0, 0, 1.3, 0, 0],
       [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
       [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
       [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
       [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
       [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
       [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
       [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0]
	];

var labels = ["Préfecture de police", "Mairie de Paris", "Ministère de l'environnement", "Conseil d'état", "Assemblée nationale", "Imprimerie nationale", "U. E.", "Constructeurs auto", "Habitants", "Automobilistes", "Associations", "OMS", "Air Parif", "Média"];
var cats = ["etat", "etat", "etat", "etat", "etat", "etat", "etat", "entreprises", "societe civile", "societe civile", "societe civile", "expert", "expert", "media"];
var colorCats = {"etat" : "#58c649", "entreprises" : "#dfde26", "societe civile" : "#df7c26", "expert" : "#df262a", "media" : "#0974bf"};
//colorCats = {"constructeur" : "#48926d", "equipementier" : "#429941", "etat" : "#28827d", "usager" : "#0269d6", "ong" : "#39914f", "media" : "#0974bf", "chercheur" : "#54b02a"};
var colors = [];
for(var i = 0; i < labels.length; i++)
  colors[i] = colorCats[cats[i]];

$(".legend").find("li").each(function() {
  var lgspan = $(this).find("span").first();
  lgspan.css("background-color", colorCats[lgspan.attr("class")]);
});

//var content = [[0], [1], [3], [4], [5], [6], [17], [7], [8], [9], [10], [13], [11], [12], [14], [16]];
var content = [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13]];


var contentText = [["Préfecture de police", "Pénalise les conducteurs en cas de non respect du certificat et des lois. Est en charge de faire respecter la loi vis à vis de la loi crit'air, et effectue les contrôles demandés par la mairie."],
                ["Marie de Paris", "Met en place le certificat qui concernent les automobilistes et les habitants. Ils ont à coeur de mener une politique écolo, et avoir une ville sans diesel d'ici 2020, et sans voiture d'ici 2022. Demande à la prefecture de faire des contrôles. Donne des informations aux médias sur la vignette. Se base sur les données de Air Parif et sur les seuils de l'OMS pour décider de mise en place de mesures préventives. "],
				["Ministère de l'environnement", "A soutenu la mise en place du certificat. Propose à l'assemblée nationale un projet de loi, puis une fois celui-ci accepté, émet le décret."],
				["Conseil d'Etat", "Protège les droits des citoyens en s'assurant du respect de la constituton."],
				["Assemblée nationale", "A accepté le projet de loi que lui a proposé le ministère de l'environnement."],
				["Imprimerie Nationale", "Imprime pour le ministère de l'environnement les certificats Crit'Air. Le coût de fabrication est exactement couvert par les 4,18€ que paie chaque automobiliste par vignette."],
				["Union Européenne", "L'union européenne fixe les normes euros que doivent respecter les constructeurs automobiles. Ces normes sont fixées avec l'OMS."],
				["Constructeurs automobiles", "Rendent leurs véhicules moins pollutants (pots catalytiques et filtres antiparticules). Les nouveaux véhicules sont construits en respectant les normes européennes."],
				["Habitants", "Présents dans la ville, ils subissent directement les conséquences de la pollution. Ils doivent respecter les règles imposées par la mairie et la préfecture. Ils peuvent se regrouper en association pour manisfester leur avis."],
				["Automobilistes", "Ils sont les premiers concernés et doivent se soumettre à ce nouveau système pour circuler dans certaines zones. Ils achètent donc la vignette crit'air. Certains manifestent leur mécontentement à travers les médias et les associations."],
				["Associations", "Elles expriment le point de vue des habitants et des automobilistes dans les médias."],
				["Organisation Mondiale de la Santé", "Fixe les normes pour la pollution ; il y a des seuils pour chaque polluant. Ces normes seront ensuite reprises les mairies, les médias et l'Union Européenne pour juger du niveau de pollution."],
				["Air Parif", "Mesure quotidiennement la pollution en région parisienne. Ses normes sont en accord avec celles de l'OMS. Ils préviennent la mairie et les médias lors des pics de pollution."],
				["Media", "Les médias grand public relaient des informations sur le système, souvent en reprenant le discours de l'Etat, donc légitiment sa mise en place. Les médias spécialisés ont plus tendance à dénoncer un système subjectif et absurde selon eux."]
				]
var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

	
	/* on peut jouer sur le -20 pour faire varier la taille du graphique à l'intérieur du cadre */
var dim = Math.min($(window).width() / 2, $(window).height()) - 100;
var margX = ($(window).width() / 2 > $(window).height()) ? ($(window).width()/2 - $(window).height()) / 2 : 0;
var margY = 500 + ($(window).width() / 2 < $(window).height()) ? ($(window).height() - $(window).width()/2) / 2 : 0;

var width = dim,
    height = dim,
    innerRadius = dim * .4,
    outerRadius = innerRadius * 1.1;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(colors);

	
	/* on peut jouer sur la taille du cadre ici */
var svg = d3.select("body").append("svg")
    .attr("width", $(window).width() / 2 + 200)
    .attr("height", $(window).height() - 0)
  .append("g")
    .attr("transform", "translate(" + (dim / 2 + margX + 50)  + "," + (dim / 2 + margY + 60) + ")");

var bg = [{ "x_axis": 0, "y_axis": 0, "radius": innerRadius, "color" : "#EEEEEE" }];
var circle = svg.selectAll("circle")
    .data(bg)
  .enter().append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", innerRadius)
    .style("fill", "#333");

svg.append("g").selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

svg.append("g").append('defs')
    .append('path')
    .attr({
      d: "M10 50 C10 0 90 0 90 50",
      id: "textPath"
    });

var ticks = svg.append("g").selectAll("g")
    .data(chord.groups)
  .enter().append("g").selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + ((d.angle - Math.PI/2)*180/Math.PI) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("text")
    .attr("dy", "-10")
    .style("fill", "#EEEEEE")
    .text(function(d) { return d.label; })
    .attr("class", "labelTxt")

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return getColor(d); })
    .style("opacity", 1)
    .on("mouseover", chordFade(.1))
    .on("mouseout", chordFade(1));

// mix rgb
function getColor(d)
{
  var r, g, b;
  r = parseInt(fill(d.source.index).substr(1, 2), 16) * 1.0 / 2 + parseInt(fill(d.target.index).substr(1, 2), 16) * 1.0 / 2;
  g = parseInt(fill(d.source.index).substr(3, 2), 16) * 1.0 / 2 + parseInt(fill(d.target.index).substr(3, 2), 16) * 1.0 / 2;
  b = parseInt(fill(d.source.index).substr(5, 2), 16) * 1.0 / 2 + parseInt(fill(d.target.index).substr(5, 2), 16) * 1.0 / 2;
  return("#" + Math.floor(r).toString(16) + Math.floor(g).toString(16) + Math.floor(b).toString(16));
}
/*
//mix hsv
function getColor(d)
{
  var r1, g1, b1;
  var r2, g2, b2;
  r1 = parseInt(fill(d.source.index).substr(1, 2), 16);
  g1 = parseInt(fill(d.source.index).substr(3, 2), 16);
  b1 = parseInt(fill(d.source.index).substr(5, 2), 16);
  r2 = parseInt(fill(d.target.index).substr(1, 2), 16);
  g2 = parseInt(fill(d.target.index).substr(3, 2), 16);
  b2 = parseInt(fill(d.target.index).substr(5, 2), 16);
  var hsv1 = rgb2hsv(r1, g1, b1);
  var hsv2 = rgb2hsv(r2, g2, b2);
  return(hsv2rgb((hsv1[0] + hsv2[0])/2, (hsv1[1] + hsv2[1])/2, (hsv1[2] + hsv2[2])/2));
}

function rgb2hsv (r, g, b) {
 var computedH = 0;
 var computedS = 0;
 var computedV = 0;

 //remove spaces from input RGB values, convert to int
 var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
 var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
 var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

 if ( r==null || g==null || b==null ||
     isNaN(r) || isNaN(g)|| isNaN(b) ) {
   alert ('Please enter numeric RGB values!');
   return;
 }
 if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
   alert ('RGB values must be in the range 0 to 255.');
   return;
 }
 r=r/255; g=g/255; b=b/255;
 var minRGB = Math.min(r,Math.min(g,b));
 var maxRGB = Math.max(r,Math.max(g,b));

 // Black-gray-white
 if (minRGB==maxRGB) {
  computedV = minRGB;
  return [0,0,computedV];
 }

 // Colors other than black-gray-white:
 var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
 var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
 computedH = 60*(h - d/(maxRGB - minRGB));
 computedS = (maxRGB - minRGB)/maxRGB;
 computedV = maxRGB;
 return [computedH,computedS,computedV];
}

function hsv2rgb(h, s, v)
{
  var rgb, i, data = [];
  if (s === 0) {
    rgb = [v,v,v];
  } else {
    h = h / 60;
    i = Math.floor(h);
    data = [v*(1-s), v*(1-s*(h-i)), v*(1-s*(1-(h-i)))];
    switch(i) {
      case 0:
        rgb = [v, data[2], data[0]];break;
      case 1:
        rgb = [data[1], v, data[0]];break;
      case 2:
        rgb = [data[0], v, data[2]];break;
      case 3:
        rgb = [data[0], data[1], v];break;
      case 4:
        rgb = [data[2], data[0], v];break;
      default:
        rgb = [v, data[0], data[1]];break;
    }
  }
  return '#' + rgb.map(function(x){ 
    return ("0" + Math.round(x*255).toString(16)).slice(-2);
  }).join('');
}*/

// Returns an array of tick angles and labels, given a group.
function groupTicks(d) {
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: (d.endAngle + d.startAngle) / 2,
      label: labels[d.index]
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
      var desc = "";
      for (var i = 0; i < content[g.index].length; i++)
      {
        /*desc += "<div class=\"title\">";
        desc += contentText[content[g.index][i]][0];
        desc += "</div>";*/
        desc += contentText[content[g.index][i]][1];
      }
      $(".box").children(".title").text(labels[g.index]);
      $(".box").children(".desc").html(desc);
  };
}

// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!

function chordFade(time){
  return function(d, i) {
    var thisD = d;
    //console.log(d.source.index + " - " + d.target.index);
    svg.selectAll(".chord path")
        .filter(function(d) { return(thisD != d); })
      .transition()
        .style("opacity", time);
      /*var desc = "";
      for (var i = 0; i < content[g.index].length; i++)
      {
        desc += "<div class=\"title\">";
        desc += contentText[content[g.index][i]][0];
        desc += "</div>";
        desc += contentText[content[g.index][i]][1];
      }
      $(".box").children(".title").text(labels[g.index]);
      $(".box").children(".desc").html(desc);*/
  };
}

// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!
// MUST BE FINISHED !!!

$(document).ready(function(){
  var idx = 0;
  $(".labelTxt").each(function(){$(this).attr("transform", "rotate(" + 90 + ")translate(-" + ($(this).width()/2) + ")");$(this).css("fill", colorCats[cats[idx]]);idx++});

});
