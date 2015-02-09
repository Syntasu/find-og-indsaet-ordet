function PlayWord(sound)
{
    var audio = document.getElementById("audio");
    var source = document.getElementById("mp3source");

    source.src = "sounds/words/"+sound+".mp3";

    audio.load();
    audio.play();
}

function PlaySentence(sound)
{
    var elementid = sound.id.split("button");
    var data = elementid[1].split("-");

    var sectionid = data[0];
    var questionid = data[1];

    var file = GetSoundQuestion(sectionid, questionid);

    var audio = document.getElementById("audio");
    var source = document.getElementById("mp3source");

    source.src = "sounds/sentences/"+file+".mp3";

    audio.load();
    audio.play();
}

//Get the sound of question from the json file.
function GetSoundQuestion(captionid, answerid)
{
    if (questionJSON != undefined)
    {
        for(var keys in questionJSON)
        {
            if(keys == "section"+captionid)
            {
                for(var i = 0; i < questionJSON["section"+captionid][0].questions.length; i++)
                {
                    return questionJSON["section"+captionid][0].questions[(answerid-1)].sound;
                }

            }
        }
    }
    else
    {
        setTimeout(GetAnswerQuestion, 20);
    }
}