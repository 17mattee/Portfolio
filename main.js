
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("30L1N5LUInR8e34jn");

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Previene l'invio predefinito del form

        // Ottieni i valori dai campi del form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Verifica che tutti i campi siano compilati
        if (name && email && subject && message) {
            // Crea i parametri del template da inviare a EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
            };

            // Invia l'email utilizzando EmailJS
            emailjs.send("service_8ltuhoo", "template_vlcxesf", templateParams)
                .then(function(response) {
                    console.log("Email inviata con successo!", response);
                    alert("Ti è arrivata una nuova mail dal tuo portfolio!");
                })
                .catch(function(error) {
                    console.log("Errore nell'invio dell'email: ", error);
                    alert("Si è verificato un errore durante l'invio del messaggio. Riprova.");
                });
        } else {
            alert("Per favore, compila tutti i campi.");
        }
    });
});
