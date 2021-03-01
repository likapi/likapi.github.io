var OS = "OS inconnu"; 
if (navigator.userAgent.indexOf("Win") != -1) OS = "Windows"; 
if (navigator.userAgent.indexOf("Mac") != -1) OS =  "Macintosh"; 
if (navigator.userAgent.indexOf("Linux") != -1) OS =  "Linux"; 
if (navigator.userAgent.indexOf("Android") != -1) OS =  "Android"; 
if (navigator.userAgent.indexOf("like Mac") != -1) OS =  "iOS"; 

if (OS = "Linux") {
	document.getElementById("download-tracker").innerHTML = '<li class="cta-button disable-select"><a href="https://github.com/likapi/tracker/releases/download/v1.0-beta/v1.0-beta-likapi.deb" target="_blank">Télécharger</a></li>';
}

if (OS = "Windows") {
	document.getElementById("download-tracker").innerHTML = '<li class="cta-button disable-select"><a href="https://github.com/likapi/tracker" target="_blank">Télécharger</a></li>';
}

if (OS = "Macintosh") {
	document.getElementById("download-tracker").innerHTML = '<li class="cta-button disable-select"><a href="https://github.com/likapi/tracker" target="_blank">Télécharger</a></li>';
}