function tempsRestant() {
    let dateDebut = new Date();
    let dateFin = new Date("jul 20 17:00:00 2022");

    document.getElementById("jour").innerHTML = Math.floor((dateFin - dateDebut)/86400000);
    document.getElementById("heure").innerHTML = ("00" + Math.floor(((dateFin - dateDebut)/3600000) % 24)).slice(-2);
    document.getElementById("minute").innerHTML = ("00" + Math.floor(((dateFin - dateDebut)/60000) % 60)).slice(-2);
    document.getElementById("seconde").innerHTML = ("00" + Math.floor(((dateFin - dateDebut)/1000) % 60)).slice(-2);
    
    
}
setInterval(tempsRestant, 500)