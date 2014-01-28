console.log ('Here are my three constructors');
console.log	('First Constructor call, function EplTeam');
console.log	('Second Constructor call, function JukeboxSong');
console.log	('Third Constructor call, function Bass');




function EplTeam (name, standing){
	this.name = name || "team name";
	this.standing = standing;
	this.firstDivison = true;

		this.win = function(){
			this.standing = this.standing + 3;
			console.log(this.standing);
		};
		this.tie = function(){
			this.standing = this.standing + 1;
			console.log(this.standing);
		};
		this.loose = function(){
			this.standing = this.standing + 0;
			console.log(this.standing);
		};
}


var arsenal          = new EplTeam ('Arsenal', 51)
var manchestercity   = new EplTeam ('ManchesterCity', 50)
var	chelsea          = new EplTeam ('Chelsea', 49)
var liverpool        = new EplTeam ('Liverpool', 43)



// Second Constructor ////

function JukeboxSong (trackNum, artistName, songName, genre){
	this.trackNum = trackNum;
	this.artistName = artistName;
	this.songName = songName;
	this.genre = genre;
}

var oldtimerocknroll = new JukeboxSong (1, 'BobSeger', 'OldTimeRocknRoll', "RocknRoll")
var ymca             = new JukeboxSong (2, 'VillagePeople', 'YMCA', 'Pop')
var celebation       = new JukeboxSong (3, 'CoolAndTheGang', 'Celebration', 'FeelGood') 
var mygirl           = new JukeboxSong (4, 'Temptations', 'MyGirl', 'RnB')  


// Third Constructor //

function Bass (make, modle, nuberStrings){
	this.make = make;
	this.model = modle;
	this.nuberStrings = nuberStrings;
	this.awesome = "maybe"; 
}

var ripper = new Bass ('Gibson', 'Ripper', 4);
var jazz   = new Bass ('Fender', 'Jazz-Bass', 4);
var p 		 = new Bass ('Fender', 'P-Bas', 4);

ripper.awesome = true

