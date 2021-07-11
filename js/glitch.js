var version = "0.0.1";
var luni = new Lunicode();

var SaveBlock;
var whichBlock;


luni.tools.creepify.options.top = true; 	// add diacritics on top. Default: true 
luni.tools.creepify.options.middle = true;	// add diacritics in the middle. Default: true 
luni.tools.creepify.options.bottom = true;	// add diacritics on the bottom. Default: true
luni.tools.creepify.options.maxHeight = 40; // How many diacritic marks shall we put on top/bottom? Default: 15
luni.tools.creepify.options.randomization = 100; // 0-100%. maxHeight 100 and randomization 20%: the height goes from 80 to 100. randomization 70%: height goes from 30 to 100. Default: 100



$( document ).ready(function() {
    console.log( "ready!" );
	//Start the timer here!
	setTimeout(function(){ FindWord(); },5000);
});

function FindWord()
{
	//Find something to change
	//find All tags in the body.
	//Pick one at random and do something
	//find all the <p> and pick one
	var allPElements = $("p");
	var PBlocks = $("body").find( allPElements );	
	whichBlock = PBlocks[getRandomInt(PBlocks.length)];
	SaveBlock = $(whichBlock).html();
	var WordArray = SaveBlock.split(" ");
	var whichWord = getRandomInt(WordArray.length);
	//console.log(WordArray[whichWord]);
	//save the text
	//put text into array based on " "
	//find a random word and put a span aronud it
	
	var word = ' <span id="glitch">' + WordArray[whichWord] + '</span> ';
	var NewBlock = "";
	for(let i =0;i < WordArray.length;i++)
	{
		if (i === whichWord)
		{
			NewBlock = NewBlock + word;	
		}
		else
		{
			NewBlock = NewBlock + WordArray[i] + " ";
		}
	}		
	//console.log(NewBlock);
	$(whichBlock).html(NewBlock);
	glitch();




//Start Next Cycle with buffer of at least 10 seconds
	var randomTime = getRandomInt(300);
	randomTime = randomTime * 1000 + 10000;
	//console.log(randomTime);
	setTimeout(function(){ FindWord(); },randomTime);
}

function glow()
{
}

function glitch()
{
	console.log("Running Glitch");
	//Text do glitch
	//img do something.
	//record what we are changing
	//add <span id="glitch"></span> around what we are changing so its easy to find.
	//Do the animations
	var SavedText = $("#glitch").html();
	luni.tools.creepify.options.maxHeight = getRandomInt(40); 
	luni.tools.creepify.options.randomization = getRandomInt(100); 
	var encodedText = luni.tools.creepify.encode(SavedText); 
	$("#glitch").html(encodedText);
	var SavedCSS = $("#glitch").css("text-shadow");
	$("#glitch").css("text-shadow","1px 1px 2px black, 0 0 25px red, 0 0 5px darkred");
	
	setTimeout(function(){  $("#glitch").html(SavedText);}, 100);
	setTimeout(function(){ 
							luni.tools.creepify.options.maxHeight = getRandomInt(40); 
							luni.tools.creepify.options.randomization = getRandomInt(100); 
							encodedText = luni.tools.creepify.encode(SavedText); 
							$("#glitch").html(encodedText);
						}, 200);
	
	setTimeout(function(){  $("#glitch").html(SavedText);}, 300);
	setTimeout(function(){ 
							luni.tools.creepify.options.maxHeight = getRandomInt(40); 
							luni.tools.creepify.options.randomization = getRandomInt(100); 
							encodedText = luni.tools.creepify.encode(SavedText); 
							$("#glitch").html(encodedText);
						}, 400);
	
	setTimeout(function(){  $("#glitch").html(SavedText);}, 500);
	setTimeout(function(){ 
							luni.tools.creepify.options.maxHeight = getRandomInt(40); 
							luni.tools.creepify.options.randomization = getRandomInt(100); 
							encodedText = luni.tools.creepify.encode(SavedText); 
							$("#glitch").html(encodedText);
						}, 600);
	
	setTimeout(function(){  $("#glitch").html(SavedText);}, 700);
	setTimeout(function(){ 
							luni.tools.creepify.options.maxHeight = getRandomInt(40); 
							luni.tools.creepify.options.randomization = getRandomInt(100); 
							encodedText = luni.tools.creepify.encode(SavedText); 
							$("#glitch").html(encodedText);
						}, 800);
	setTimeout(function(){  $(whichBlock).html(SaveBlock);}, 2000);
	setTimeout(function(){  $("#glitch").css("text-shadow",SavedCSS);}, 2000);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}