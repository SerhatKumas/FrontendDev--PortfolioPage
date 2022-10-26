var i = 0;
var j = 0;
var txt = 'Serhat Kumas';
var subTxt = "Software Developer"
var speed = 65;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("main-logo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    subWriter();
}

function subWriter() {
    if (j < subTxt.length) {
        document.getElementById("sub-logo").innerHTML += subTxt.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    }
}