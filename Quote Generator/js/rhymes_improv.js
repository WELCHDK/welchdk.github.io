
// JavaScript Document
var w=["Baa Baa black sheep", "Row Row row your boat", "Hickory Dickory Dock", "The itsy bitsy spider", "Sing a song of sixpence", "Little Miss Muffet", "Hey diddle diddle"];
var x=["have you any wool", "gently down the stream", "the mouse ran up the clock", "climbed up the waterspout", "a pocket full of rye", "sat on a tuffet,", "the cat and the fiddle"];
var y=["yes sir, yes sir ", "merrily merrily merrily merrily", "the clock struck one", "down came the rain and washed the spider out,", "four and twenty blackbirds", "eating her curds and whey", "the cow jumped over the moon"];
var z=["three bags full", "life is but a dream", "the mouse ran down", "out came the sun and dried up all the rain", "baked in a pie", "along came a spider", "the little dog laughed"];

var sub=["I", "We", "Girls", "Cats", "Moose", "Boys", "Pigs"];
var verb=["am", "ran", "chase", "fly", "swim", "jump", "walk"];
var prep=["on", "from", "away", "off", "across", "through", "over"];
var obj=["water", "birds", "rats", "trees", "lakes", "hoops", "logs"];
        
	/*Rhymes visibility function*/
	
	
	
	function rhymeLoad(){
		var quoteGenerate = (w[Math.floor(Math.random() * ((w.length - 1) - 0 + 1))]  
			   + " " + x[Math.floor(Math.random() * ((x.length - 1) - 0 + 1))] 
			   + " " + y[Math.floor(Math.random() * ((y.length - 1) - 0 + 1))] 
			   + " " + z[Math.floor(Math.random() * ((z.length - 1) - 0 + 1))] + "." + "<br>");
		
		document.getElementById("pa").innerHTML="1." + " " + quoteGenerate 
		document.getElementById("pa").style.visibility= "visible";
		
	}
	
	function rhymesQuoteGenerator() {
	var quote = document.getElementById("rhymeInput").value;
	var random = (w[Math.floor(Math.random() * ((w.length - 1) - 0 + 1))]  
			   + " " + x[Math.floor(Math.random() * ((x.length - 1) - 0 + 1))] 
			   + " " + y[Math.floor(Math.random() * ((y.length - 1) - 0 + 1))] 
			   + " " + z[Math.floor(Math.random() * ((z.length - 1) - 0 + 1))] + "." + "<br>");
			   
	var random2 = (w[Math.floor(Math.random() * ((w.length - 1) - 0 + 1))]  
			   + " " + x[Math.floor(Math.random() * ((x.length - 1) - 0 + 1))] 
			   + " " + y[Math.floor(Math.random() * ((y.length - 1) - 0 + 1))] 
			   + " " + z[Math.floor(Math.random() * ((z.length - 1) - 0 + 1))] + "." + "<br>");

	var random3 = (w[Math.floor(Math.random() * ((w.length - 1) - 0 + 1))]  
			   + " " + x[Math.floor(Math.random() * ((x.length - 1) - 0 + 1))] 
			   + " " + y[Math.floor(Math.random() * ((y.length - 1) - 0 + 1))] 
			   + " " + z[Math.floor(Math.random() * ((z.length - 1) - 0 + 1))] + "." + "<br>");
			   
	var random4 = (w[Math.floor(Math.random() * ((w.length - 1) - 0 + 1))]  
			   + " " + x[Math.floor(Math.random() * ((x.length - 1) - 0 + 1))] 
			   + " " + y[Math.floor(Math.random() * ((y.length - 1) - 0 + 1))] 
			   + " " + z[Math.floor(Math.random() * ((z.length - 1) - 0 + 1))] + "." + "<br>");
	
	var random5 = (w[Math.floor(Math.random() * ((w.length - 1) - 0 + 1))]  
			   + " " + x[Math.floor(Math.random() * ((x.length - 1) - 0 + 1))] 
			   + " " + y[Math.floor(Math.random() * ((y.length - 1) - 0 + 1))] 
			   + " " + z[Math.floor(Math.random() * ((z.length - 1) - 0 + 1))] + "." + "<br>");
			   
	var text;

		if (quote === "1") {
		text = "Only one!?";
		
		 document.getElementById("pa").innerHTML="1." + " " + random 
		 
		document.getElementById("pa").style.visibility= "visible";
		document.getElementById("pb").style.visibility= "hidden";
		document.getElementById("pc").style.visibility= "hidden";
		document.getElementById("pd").style.visibility= "hidden";
		document.getElementById("pe").style.visibility= "hidden";


		  } 
		  
		else if (quote === "2") {
		text = "A little better...";
		 
		 document.getElementById("pa").innerHTML="1." + " " + random
		 document.getElementById("pb").innerHTML="2." + " " + random2
	
		document.getElementById("pa").style.visibility= "visible"
		document.getElementById("pb").style.visibility= "visible";
		document.getElementById("pc").style.visibility= "hidden";
		document.getElementById("pd").style.visibility= "hidden";
		document.getElementById("pe").style.visibility= "hidden";

		
		  }
		  
		else if (quote === "3") {
		text = "Even better...";
		
		 document.getElementById("pa").innerHTML="1." + " " + random
		 document.getElementById("pb").innerHTML="2." + " " + random2
		 document.getElementById("pc").innerHTML="3." + " " + random3
		 
		document.getElementById("pa").style.visibility= "visible";
		document.getElementById("pb").style.visibility= "visible";
		document.getElementById("pc").style.visibility= "visible";
		document.getElementById("pd").style.visibility= "hidden";
		document.getElementById("pe").style.visibility= "hidden";
						
	
				
		  }
		  
		else if (quote === "4") {
		text = "One more?";
		
		 document.getElementById("pa").innerHTML="1." + " " + random
		 document.getElementById("pb").innerHTML="2." + " " + random2
		 document.getElementById("pc").innerHTML="3." + " " + random3
		 document.getElementById("pd").innerHTML="4." + " " + random4

		document.getElementById("pa").style.visibility= "visible";
		document.getElementById("pb").style.visibility= "visible";
		document.getElementById("pc").style.visibility= "visible";
		document.getElementById("pd").style.visibility= "visible";
		document.getElementById("pe").style.visibility= "hidden";

		
		  }
		  
		else if (quote === "5") {
		text = "That is more like it!";
		
		 document.getElementById("pa").innerHTML="1." + " " + random
		 document.getElementById("pb").innerHTML="2." + " " + random2
		 document.getElementById("pc").innerHTML="3." + " " + random3
		 document.getElementById("pd").innerHTML="4." + " " + random4
		 document.getElementById("pe").innerHTML="5." + " " + random5

		document.getElementById("pa").style.visibility= "visible";
		document.getElementById("pb").style.visibility= "visible";
		document.getElementById("pc").style.visibility= "visible";
		document.getElementById("pd").style.visibility= "visible";
		document.getElementById("pe").style.visibility= "visible";


		  }
		  
		else {
		text = "Nice try...";
		  }
		  document.getElementById("rhymeText").innerHTML = text;
		}


	/*Improv visibility function*/
	function improvLoad(){
		var quoteGenerate2 = (sub[Math.floor(Math.random() * ((sub.length - 1) - 0 + 1))]  
			   + " " + verb[Math.floor(Math.random() * ((verb.length - 1) - 0 + 1))] 
			   + " " + prep[Math.floor(Math.random() * ((prep.length - 1) - 0 + 1))] 
			   + " " + obj[Math.floor(Math.random() * ((obj.length - 1) - 0 + 1))] + "." + "<br>");
		
		document.getElementById("pf").innerHTML="1." + " " + quoteGenerate2 
		document.getElementById("pf").style.visibility= "visible";
		
	}
	function improvQuoteGenerator() {
	var quote = document.getElementById("improvInput").value;
	var randomOne = (sub[Math.floor(Math.random() * ((sub.length - 1) - 0 + 1))]  
			   + " " + verb[Math.floor(Math.random() * ((verb.length - 1) - 0 + 1))] 
			   + " " + prep[Math.floor(Math.random() * ((prep.length - 1) - 0 + 1))] 
			   + " " + obj[Math.floor(Math.random() * ((obj.length - 1) - 0 + 1))] + "." + "<br>");
			   
	var randomTwo = (sub[Math.floor(Math.random() * ((sub.length - 1) - 0 + 1))]  
			   + " " + verb[Math.floor(Math.random() * ((verb.length - 1) - 0 + 1))] 
			   + " " + prep[Math.floor(Math.random() * ((prep.length - 1) - 0 + 1))] 
			   + " " + obj[Math.floor(Math.random() * ((obj.length - 1) - 0 + 1))] + "." + "<br>");	

	var randomThree = (sub[Math.floor(Math.random() * ((sub.length - 1) - 0 + 1))]  
			   + " " + verb[Math.floor(Math.random() * ((verb.length - 1) - 0 + 1))] 
			   + " " + prep[Math.floor(Math.random() * ((prep.length - 1) - 0 + 1))] 
			   + " " + obj[Math.floor(Math.random() * ((obj.length - 1) - 0 + 1))] + "." + "<br>");
			   
	var randomFour = (sub[Math.floor(Math.random() * ((sub.length - 1) - 0 + 1))]  
			   + " " + verb[Math.floor(Math.random() * ((verb.length - 1) - 0 + 1))] 
			   + " " + prep[Math.floor(Math.random() * ((prep.length - 1) - 0 + 1))] 
			   + " " + obj[Math.floor(Math.random() * ((obj.length - 1) - 0 + 1))] + "." + "<br>");
	
	var randomFive = (sub[Math.floor(Math.random() * ((sub.length - 1) - 0 + 1))]  
			   + " " + verb[Math.floor(Math.random() * ((verb.length - 1) - 0 + 1))] 
			   + " " + prep[Math.floor(Math.random() * ((prep.length - 1) - 0 + 1))] 
			   + " " + obj[Math.floor(Math.random() * ((obj.length - 1) - 0 + 1))] + "." + "<br>");
	var text;


		if (quote === "1") {
		text = "Only one!?";
		 document.getElementById("pf").innerHTML="1." + " " + randomOne
		 
		document.getElementById("pf").style.visibility= "visible";
		document.getElementById("pg").style.visibility= "hidden";
		document.getElementById("ph").style.visibility= "hidden";
		document.getElementById("pi").style.visibility= "hidden";
		document.getElementById("pj").style.visibility= "hidden";

		  } 
		  
		else if (quote === "2") {
		text = "A little better...";
		 document.getElementById("pf").innerHTML="1." + " " + randomOne
		 document.getElementById("pg").innerHTML="2." + " " + randomTwo

		document.getElementById("pf").style.visibility= "visible";
		document.getElementById("pg").style.visibility= "visible";
		document.getElementById("ph").style.visibility= "hidden";
		document.getElementById("pi").style.visibility= "hidden";
		document.getElementById("pj").style.visibility= "hidden";

		  }
		  
		else if (quote === "3") {
		text = "Even better...";
		 document.getElementById("pf").innerHTML="1." + " " + randomOne
		 document.getElementById("pg").innerHTML="2." + " " + randomTwo
		 document.getElementById("ph").innerHTML="3." + " " + randomThree
		
		document.getElementById("pf").style.visibility= "visible";
		document.getElementById("pg").style.visibility= "visible";
		document.getElementById("ph").style.visibility= "visible";
		document.getElementById("pi").style.visibility= "hidden";
		document.getElementById("pj").style.visibility= "hidden";
				
		  }
		  
		else if (quote === "4") {
		text = "One more?";
		  document.getElementById("pf").innerHTML="1." + " " + randomOne
		 document.getElementById("pg").innerHTML="2." + " " + randomTwo
		 document.getElementById("ph").innerHTML="3." + " " + randomThree
		 document.getElementById("pi").innerHTML="4." + " " + randomFour
	
		document.getElementById("pf").style.visibility= "visible";
		document.getElementById("pg").style.visibility= "visible";
		document.getElementById("ph").style.visibility= "visible";
		document.getElementById("pi").style.visibility= "visible";
		document.getElementById("pj").style.visibility= "hidden";
		  }
		  
		else if (quote === "5") {
		text = "That is more like it!";
		
		 document.getElementById("pf").innerHTML="1." + " " + randomOne
		 document.getElementById("pg").innerHTML="2." + " " + randomTwo
		 document.getElementById("ph").innerHTML="3." + " " + randomThree
		 document.getElementById("pi").innerHTML="4." + " " + randomFour
		 document.getElementById("pj").innerHTML="5." + " " + randomFive

		document.getElementById("pf").style.visibility= "visible";
		document.getElementById("pg").style.visibility= "visible";
		document.getElementById("ph").style.visibility= "visible";
		document.getElementById("pi").style.visibility= "visible";
		document.getElementById("pj").style.visibility= "visible";
		  
		  
		  }
		  else {
			text = "Nice try...";
		  }
		  document.getElementById("improvText").innerHTML = text;
		}









