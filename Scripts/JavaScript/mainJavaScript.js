function Services_Context() {

document.getElementById("Side_Projects_Context").style.width = "0";
document.getElementById("Side_Products_Context").style.width = "0";

 if (document.getElementById("Side_Services_Context").style.width > '0px') {
    
    document.getElementById("Side_Services_Context").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	document.getElementById("Top_Navbar").style.width = "100%";
    document.body.style.backgroundColor = "#d3d3d3";
  }
  else {
    document.getElementById("Side_Services_Context").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
	document.getElementById("Top_Navbar").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}

function Products_Context() {

document.getElementById("Side_Projects_Context").style.width = "0";
document.getElementById("Side_Services_Context").style.width = "0";

 if (document.getElementById("Side_Products_Context").style.width > '0px') {
    
    document.getElementById("Side_Products_Context").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	document.getElementById("Top_Navbar").style.width = "100%";
    document.body.style.backgroundColor = "#d3d3d3";
  }
  else {
    document.getElementById("Side_Products_Context").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
	document.getElementById("Top_Navbar").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}

function Projects_Context() {

document.getElementById("Side_Products_Context").style.width = "0";
document.getElementById("Side_Services_Context").style.width = "0";

 if (document.getElementById("Side_Projects_Context").style.width > '0px') {
    
    document.getElementById("Side_Projects_Context").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	document.getElementById("Top_Navbar").style.width = "100%";
    document.body.style.backgroundColor = "#d3d3d3";
  }
  else {
    document.getElementById("Side_Projects_Context").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
	document.getElementById("Top_Navbar").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}