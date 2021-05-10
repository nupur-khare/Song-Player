
        var Song = document.getElementById("Song");
        var icon = document.getElementById("icon");

        icon.onclick = function () {
            if (Song.paused) {
                Song.play();
                icon.src = "media/pause.png";
            } else {
                Song.pause();
                icon.src = "media/play.png";
            };

        }
  