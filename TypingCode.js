var code = "var letter = 0;\n" +
    "var code = \"Hello World\";\n" +
    "var time = 500;\n" +
    "var $window = $(window);\n" +
    "var $type = $(\"#typeCode\")\n" +
    "var counter = 0;\n" +
    "\n" +
    "$window.scroll(inView);\n" +
    "\n" +
    "function type() {\n" +
    "    if (letter < code.length) {\n" +
    "        document.getElementById(\"typeCode\").innerHTML += code.charAt(letter);\n" +
    "        letter++;\n" +
    "        setTimeout(type, time);\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function inView() {\n" +
    "    var windowHeight = $window.height();\n" +
    "    var windowBottom = $window.scrollTop() + windowHeight;\n" +
    "    var typeTop = $type.offset().top;\n" +
    "\n" +
    "    console.log(typeTop);\n" +
    "    console.log(windowBottom);\n" +
    "\n" +
    "    if (typeTop <= windowBottom && counter == 0) {\n" +
    "        type();\n" +
    "        counter=1;\n" +
    "    }\n" +
    "}";
var letter = 0;
var time = 40;
var $window = $(window);
var $type = $("#typeCode")
var counter = 0;

$window.scroll(inView);

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

    if (typeTop <= windowBottom && counter == 0) {
        type();
        counter = 1;
    }
}