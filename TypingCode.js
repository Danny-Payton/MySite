var letter = 0;
var code = 'Lorem ipsum typing effect!';
var time = 50;

function type() {
    if (letter < code.length) {

        document.getElementById("typeCode").innerHTML += code.charAt(letter);
        letter++;
        setTimeout(type, time);
    }
}