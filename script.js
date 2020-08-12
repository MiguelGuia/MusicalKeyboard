document.addEventListener("keydown", function(event) {
    if (event.key == "a") {
        let audio = new Audio("alert.mp3");
        console.log("The 'A' key is pressed.");
        audio.play();
    }else if(event.key == "s") {
        let audio = new Audio("alert.mp3");
        console.log("The 'S' key is pressed.");
        audio.play();
    }
    else if(event.key == "d") {
        let audio = new Audio("alert.mp3");
        console.log("The 'D' key is pressed.");
        audio.play();
    }
    else if(event.key == "f") {
        let audio = new Audio("alert.mp3");
        console.log("The 'F' key is pressed.");
        audio.play();
    }
    else if(event.key == "g") {
        let audio = new Audio("alert.mp3");
        console.log("The 'G' key is pressed.");
        audio.play();
    }
    else if(event.key == "h") {
        let audio = new Audio("alert.mp3");
        console.log("The 'H' key is pressed.");
        audio.play();
    }
    else if(event.key == "j") {
        let audio = new Audio("alert.mp3");
        console.log("The 'J' key is pressed.");
        audio.play();
    }else{
        console.log("Warning, wrong key")
    }
});