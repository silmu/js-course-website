var form  = document.getElementById('contactMe');

form.addEventListener('submit', function (event) {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var gender = document.getElementById("gender").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var website = document.getElementById("website").value;
        var comment = document.getElementById("comment").value;

        document.getElementById('afterMessage').innerHTML = `<hr>
            <p><b>Thank you for your message!</b></p>
            <p>${firstName} ${lastName}, (${gender}, ${age} years old).
            <br>Email: ${email}<br>
            Website: ${website}<br></p>
            <p>Your message:<br>"${comment}"</p>`;
        // Prevent empty submission
        event.preventDefault();
    });
