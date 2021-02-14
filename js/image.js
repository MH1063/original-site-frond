var query = location.search;
var value = query.split('=');
console.log(value[1]);

var arena = document.getElementById("image_arena");
var img1 = document.getElementById("image_player1");
var img2 = document.getElementById("image_player2");
var img3 = document.getElementById("image_player3");
var img4 = document.getElementById("image_player4");
var img5 = document.getElementById("image_player5");
  
if(value[1]==1){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/1Nuggets/Pepsi.jpg)";
  
  arena.src = "./img10/1Nuggets/Pepsi.jpg";
 
  img1.src = "./img10/1Nuggets/Harris.jpg";
  
  img2.src = "./img10/1Nuggets/Murray.jpg";
  
  img3.src = "./img10/1Nuggets/Porter.jpg";
  
  img4.src = "./img10/1Nuggets/Millsap.jpg";
  
  img5.src = "./img10/1Nuggets/Jokic.jpg";
  
}else if(value[1]==2){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/2Thunder/Chesapeake.jpg)";
  
  arena.src = "./img10/2Thunder/Chesapeake.jpg";
 
  img1.src = "./img10/2Thunder/Hill.jpg";
  
  img2.src = "./img10/2Thunder/Dort.jpg";
  
  img3.src = "./img10/2Thunder/Alexander.jpg";
  
  img4.src = "./img10/2Thunder/Bazley.jpg";
  
  img5.src = "./img10/2Thunder/Horford.jpg";
  
}else if(value[1]==3){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/3Jazz/Energy.jpg)";
  
  arena.src = "./img10/3Jazz/Energy.jpg";
 
  img1.src = "./img10/3Jazz/Conley.jpg";
  
  img2.src = "./img10/3Jazz/Mitchell.jpg";
  
  img3.src = "./img10/3Jazz/Ingles.jpg";
  
  img4.src = "./img10/3Jazz/Bogdanović.jpg";
  
  img5.src = "./img10/3Jazz/Gobert.jpg";
  
}else if(value[1]==4){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/4Blazers/Rose.jpg)";
  
  arena.src = "./img10/4Blazers/Rose.jpg";
 
  img1.src = "./img10/4Blazers/Lillard.jpg";
  
  img2.src = "./img10/4Blazers/McCollum.jpg";
  
  img3.src = "./img10/4Blazers/Jones.jpg";
  
  img4.src = "./img10/4Blazers/Covington.jpg";
  
  img5.src = "./img10/4Blazers/Nurkic.jpg";

}else if(value[1]==5){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/5Timberwolves/Target.jpg)";
  
  arena.src = "./img10/5Timberwolves/Target.jpg";
 
  img1.src = "./img10/5Timberwolves/Russell.jpg";
  
  img2.src = "./img10/5Timberwolves/Okogie.jpg";
  
  img3.src = "./img10/5Timberwolves/Beasley.jpg";
  
  img4.src = "./img10/5Timberwolves/Layman.jpg";
  
  img5.src = "./img10/5Timberwolves/Towns.jpg";
  
}else if(value[1]==6){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/6Lakers/Staples.jpg)";
   
  arena.src = "./img10/6Lakers/Staples.jpg";
 
  img1.src = "/img10/6Lakers/Dennis.jpg";
  
  img2.src = "/img10/6Lakers/Kuzma.jpg";
  
  img3.src = "/img10/6Lakers/James.jpg";
  
  img4.src = "/img10/6Lakers/Davis.jpg";
  
  img5.src = "/img10/6Lakers/Gasol.jpg";
  
}else if(value[1]==7){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/7Clippers/Staples.jpg)";
   
  arena.src = "./img10/7Clippers/Staples.jpg";
 
  img1.src = "./img10/7Clippers/Beverley.jpg";
  
  img2.src = "./img10/7Clippers/George.jpg";
  
  img3.src = "./img10/7Clippers/Leonard.jpg";
  
  img4.src = "./img10/7Clippers/Batum.jpg";
  
  img5.src = "./img10/7Clippers/Ibaka.jpg";
  
}else if(value[1]==8){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/8Suns/Airways.jpg)";
  
  arena.src = "./img10/8Suns/Airways.jpg";
 
  img1.src = "./img10/8Suns/Paul.jpg";
  
  img2.src = "./img10/8Suns/Booker.jpg";
  
  img3.src = "./img10/8Suns/Bridges.jpg";
  
  img4.src = "./img10/8Suns/Crowder.jpg";
  
  img5.src = "./img10/8Suns/Ayton.jpg";
 
}else if(value[1]==9){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/9Kings/Sleep.jpg)";
   
  arena.src = "./img10/9Kings/Sleep.jpg";
 
  img1.src = "./img10/9Kings/Fox.jpg";
  
  img2.src = "./img10/9Kings/Hield.jpg";
  
  img3.src = "./img10/9Kings/Barnes.jpg";
  
  img4.src = "./img10/9Kings/Bagley.jpg";
  
  img5.src = "./img10/9Kings/Holmes.jpg";
  
}else if(value[1]==10){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/10Warriors/Chase.jpg)";
   
  arena.src = "./img10/10Warriors/Chase.jpg";
 
  img1.src = "./img10/10Warriors/Curry.jpg";
  
  img2.src = "./img10/10Warriors/Oubre.jpg";
  
  img3.src = "./img10/10Warriors/Wiggins.jpg";
  
  img4.src = "./img10/10Warriors/Green.jpg";
  
  img5.src = "./img10/10Warriors/Wiseman.jpg";
 
}else if(value[1]==11){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/11Rockets/Toyota.jpg)";
   
  arena.src = "./img10/11Rockets/Toyota.jpg";
 
  img1.src = "./img10/11Rockets/Wall.jpg";
  
  img2.src = "./img10/11Rockets/Harden.jpg";
  
  img3.src = "./img10/11Rockets/House.jpg";
  
  img4.src = "./img10/11Rockets/Tucker.jpg";
  
  img5.src = "./img10/11Rockets/Cousins.jpg";

}else if(value[1]==12){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/12Mavericks/American.jpg";
   
  arena.src = "./img10/12Mavericks/American.jpg";
 
  img1.src = "./img10/12Mavericks/Luka.jpg";
  
  img2.src = "./img10/12Mavericks/Hardaway.jpg";
  
  img3.src = "./img10/12Mavericks/Richardson.jpg";
  
  img4.src = "./img10/12Mavericks/Kristaps.jpg";
  
  img5.src = "./img10/12Mavericks/Powell.jpg";
  
}else if(value[1]==13){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/13Grizzlies/Fedex.jpg)";
   
  arena.src = "./img10/13Grizzlies/Fedex.jpg";
 
  img1.src = "./img10/13Grizzlies/Morant.jpg";
  
  img2.src = "./img10/13Grizzlies/Brooks.jpg";
  
  img3.src = "./img10/13Grizzlies/Allen.jpg";
  
  img4.src = "./img10/13Grizzlies/Anderson.jpg";
  
  img5.src = "./img10/13Grizzlies/Jonas.jpg";
  
}else if(value[1]==14){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/14Spurs/AT&T.jpg)";
   
  arena.src = "./img10/14Spurs/AT&T.jpg";
 
  img1.src = "./img10/14Spurs/Murray.jpg";
  
  img2.src = "./img10/14Spurs/Walker.jpg";
  
  img3.src = "./img10/14Spurs/DeRozan.jpg";
  
  img4.src = "./img10/14Spurs/Gay.jpg";
  
  img5.src = "./img10/14Spurs/Aldridge.jpg";
  
}else if(value[1]==15){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/15Pelicans/Smoothie.jpg)";
   
  arena.src = "./img10/15Pelicans/Smoothie.jpg";
 
  img1.src = "./img10/15Pelicans/Ball.jpg";
  
  img2.src = "./img10/15Pelicans/Bledsoe.jpg";
  
  img3.src = "./img10/15Pelicans/Ingram.jpg";
  
  img4.src = "./img10/15Pelicans/Williamson.jpg";
  
  img5.src = "./img10/15Pelicans/Adams.jpg";
  
}else if(value[1]==16){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/16Raptors/Canada.jpg)";
   
  arena.src = "./img10/16Raptors/Canada.jpg";
 
  img1.src = "./img10/16Raptors/Lowry.jpg";
  
  img2.src = "./img10/16Raptors/VanVleet.jpg";
  
  img3.src = "./img10/16Raptors/Anunoby.jpg";
  
  img4.src = "./img10/16Raptors/Siakam.jpg";
  
  img5.src = "./img10/16Raptors/Baynes.jpg";
  
}else if(value[1]==17){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/17Celtics/TD.jpg)";
   
  arena.src = "./img10/17Celtics/TD.jpg";
 
  img1.src = "./img10/17Celtics/Walker.jpg";
  
  img2.src = "./img10/17Celtics/Smart.jpg";
  
  img3.src = "./img10/17Celtics/Brown.jpg";
  
  img4.src = "./img10/17Celtics/Tatum.jpg";
  
  img5.src = "./img10/17Celtics/Theis.jpg";
  
}else if(value[1]==18){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/18&76ers/Wells.jpg)";
   
  arena.src = "./img10/18&76ers/Wells.jpg)";
 
  img1.src = "./img10/18&76ers/Simmons.jpg";
  
  img2.src = "./img10/18&76ers/Seth.jpg";
  
  img3.src = "./img10/18&76ers/Danny.jpg";
  
  img4.src = "./img10/18&76ers/Harris.jpg";
  
  img5.src = "./img10/18&76ers/Embiid.jpg";
  
}else if(value[1]==19){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/19Nets/Barclays.jpg)";
   
  arena.src = "./img10/19Nets/Barclays.jpg";
 
  img1.src = "/img10/19Nets/Irving.jpg";
  
  img2.src = "/img10/19Nets/Dinwiddie.jpg";
  
  img3.src = "/img10/19Nets/Harris.jpg";
  
  img4.src = "/img10/19Nets/Durant.jpg";
  
  img5.src = "/img10/19Nets/Jordan.jpg";
  
}else if(value[1]==20){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/20Knicks/Madison.jpg)";
   
  arena.src = "./img10/20Knicks/Madison.jpg";
 
  img1.src = "./img10/20Knicks/Payton.jpg";
  
  img2.src = "./img10/20Knicks/Barrett.jpg";
  
  img3.src = "./img10/20Knicks/Burks.jpg";
  
  img4.src = "./img10/20Knicks/Randle.jpg";
  
  img5.src = "./img10/20Knicks/Robinson.jpg";
  
}else if(value[1]==21){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/21Bucks/Bradley.jpg)";
   
  arena.src = "./img10/21Bucks/Bradley.jpg";
 
  img1.src = "./img10/21Bucks/Holiday.jpg";
  
  img2.src = "./img10/21Bucks/DiVincenzo.jpg";
  
  img3.src = "./img10/21Bucks/Middleton.jpg";
  
  img4.src = "./img10/21Bucks/Antetokounmpo.jpg";
  
  img5.src = "./img10/21Bucks/Lopez.jpg";
 
}else if(value[1]==22){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/22Pacers/Bankers.jpg)";
   
  arena.src = "./img10/22Pacers/Bankers.jpg";
 
  img1.src = "./img10/22Pacers/Brogdon.jpg";
  
  img2.src = "./img10/22Pacers/Oladipo.jpg";
  
  img3.src = "./img10/22Pacers/Warren.jpg";
  
  img4.src = "./img10/22Pacers/Sabonis.jpg";
  
  img5.src = "./img10/22Pacers/Turner.jpg";
  
}else if(value[1]==23){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/23Bulls/United.jpg)";
   
  arena.src = "./img10/23Bulls/United.jpg";
 
  img1.src = "./img10/23Bulls/White.jpg";
  
  img2.src = "./img10/23Bulls/LaVine.jpg";
  
  img3.src = "./img10/23Bulls/Porter.jpg";
  
  img4.src = "./img10/23Bulls/Markkanen.jpg";
  
  img5.src = "./img10/23Bulls/Carter.jpg";
  
}else if(value[1]==24){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/24Pistons/Little.jpg)";
   
  arena.src = "./img10/24Pistons/Little.jpg";
 
  img1.src = "./img10/24Pistons/Hayes.jpg";
  
  img2.src = "./img10/24Pistons/Wright.jpg";
  
  img3.src = "./img10/24Pistons/Grant.jpg";
  
  img4.src = "./img10/24Pistons/Griffin.jpg";
  
  img5.src = "./img10/24Pistons/Plumlee.jpg";
  
}else if(value[1]==25){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/25Cavaliers/Rocket.jpg)";
   
  arena.src = "./img10/25Cavaliers/Rocket.jpg";
 
  img1.src = "./img10/25Cavaliers/Garland.jpg";
  
  img2.src = "./img10/25Cavaliers/Sexton.jpg";
  
  img3.src = "./img10/25Cavaliers/Okoro.jpg";
  
  img4.src = "./img10/25Cavaliers/Love.jpg";
  
  img5.src = "./img10/25Cavaliers/Drummond.jpg";
 
}else if(value[1]==26){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/26Heat/American.jpg)";
   
  arena.src = "./img10/26Heat/American.jpg";
 
  img1.src = "./img10/26Heat/Herro.jpg";
  
  img2.src = "./img10/26Heat/Butler.jpg";
  
  img3.src = "./img10/26Heat/Robinson.jpg";
  
  img4.src = "./img10/26Heat/Harkless.jpg";
  
  img5.src = "./img10/26Heat/Adebayo.jpg";
  
}else if(value[1]==27){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/27Magic/Amway.jpg)";
   
  arena.src = "./img10/27Magic/Amway.jpg";
 
  img1.src = "./img10/27Magic/Fultz.jpg";
  
  img2.src = "./img10/27Magic/Fournier.jpg";
  
  img3.src = "./img10/27Magic/Ennis.jpg";
  
  img4.src = "./img10/27Magic/Gordon.jpg";
  
  img5.src = "./img10/27Magic/Vucevic.jpg";
  
  
}else if(value[1]==28){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/28Hornets/Spectrum.jpg)";
   
  arena.src = "./img10/28Hornets/Spectrum.jpg";
 
  img1.src = "./img10/28Hornets/Graham.jpg";
  
  img2.src = "./img10/28Hornets/Rozier.jpg";
  
  img3.src = "./img10/28Hornets/Hayward.jpg";
  
  img4.src = "./img10/28Hornets/Washington.jpg";
  
  img5.src = "./img10/28Hornets/Zeller.jpg";
  
}else if(value[1]==29){
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/29Wizards/Verizon.jpg)";
   
  arena.src = "./img10/29Wizards/Verizon.jpg";
 
  img1.src = "./img10/29Wizards/Westbrook.jpg";
  
  img2.src = "./img10/29Wizards/Beal.jpg";
  
  img3.src = "./img10/29Wizards/Avdija.jpg";
  
  img4.src = "./img10/29Wizards/Hachimura.jpg";
  
  img5.src = "./img10/29Wizards/Bryant.jpg";
  
}else{
  
  document.getElementById( "backimg" ).style.backgroundImage = "url(./img10/30Hawks/State.jpg)";
   
  arena.src = "./img10/30Hawks/State.jpg";
 
  img1.src = "./img10/30Hawks/Young.jpg";
  
  img2.src = "./img10/30Hawks/Bogdan.jpg";
  
  img3.src = "./img10/30Hawks/Gallinari.jpg";
  
  img4.src = "./img10/30Hawks/Collins.jpg";
  
  img5.src = "./img10/30Hawks/Capela.jpg";
  
}