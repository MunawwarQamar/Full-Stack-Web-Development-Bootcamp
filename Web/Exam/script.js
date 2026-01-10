function removeBtn(btn) {
  btn.remove();
}

function changeImage(img) {
  img.src = "assets/blue-super-car.png";
}
function bookNow(id) {
  var span = document.getElementById(id);
  var number = span.innerText;
  if (number > 0) span.innerText = number - 1;
  else alert("Sorry, no appointments available");
}

function readMore(btn) {
  document.getElementById("clientImg").src = "assets/client.png";
  document.getElementById("comment").innerText =
    "I had a great experience at the car wash. the service was quick and efficent. and my car was cleaned thoroughly with attention to detail. The staff were ptofessinal and committed to providing the best service possible. Additionally, the prices were reasonable considering the quality of the work. I will definitely be coming back and would recommend this car wash to anyone looking for excellent service";
}
