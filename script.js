document.getElementById("noButton").addEventListener("click", function () {
    toggleFullScreen();
    changeBackgroundColor();
    createNewButtons();
});

document.getElementById("yesButton").addEventListener("click", function () {
    exitFullScreen();
    window.location.href = "success.html";
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

function exitFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

function changeBackgroundColor() {
    let colors = ["#FFD1DC", "#FFC0CB", "#FFDDDD", "#FFCCE5", "#FFDFDF"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function createNewButtons() {
    document.body.innerHTML = '<h1>Ayo lihat pengumuman SNBP bareng aku!</h1>';

    let yesButton = document.createElement("button");
    yesButton.innerText = "Mau";
    yesButton.id = "yesButton";
    yesButton.style.position = "absolute";
    yesButton.style.right = "10%";
    yesButton.style.bottom = "30%";
    yesButton.onclick = function () {
        exitFullScreen();
        window.location.href = "success.html";
    };

    let noButton = document.createElement("button");
    noButton.innerText = "Gak Mau";
    noButton.id = "noButton";
    noButton.style.position = "absolute";
    noButton.style.left = "10%";
    noButton.style.bottom = "30%";
    noButton.onclick = function () {
        toggleFullScreen();
        changeBackgroundColor();
        createNewButtons();
    };

    document.body.appendChild(yesButton);
    document.body.appendChild(noButton);

    createRandomCharacter();
}

function createRandomCharacter() {
    let characters = [
        "hutao.png",  // Ganti dengan path gambar Hu Tao
        "lylia.png"   // Ganti dengan path gambar Lylia
    ];
    
    let img = document.createElement("img");
    img.src = characters[Math.floor(Math.random() * characters.length)];
    img.style.top = Math.random() * 70 + "%";
    img.style.left = Math.random() * 70 + "%";

    document.body.appendChild(img);
}
