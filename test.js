$(document).ready(function() {
    var cekic = $('<li>Cekic</li>');
    var bubanj = $('<li>Bubanj</li>');
    var guma = $('<li>Guma</li>');
    var mac = $('<li>Mac</li>');

    $('.addAnimal').on("click", function() {
        $('<li></li>')
                   .append($(this).data('animal')+'</a>')
                   .prependTo('ul#animal')
                   .fadeIn("slow");
    });
});