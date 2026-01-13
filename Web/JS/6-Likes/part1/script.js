var likeCountSpan = document.querySelector("#likeCount");
var likes = 3;

function addLike() {
  likes++;
  likeCountSpan.innerText = likes;
}
