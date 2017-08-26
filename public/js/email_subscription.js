$(document).ready(function() {
    $('#Nav-Submit').on('click', function(e) {
        e.preventDefault();
        console.log('clicked');
        var $email = $('#Nav-Email').val();
        var payload = $email;

        $.ajax({
            url: "http://localhost:3000/sendSubscription",
            type: "POST",
            dataType: "json",
            data: { payload },
            success: function(data) {
                return data;
            },
            error: function(err) {
                console.log('errror: ', err);
                return err;
            }
        })
        $("#nav-email-form")[0].reset();
    });

    $('#Footer-Submit').on('click', function(e) {
        e.preventDefault();
        console.log('clicked');
        var $email = $('#Footer-Email').val();
        var payload = $email;

        $.ajax({
            url: "http://localhost:3000/sendSubscription",
            type: "POST",
            dataType: "json",
            data: { payload },
            success: function(data) {
                return data;
            },
            error: function(err) {
                console.log('errror: ', err);
                return err;
            }
        })
        $("#footer-email-form")[0].reset();
    })
})
