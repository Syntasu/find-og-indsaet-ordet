var root = "/stageopdrachten/find-og-indsaet-ordet";

//Grab all JSON files
var optionsJSON = $.getJSON(root+"/json/options.json", function(data){ optionsJSON = data; });
var questionJSON = $.getJSON(root+"/json/questions.json", function(data){ questionJSON = data; });

//Check if the question is correct.
function CheckAnswer(captionid, questionid, answer, dropped)
{
    var answerid = GetOptionIdByName(answer.innerHTML);
    var questionanswer = GetAnswerQuestion(captionid, questionid);

    if(parseInt(answerid) == parseInt(questionanswer))
    {
        //Antwoord goed
        AddCorrect();

        dropped.innerHTML = dragging.innerHTML;
        dropped.style.color = "black";
        dropped.style.backgroundColor = "green";

        answer.parentNode.style.height = "0px";
        answer.parentNode.style.visibility = "collapse";
        answer.parentNode.style.padding = "0px";

        $(dropped.parentNode.getElementsByTagName("img")[0]).removeClass("hidden");
    }
    else
    {
        //Antwoord fout.
        AddWrong();

        dropped.innerHTML = dragging.innerHTML;
        dropped.style.color = "black";
        dropped.style.backgroundColor = "red";
    }


}

//Get the id of the options by the name of the option.
function GetOptionIdByName(answer)
{
    if (optionsJSON != undefined)
    {
        for(var i = 0; i < optionsJSON.Options.length; i++)
        {
            if(optionsJSON.Options[i].word == answer)
            {
                return ( parseInt( optionsJSON.Options[i].id ) );
            }
        }
    }
    else {
        setTimeout(GetOptionIdByName, 20);
    }
}

//Get the answer of question from the json file.
function GetAnswerQuestion(captionid, answerid)
{
    if (questionJSON != undefined)
    {
        for(var keys in questionJSON)
        {
            if(keys == "section"+captionid)
            {
                for(var i = 0; i < questionJSON["section"+captionid][0].questions.length; i++)
                {
                    if(i == answerid)
                    {
                        return questionJSON["section"+captionid][0].questions[i].answerid;
                    }
                }

            }
        }
    }
    else
    {
        setTimeout(GetAnswerQuestion, 20);
    }
}
