"use strict";
// var = LET

let people = [
{
  title: "Hero",
  name: " Joe Sakic",
  bio: "Best captain to man a NHL team in the 90's and early 00's",
  image: "http://www.thestar.com/content/dam/thestar/sports/hockey/2012/11/09/hockey_hall_of_fame_2012_inductee_joe_sakic_all_class/joe_sakicavs.jpeg",
  lifespan: {
    birth: "1969",
    death: "2016"
  }
},
{
  title: "Director",
  name: " Wes Anderson",
  bio: "Director of 'Fantastic Mr. Fox', 'Darjeeling Limited', and 'Life Aquatic'.",
  image: "http://cdn.collider.com/wp-content/uploads/wes-anderson1.jpg",
  lifespan: {
    birth: "1969",
    death: "2016"
  }
},
{
  title: "Topshelf Records Owner",
  name: " Kevin Duquette",
  bio: "Owner of my favorite record label.",
  image: "https://41.media.tumblr.com/6d82d105d106f74500ef378240eb27f4/tumblr_n0eoriddhE1s0orrmo1_500.jpg",
  lifespan: {
    birth: "1980",
    death: "2016"
  }
}
]

let container = document.getElementById("container");
let input = document.getElementById("input");
let card = document.getElementsByClassName("card"); //returning an array
// console.log(card);

function populateDom(){ //step one
for (let i=0;  i < people.length; i++) {
  let person = people[i];
  buildCard(person); //all cards populate here on DOM
}
  addClickEvent();
}

function buildCard(person) { //step two
  container.innerHTML += `<person class="card">
  <header>${person.title}${person.name}</header><section>${person.bio}<img src="${person.image}"></section>
  <footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>`
}

function addClickEvent(currentcard) { //step three
    for(let i = 0; i < card.length; i++) {
      let currentcard = card[i];
      currentcard.addEventListener("click", function(){
        removeSelected();
        input.value = "";
        input.focus();
        currentcard.classList.add("selected");
        keyEvent(currentcard);
      })
    }
}

function removeSelected () { //step four
  for (let i=0; i < card.length; i++) {
    card[i].classList.remove("selected");
  }
}

function keyEvent(currentcard) {//step five  
  input.addEventListener("keyup", function(event){
    console.log(event, currentcard);
  })
}

populateDom();


