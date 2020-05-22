function sendMail(contactForm) {
    emailjs.send('gmail', 'resume', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("contact--form").innerHTML = 
            `<br><br><br><br><h3 class="contact-heading uppercase text-center">Thank you for your message</h3><h5 class="uppercase text-center">I will be in touch soon...</h5><br><br><br><br>`;
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;  // To block from loading a new page
}



        // var templateParams = {
        //     name: 'Aaron',
        //     notes: 'The project that I want is...'
        // };
        
        // emailjs.send('gmail', 'resume', templateParams)
        //     .then(function(response) {
        //     console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //     console.log('FAILED...', error);
        //     });        
