function ResetAll()
{
    ResetOptions();
    ResetInputs();
    ResetScore();
}

function ResetOptions()
{
    var inputs = document.getElementsByTagName("div");

    for(i = 0; i < inputs.length; i++)
    {
        if($.inArray("option", inputs[i].classList) == 0)
        {
            inputs[i].style.height = "20px";
            inputs[i].style.visibility = "visible";
            inputs[i].style.padding = "5px";
        }
    }
}

function ResetInputs()
{
    var inputs = document.getElementsByTagName("span");

    for(i = 0; i < inputs.length; i++)
    {
        if($.inArray("dropable", inputs[i].classList) == 0)
        {
            inputs[i].innerHTML = "svar...";
            inputs[i].style.color = "rgba(88,88,88,0.5)";
            inputs[i].style.padding = "0px";
            inputs[i].style.backgroundColor = "white";

            $(inputs[i].parentNode.getElementsByTagName("img")[0]).addClass("hidden");
        }
    }
}

function ResetScore()
{
    document.getElementById("score_wrong").innerHTML = 0;
    document.getElementById("score_correct").innerHTML = 0;
}


