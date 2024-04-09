let hours = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds(); 

    var am = h  >= 12 ? "PM" : "AM";
    
    //convert 24hrs clock to 12hours clock
    if (h> 12) {
        h -= 12;
    } 

    //add zero before single digit number
    h = (h <  10)? '0' + h: h;
    m = (m <  10)? '0'+ m: m;
    s = (s <  10)? '0' + s: s;

    hours.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML= am;

    hr.style.transform = `rotateZ(${h * 30}deg)`;
    mn.style.transform = `rotateZ(${m * 6}deg)`;
    sc.style.transform = `rotateZ(${s * 6}deg)`;


})



// Votre nom à écrire
const votreNom = "Ahamad OUSMANE";

// Element HTML où votre nom sera affiché
const typedNameElement = document.getElementById('typed-name');

// Fonction pour écrire le nom en mode "typing"
function typeWriter(text, i, cb) {
    if (i < text.length) {
        typedNameElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i, cb);
        }, 100); // Vitesse de frappe (en millisecondes)
    } else {
        setTimeout(cb, 1000); // Temps d'attente avant de supprimer le nom (en millisecondes)
    }
}

// Fonction pour effacer le nom
function eraseText(cb) {
    const text = typedNameElement.innerHTML;
    if (text.length > 0) {
        typedNameElement.innerHTML = text.substring(0, text.length - 1);
        setTimeout(function() {
            eraseText(cb);
        }, 50); // Vitesse d'effacement (en millisecondes)
    } else {
        cb();
    }
}

// Fonction pour gérer le cycle d'écriture, d'effacement et de réécriture du nom
function cycle() {
    eraseText(function() {
        setTimeout(function() {
            typeWriter(votreNom, 0, cycle);
        }, 500); // Temps d'attente avant de réécrire le nom (en millisecondes)
    });
}

// Démarrer le cycle initial
cycle();