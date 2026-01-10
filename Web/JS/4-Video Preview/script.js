console.log("page loaded...");

var video = document.querySelector("video");

video.addEventListener("mouseover", () => {
  video.play();
});

video.addEventListener("mouseout", () => {
  video.pause();
  video.currentTime = 0;
});
