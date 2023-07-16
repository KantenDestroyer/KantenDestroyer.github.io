var imageIdx = 0;
//it start the game and remove start button and appear the smash or pass button
function Start(){
    document.getElementById("start").innerHTML = "";
    document.getElementById("start").className = "transparent";

    document.getElementById("Smash").innerHTML = "Smash";
    document.getElementById("Smash").className = "buttonr";

    document.getElementById("pass").innerHTML = "Pass";
    document.getElementById("pass").className = "buttonr";
    submit();
}
//its a randomizer that randomize you a number 0 to 49 and its possible to get the same picture
//the comment above is high IQ
function submit(){
    const baseImage = "../smashorpass/";
    const baseExtension = ".png";
    const imagePath = baseImage+imageIdx+++baseExtension;
    // manually checking if Image has been found
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    if (this.status !== 200) {
        imageIdx = 0;
        submit();
    }
    };
    xhr.open("GET",imagePath);
    xhr.send();
    document.getElementById("smashorpass").src = imagePath;
}
