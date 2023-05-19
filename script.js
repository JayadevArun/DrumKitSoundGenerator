var flag = 0;

var NumberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonValue = this.innerHTML;
        switch (buttonValue) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                flag = flag + 1;
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                flag = flag + 1;
                break;

            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                flag = flag + 1;
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                flag = flag + 1;
                break;

            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                flag = flag + 1;
                break;

            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                flag = flag + 1;
                break;

            case "l":
                var kickbass = new Audio("./sounds/kick-bass.mp3");
                kickbass.play();
                flag = flag + 1;
                break;

            default:
                console.log(buttonValue);

        }

        buttonAnimation(buttonValue);

        if (flag == 0) {
            var footer = document.getElementById("foot");
            footer.innerHTML = "JD ❤️ Music";
        }
        if (flag == 5) {
            var footer1 = document.getElementById("foot");
            footer1.innerHTML = "Doing Dreat👌";
        }
        if (flag == 10) {
            var footer2 = document.getElementById("foot");
            footer2.innerHTML = "Excellent Work👌";
        }
    })
}

document.addEventListener("keydown", function (event) {
    Sound(event.key);
    buttonAnimation(event.key)
})

function Sound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            flag = flag + 1;
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            flag = flag + 1;
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            flag = flag + 1;
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            flag = flag + 1;
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            flag = flag + 1;
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            flag = flag + 1;
            break;

        case "l":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            flag = flag + 1;
            break;
    }

    if (flag == 0) {
        var footer = document.getElementById("foot");
        footer.innerHTML = "JD ❤️ Music";
    }
    if (flag == 5) {
        var footer1 = document.getElementById("foot");
        footer1.innerHTML = "Doing Dreat👌";
    }
    if (flag == 10) {
        var footer2 = document.getElementById("foot");
        footer2.innerHTML = "Excellent Work👌";
    }
}

function buttonAnimation(mainKey) {
    var Button = document.querySelector("." + mainKey);
    Button.classList.add("pressed");
    setTimeout(function () {
        Button.classList.remove("pressed");
    }, 100);
}