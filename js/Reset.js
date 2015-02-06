function ResetAll()
{
    ResetOptions();
    ResetInputs();
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
        }
    }
}



