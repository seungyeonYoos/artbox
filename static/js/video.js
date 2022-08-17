const videos = document.querySelectorAll("video");
const nexVideoBtn = document.querySelector(".carousel-control-next");
const carouselDiv = document.querySelector(".carousel");

// carouselDiv.carousel = "pause";

//각각의 video에 ended event가 발생하면 다음 캐러셀 버튼이 클릭된다.
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("ended", () => {
    nexVideoBtn.click();
  });
}
