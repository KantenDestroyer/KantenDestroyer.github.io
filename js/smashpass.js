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
function submit(){//TBD loop through files in ../smashorpass and add to array
    var img = [
        "../smashorpass/0.png",
        "../smashorpass/1.png",
        "../smashorpass/2.png",
        "../smashorpass/3.png",
        "../smashorpass/4.png",
        "../smashorpass/5.png",
        "../smashorpass/6.png",
        "../smashorpass/7.png",
        "../smashorpass/8.png",
        "../smashorpass/9.png",
        "../smashorpass/10.png",
        "../smashorpass/11.png",
        "../smashorpass/12.png",
        "../smashorpass/13.png",
        "../smashorpass/14.png",
        "../smashorpass/15.png",
        "../smashorpass/16.png",
        "../smashorpass/17.png",
        "../smashorpass/18.png",
        "../smashorpass/19.png",
        "../smashorpass/20.png",
        "../smashorpass/21.png",
        "../smashorpass/22.png",
        "../smashorpass/23.png",
        "../smashorpass/24.png",
        "../smashorpass/25.png",
        "../smashorpass/26.png",
        "../smashorpass/27.png",
        "../smashorpass/28.png",
        "../smashorpass/29.png",
        "../smashorpass/30.png",
        "../smashorpass/31.png",
        "../smashorpass/32.png",
        "../smashorpass/33.png",
        "../smashorpass/34.png",
        "../smashorpass/35.png",
        "../smashorpass/36.png",
        "../smashorpass/37.png",
        "../smashorpass/38.png",
        "../smashorpass/39.png",
        "../smashorpass/40.png",
        "../smashorpass/41.png",
        "../smashorpass/42.png",
        "../smashorpass/43.png",
        "../smashorpass/44.png",
        "../smashorpass/45.png",
        "../smashorpass/46.png",
        "../smashorpass/47.png",
        "../smashorpass/48.png",
        "../smashorpass/49.png"
    ];
    if(imageIdx == 50){
        imageIdx = 0;
    }
    document.getElementById("smashorpass").src = img[imageIdx++];
}
