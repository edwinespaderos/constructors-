function EplTeam(a,b){this.name=a||"team name",this.standing=b,this.firstDivison=!0,this.win=function(){this.standing=this.standing+3,console.log(this.standing)},this.tie=function(){this.standing=this.standing+1,console.log(this.standing)},this.loose=function(){this.standing=this.standing+0,console.log(this.standing)}}function JukeboxSong(a,b,c,d){this.trackNum=a,this.artistName=b,this.songName=c,this.genre=d}function Bass(a,b,c){this.make=a,this.model=b,this.nuberStrings=c,this.awesome="maybe"}console.log("Here are my three constructors"),console.log("First Constructor call, function EplTeam"),console.log("Second Constructor call, function JukeboxSong"),console.log("Third Constructor call, function Bass");var arsenal=new EplTeam("Arsenal",51),manchestercity=new EplTeam("ManchesterCity",50),chelsea=new EplTeam("Chelsea",49),liverpool=new EplTeam("Liverpool",43),oldtimerocknroll=new JukeboxSong(1,"BobSeger","OldTimeRocknRoll","RocknRoll"),ymca=new JukeboxSong(2,"VillagePeople","YMCA","Pop"),celebation=new JukeboxSong(3,"CoolAndTheGang","Celebration","FeelGood"),mygirl=new JukeboxSong(4,"Temptations","MyGirl","RnB"),ripper=new Bass("Gibson","Ripper",4),jazz=new Bass("Fender","Jazz-Bass",4),p=new Bass("Fender","P-Bas",4);ripper.awesome=!0;