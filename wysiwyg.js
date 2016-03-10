"use strict";
// var = LET

let people = [
{
  title: "Hero",
  name: " Joe Sakic",
  bio: "Best captain to man a NHL team in the 90's and early 00's",
  image: "http://www.thestar.com/content/dam/thestar/sports/hockey/2012/11/09/hockey_hall_of_fame_2012_inductee_joe_sakic_all_class/joe_sakicavs.jpeg",
  lifespan: {
    birth: 1969,
    death: 2016
  }
},
{
  title: "Samurai",
  name: " Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: " Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
]

let container = document.getElementById("container");
let input = document.getElementById("input");
let card = document.getElementsByClassName("card");
// console.log(card);

for (let i=0;  i < people.length; i++) {
  let person = people[i];
  buildCard(person) 
}

function buildCard(person) {
  container.innerHTML += `<person class="card">
  <header>${person.title}${person.name}</header><section>${person.bio}<img-src="${person.image}"></section>
  <footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>`
}





