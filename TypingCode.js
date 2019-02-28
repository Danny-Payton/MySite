var letter = 0;
var code = 'Lorem ipsum typing effect!';
var time = 50;
var $window = $(window);
var $type = $("#typeCode")

$window.on('scroll', inView());

function type() {
    if (letter < code.length) {
        document.getElementById("typeCode").innerHTML += code.charAt(letter);
        letter++;
        setTimeout(type, time);
    }
}

function inView() {
    var windowHeight = $window.height();
    var windowBottom = $window.scrollTop() + windowHeight;
    var typeTop = $type.offset().top;

    console.log(typeTop);
    console.log(windowBottom);

    if (typeTop <= windowBottom) {
        type();
    }
}