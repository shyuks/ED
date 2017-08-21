$(document).ready(function() {

    var toggle = false;
    $('.toggle-menu').on('click', function(e) {
        e.preventDefault();
        if (toggle) {
            $('#main-menu').css('display', 'none').hide("fast");
            toggle = false;
            return;
        } else {
            $('#main-menu').css('display', 'block').show(2000);
            toggle = true;
            return;
        }
        return;
    })

})
