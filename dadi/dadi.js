

const numeroUtente = Math.floor(Math.random() * (6)+ 1) ;
console.log(`numero Utente: ${numeroUtente}`);

const computer = Math.floor(Math.random() * (6)+ 1) ;
console.log(`numero computer: ${computer}`);

 
  if(numeroUtente > computer){

     vittoria = ("Hai vinto");

     console.log(vittoria);
  }

  else if (numeroUtente == computer){

     vittoria = ("Pareggio");

     console.log(vittoria);
  }

  else{
     vittoria = ("Hai perso");

     console.log(vittoria);
  }  