


const mail = ["luca@gmail.com", "marco@gmail.com", "mario@gmail.com"];

const addMail = (prompt("inserisci la tua mail"));

console.log(addMail);

for (let i = 0; i < mail.length; i++){

const element = mail [i];

/* console.log(element); */

if(addMail === element){

    let benvenuto = ("passi");
    console.log(benvenuto);

}

else{

    benvenuto = ("non-passi");
    console.log(benvenuto);
}
    
}