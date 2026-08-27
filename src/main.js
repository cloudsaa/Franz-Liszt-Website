import './style.css'

const videos = document.querySelectorAll(".video");

const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

let currentVideo = 0;

function showVideo(index) {
    videos.forEach(video => {
        video.classList.add("hidden");
    });

    videos[index].classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentVideo++;

    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }

    showVideo(currentVideo);
});

previousButton.addEventListener("click", () => {
    currentVideo--;

    if (currentVideo < 0) {
        currentVideo = videos.length - 1;
    }

    showVideo(currentVideo);
});
