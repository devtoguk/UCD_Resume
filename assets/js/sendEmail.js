function sendMail(contactForm) {
    emailjs.send('gmail', 'resume', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
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
