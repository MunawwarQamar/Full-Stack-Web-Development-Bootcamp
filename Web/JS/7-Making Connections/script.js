// Edit profile
function editProfile() {
  var nameEl = document.querySelector("#profileName");
  nameEl.innerText = "Munawwar Qamar";
}

// Counters
var requestCount = 2;
var connectionCount = 500;

// Reject request
function rejectRequest(element) {
  element.closest("li").remove();
  requestCount--;
  document.querySelector("#requestCount").innerText = requestCount;
}

// Accept request
function acceptRequest(element) {
  element.closest("li").remove();
  requestCount--;
  document.querySelector("#requestCount").innerText = requestCount;

  connectionCount++;
  document.querySelector("#connectionCount").innerText = connectionCount;
}
