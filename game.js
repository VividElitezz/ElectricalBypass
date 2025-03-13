// game.js
function openGame(url) {
  let encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
  let iframe = document.getElementById("game-frame");
  iframe.src = encodedUrl;

  // Resize iframe dynamically when it loads
  iframe.onload = function () {
    resizeIframe();
  };

  // Request full-screen mode
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }

  // Show exit button when moving cursor to the top
  document.addEventListener("mousemove", showExitButton);
}

function resizeIframe() {
  var iframe = document.getElementById('game-frame');
  var iframeDocument = iframe.contentWindow.document;
  var bodyHeight = iframeDocument.body.scrollHeight;  // Get content height of the iframe
  iframe.style.height = bodyHeight + "px";  // Set iframe height dynamically
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  // Hide exit button after exiting fullscreen
  document.getElementById("exit-fullscreen").style.display = "none";
  document.removeEventListener("mousemove", showExitButton);
}

function showExitButton(event) {
  if (event.clientY < 50) { // Show exit button if cursor is at the top
    document.getElementById("exit-fullscreen").style.display = "block";
  } else {
    document.getElementById("exit-fullscreen").style.display = "none";
  }
}
