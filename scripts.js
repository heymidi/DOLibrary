var arraySP13 = [];
var arraySP10 = [];
var arraySP07 = [];
var arrayApple = [];
var arrayJS = [];
var arrayHTML5 = [];
var arrayC = [];
var arrayASP = [];
var arrayAdobe = [];
var arrayRuby = [];
var arrayCouch = [];
var arrayCPlus = [];
var arrayWindows = [];
var arrayTCP = [];
var arrayMisc = [];

	

function subSP13() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arraySP13.push(listItem);
}

function subSP10() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arraySP10.push(listItem);
}

function subSP07() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arraySP07.push(listItem);
}

function subApple() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayApple.push(listItem);
}

function subJS() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayJS.push(listItem);
}

function subHTML5() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayHTML5.push(listItem);
}

function subC() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayC.push(listItem);
}

function subASP() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayASP.push(listItem);
}

function subAdobe() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayAdobe.push(listItem);
}

function subRuby() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayRuby.push(listItem);
}

function subCouch() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayCouch.push(listItem);
}

function subCPlus() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayCPlus.push(listItem);
}

function subWindows() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayWindows.push(listItem);
}

function subTCP() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayTCP.push(listItem);
}

function subMisc() {
	this.firstName = document.getElementById("firstname").value;
	this.lastName = document.getElementById("lastname").value;		
	this.bookTitle = document.getElementById("title").value;
	var listItem = firstName + " " + lastName + " - " + bookTitle;
	arrayMisc.push(listItem);
}

function findSelectedValue() {
	this.selectedValue = $("input[name='subject']:checked").val();
	switch (selectedValue) {
	    case "Sharepoint2013":
	    	for (var i = 0; i < arraySP13.length; i++ ) {
	    		var SP13value = arraySP13[i];
	       		$('#SP13 ul').append('<li>' + SP13value + '</li>');
	    	}
	        break;
	    case "Sharepoint2010":
		    for (var i = 0; i < arraySP10.length; i++ ) {
		    	var SP10value = arraySP10[i];
		        $("#SP10 ul").append('<li>' + SP10value + '</li>');
		    }
	        
	        break;
	    case "Sharepoint2007":
	        for (var i = 0; i < arraySP07.length; i++ ) {
	        	var SP07value = arraySP07[i];
	       		$("#SP07 ul").append('<li>' + SP07value+ '</li>');
	    	}
	        break;
	    case "Apple":
	        for (var i = 0; i < arrayApple.length; i++ ) {
	        	var Applevalue = arrayApple[i];
	        	$("#Apple ul").append('<li>' + Applevalue + '</li>');
	   		}
	        break;
	    case "JavaScript":
	        for (var i = 0; i < arrayJS.length; i++ ) {
	        	var JSvalue = arrayJS[i];
	        	$("#JS ul").append('<li>' + JSvalue + '</li>');
	   		}
	        break;
	    case "HTML5":
	        for (var i = 0; i < arrayHTML5.length; i++ ) {
	        	var HTML5value = arrayHTML5[i];
	        	$("#HTML5 ul").append('<li>' + HTML5value + '</li>');
	    	}
	        break;
	    case "C":
	        for (var i = 0; i < arrayC.length; i++ ) {
	        	var Cvalue = arrayC[i];
	        	$("#C ul").append('<li>' + Cvalue + '</li>');
	    	}
	        break;
	    case "ASP":
	        for (var i = 0; i < arrayASP.length; i++ ) {
	        	var ASPvalue = arrayASP[i];
	        	$("#ASP ul").append('<li>' + ASPvalue + '</li>');
	    	}
	        break;
	    case "Adobe":
	        for (var i = 0; i < arrayAdobe.length; i++ ) {
	        	var Adobevalue = arrayAdobe[i];
	        	$("#Adobe ul").append('<li>' + Adobevalue + '</li>');
	    	}
	        break;
	    case "Ruby":
	        for (var i = 0; i < arrayRuby.length; i++ ) {
	        	var Rubyvalue = arrayRuby[i];
	        	$("#Ruby ul").append('<li>' + Rubyvalue + '</li>');
	    	}
	        break;
	    case "Couch":
	        for (var i = 0; i < arrayCouch.length; i++ ) {
	        	var Couchvalue = arrayCouch[i];
	        	$("#Couch ul").append('<li>' + Couchvalue + '</li>');
	    	}
	        break;
	    case "CPlus":
	        for (var i = 0; i < arrayCPlus.length; i++ ) {
	        	var CPlusvalue = arrayCPlus[i];
	        	$("#CPlus ul").append('<li>' + CPlusvalue + '</li>');
	    	}
	        break;
	    case "Windows":
	        for (var i = 0; i < arrayWindows.length; i++ ) {
	        	var Windowsvalue = arrayWindows[i];
	        	$("#Windows ul").append('<li>' + Windowsvalue + '</li>');
	    	}
	        break;
	    case "TCP":
	        for (var i = 0; i < arrayTCP.length; i++ ) {
	        	var TCPvalue = arrayTCP[i];
	        	$("#TCP ul").append('<li>' + TCPvalue + '</li>');
	    	}
	        break;
	    case "Misc":
	        for (var i = 0; i < arrayMisc.length; i++ ) {
	        	var Miscvalue = arrayMisc[i];
	        	$("#Misc ul").append('<li>' + Miscvalue + '</li>');
	    	}
	        break;
	   
	}
}


//Problems (beyond never being able to hit refresh)
/* - what is the unexpected identifier? 
   - the list is only ever going to update one section at a time */


