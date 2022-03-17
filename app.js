/* 

const addEventonClick = (part, id_btn, id_part) => {
    document.getElementById(id_btn).addEventListener("click", function() {
      getRandomWords(part, id_part);
    });
};

document.getElementById(excuse_id).innerHTML = Random; */

const MyAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","ñ","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const randomLetter = (alphabet) => {
    let randomN = Math.floor(Math.random() * (alphabet.length-1));
    let randomL = alphabet[randomN];
return randomL
}

const randomWord = () =>{
    let randomNletters = Math.floor(Math.random() * 10);
    let randomWord = "";
    for (i=0;i<randomNletters;i++) randomWord += randomLetter(MyAlphabet);
    randomWord = randomWord[0].toUpperCase() + randomWord.slice(1);

return randomWord;
}

let ids_boton = ["id_btn_español","id_btn_ingles","id_btn_aleatorio"];
let ids_menu = ["id_home","id_nosotros","id_formulario"];
let idiomas = {
id_btn_español : {
    id_home: "Casa",
    id_nosotros: "Nosotros",
    id_formulario: "Formulario"
},
id_btn_ingles : {
    id_home: "Home",
    id_nosotros: "We",
    id_formulario: "Contact"
},
id_btn_aleatorio : {
    id_home: "Aleatorio",
    id_nosotros: "Aleatorio",
    id_formulario: "Aleatorio"
}
}

for (let idsB of ids_boton){
    document.getElementById(idsB).addEventListener("click", function() {
        if (idsB != "id_btn_aleatorio") { 
            for (let idsM of ids_menu) document.getElementById(idsM).innerHTML = idiomas[idsB][idsM];
             }
        else {
            for (let idsM of ids_menu) document.getElementById(idsM).innerHTML = randomWord();
        }   
        })
}