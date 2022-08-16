const videos = document.querySelectorAll("video");

function handleNextVideo() {
  const nexVideoBtn = document.querySelector(".carousel-control-next");
  nexVideoBtn.click();
}

for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("ended", handleNextVideo);
}
