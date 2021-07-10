const deck = new Deck();
let card1,card2,card3,card4,card5,playerCard1,playerCard2,cpuCard1,cpuCard2;
 
function deal() {
  if (deck.length()<7) {
    deck.reset();
    deck.shuffle();
  }  
  card1 = new Card(deck.deal());
  card2 = new Card(deck.deal());
  card3 = new Card(deck.deal());
  card4 = new Card(deck.deal());
  card5 = new Card(deck.deal());
  playerCard1 = new Card(deck.deal());
  playerCard2 = new Card(deck.deal());
  cpuCard1 =  new Card(deck.deal());
  cpuCard2 =  new Card(deck.deal());
  
  card1.displayCard("card1",false);  
  card2.displayCard("card2",false);  
  card3.displayCard("card3",false);  
  card4.displayCard("card4",false);  
  card5.displayCard("card5",false);  
  playerCard1.displayCard("playerCard1",true);  
  playerCard2.displayCard("playerCard2",true); 
  cpuCard1.displayCard("cpuCard1",false);  
  cpuCard2.displayCard("cpuCard2",false); 
} //End of deal()
 
function nextStep(el) {
  if (!card1.flipped) {
    card1.flip();
    card2.flip();
    card3.flip();
    el.innerHTML="Odkryj 4 kartę";
  } else if(!card4.flipped) {
    card4.flip();
    el.innerHTML="Odkryj 5 kartę";
} else if(!card5.flipped) {
    card5.flip();
    cpuCard1.flip();
    cpuCard2.flip();
    el.innerHTML="Nowa Gra";
} else {
  deal();
  el.innerHTML="Odkryj 3 karty.";
}
} //End of nextStep()
 
deal();
//The user then clicks the button to call the nextStep() function...