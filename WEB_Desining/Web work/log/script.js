$(document).ready(function () {
    $('#goright').on('click', function () {
        $('#slidebox').animate({
            'marginLeft': '0'
        });
        $('.toplayer').animate({
            'marginLeft': '100%'
        });
    });

    $('#goleft').on('click', function () {
        $('#slidebox').animate({
            'marginLeft': '50%'
        });
        $('.toplayer').animate({
            'marginLeft': '0'
        });
    });
});
