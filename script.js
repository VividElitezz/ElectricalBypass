document.addEventListener("DOMContentLoaded", function () {
    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "default";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Theme selector event listener
    const themeSelector = document.getElementById("theme-selector");
    if (themeSelector) {
        themeSelector.value = savedTheme;
        themeSelector.addEventListener("change", function () {
            document.documentElement.setAttribute("data-theme", this.value);
            localStorage.setItem("theme", this.value);
        });
    }

    // Apply uploaded custom background across pages
    const savedBackground = localStorage.getItem("customBackground");
    if (savedBackground) {
        document.body.style.backgroundImage = `url(${savedBackground})`;
    }

    // Handle background image upload
    const backgroundInput = document.getElementById("background-upload");
    if (backgroundInput) {
        backgroundInput.addEventListener("change", function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    localStorage.setItem("customBackground", e.target.result);
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Panic Button Functionality
    const panicButton = document.getElementById("panic-button");
    if (panicButton) {
        panicButton.addEventListener("click", function () {
            const panicURL = localStorage.getItem("panicURL") || "https://classroom.google.com/";
            window.location.href = panicURL;
        });
    }

    // Panic URL Customization
    const panicURLInput = document.getElementById("panic-url-input");
    if (panicURLInput) {
        panicURLInput.value = localStorage.getItem("panicURL") || "";
        panicURLInput.addEventListener("change", function () {
            localStorage.setItem("panicURL", this.value);
        });
    }

    // Home Button Visibility (Appears on all pages except home)
    if (!window.location.pathname.includes("index.html")) {
        const homeButton = document.createElement("button");
        homeButton.id = "home-button";
        homeButton.textContent = "Home";
        homeButton.onclick = function () {
            window.location.href = "index.html";
        };
        document.body.appendChild(homeButton);
    }

        });
document.addEventListener("DOMContentLoaded", function () {
    // Create Full-Screen Iframe
    let fullscreenFrame = document.createElement("iframe");
    fullscreenFrame.id = "fullscreen-frame";
    document.body.appendChild(fullscreenFrame);

    // Create Exit Button
    let exitButton = document.createElement("button");
    exitButton.id = "exit-fullscreen";
    exitButton.textContent = "⏏ Exit Full Screen";
    exitButton.onclick = exitFullScreen;
    document.body.appendChild(exitButton);

    // Function to Open Game/App in Full-Screen
    window.openFullScreen = function (url) {
        fullscreenFrame.src = url;
        fullscreenFrame.style.display = "block";
        exitButton.style.display = "block";

        // Enter Full-Screen Mode
        if (fullscreenFrame.requestFullscreen) {
            fullscreenFrame.requestFullscreen();
        } else if (fullscreenFrame.mozRequestFullScreen) {
            fullscreenFrame.mozRequestFullScreen();
        } else if (fullscreenFrame.webkitRequestFullscreen) {
            fullscreenFrame.webkitRequestFullscreen();
        } else if (fullscreenFrame.msRequestFullscreen) {
            fullscreenFrame.msRequestFullscreen();
        }
    };

    // Function to Exit Full-Screen Mode
    function exitFullScreen() {
        fullscreenFrame.style.display = "none";
        exitButton.style.display = "none";
        fullscreenFrame.src = "";

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});
