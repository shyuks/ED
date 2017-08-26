$(document).ready(function() {
    $('#Contact-Submit').on('click', function(e) {
        e.preventDefault();
        var firstName = $('#First-Name').val();
        var lastName = $('#Last-Name').val();
        var email = $('#Email-From').val();
        var message = $('#Message-Box').val();
        var payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        }
        $.ajax({
            url: "http://localhost:3000/sendContactForm",
            type: "POST",
            dataType: "json",
            data: { payload },
            success: function(data) {
                console.log('tacos or piz')
                console.log(data);
                return data;
            },
            error: function(err) {
                console.log('errror: ', err);
                return err;
            }
        })
        $("#contact-us-form")[0].reset();
    })
})
