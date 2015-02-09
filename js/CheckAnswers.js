var root = "/stageopdrachten/find-og-indsaet-ordet";

var optionsJSON = $.getJSON(root+"/json/options.json", function(data){ optionsJSON = data; });
var questionJSON = $.getJSON(root+"/json/questions.json", function(data){ questionJSON = data; });

//Check if the question is correct.
function CheckAnswer(captionid, questionid, answer, dropped)
{
    var answerid = GetOptionIdByName(answer.innerHTML);
    var questionanswer = GetAnswerQuestion(captionid, questionid);

    console.log(answerid + " Answer: " + questionanswer);

    if(parseInt(answerid) == parseInt(questionanswer))
    {
        alert("goed!");
        dropped.innerHTML = dragging.innerHTML;
        dropped.style.color = "black";

        answer.parentNode.style.height = "0px";
        answer.parentNode.style.visibility = "collapse";
        answer.parentNode.style.padding = "0px";
    }
    else
    {
        alert("fout!");
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
