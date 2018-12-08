const forma = document.getElementById("forma");
const ime = document.getElementById("ime");
const email = document.getElementById("email");
const password = document.getElementById("password");



function proveriIme() {
    if (ime.value.length > 3 && ime.value.length < 30 && ime.value.includes(' ')) {  // DUZINA KARAKTERA VECA OD 3, MANJA OD 30 I MORA DA SADRZI RAZMAK, BAR JEDAN!
        ime.classList.add("valid")                           //dodaje css za tacan odgovor
        ime.classList.remove("invalid")                      // ubija drugu klasu da se ne podudaraju 
    } else {
        ime.classList.add("invalid")                         // dodaje css za los odgovor  
        ime.classList.remove("valid")                        // ubija drugu klasu da se ne podudaraju 
    }
}

function proveriEmail() {
    if(email.value.includes ("@")&& email.value.includes (".")){
        email.classList.add("valid")
        email.classList.remove("invalid")

    }
    else {
        email.classList.add("invalid")
        email.classList.add("invalid")   
    }
    
}

function proveriLozinku() {

}



function proveri(e) {
    e.preventDefault()
    proveriIme()
    proveriEmail()

}



forma.addEventListener("submit", proveri)
ime.addEventListener("input", proveriIme)   
email.addEventListener("input",proveri)                //proverava u real time sta si ukucao u IME  postoji jos i `change`, `input`, `keyup`