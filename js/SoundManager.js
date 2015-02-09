function Play(sound)
{
    var audio = document.getElementById("audio");
    var source = document.getElementById("mp3source");

    source.src = "sounds/"+sound+".mp3";

    audio.load();
    audio.play();

}

