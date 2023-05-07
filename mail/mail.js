

const mail = ["luca@gmail.com", "marco@gmail.com", "mario@gmail.com","davide@gmail.com", "alessio@gmail.com"];


const addMail = (prompt("inserisci la tua mail"));

for (let i = 0; i < mail.length; i++){

const element = mail [i];

esito = false;

if(addMail === element){

    esito = true;
    /* console.log(`${esito} Puoi entrare`); */
}

else {

    esito = false;
    /* console.log(`${esito} Non puoi entrare`); */
}


if (esito === true) {
    messaggioOutput = "puoi entrare";
    console.log(messaggioOutput);
}

else if (esito === false){
    messaggioOutput = "Non puoi entrare";
    console.log(messaggioOutput);
}

}