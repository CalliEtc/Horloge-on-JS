

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
   const options = { // objet d'option 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    const dateString =  new Date().toLocaleDateString("fr-FR", options) // mercredi 3 septembre 
    const h2 = document.getElementById('demo') // recupere l'element h2 id demo
    h2.innerText = dateString  // injecte le texte dans le 2


    const ampmElement = document.getElementById('ampm');
    const ampm = hours < 12 ? 'AM' : 'PM';
    ampmElement.innerText = ampm;

    const messageElement = document.getElementById('message');
    const message = hours < 12 ? 'Bonne matinée' : 'Bonne journée';
    messageElement.innerText = message;

}



setInterval(() => {
    updateClock();

}, 500);
