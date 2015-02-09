var dragging = "Invalid object";

function AllowedDrop(ev)
{
    ev.preventDefault();
}

function Drag(ev)
{
    dragging = ev.target;
    ev.dataTransfer.setData('Text/html', ev.target.id);
}


function Drop(ev, target)
{
    ev.preventDefault();
    var dropped = ev.target;

    if(dragging.id == "option_text")
    {
        var section = dropped.parentNode.parentNode.id;
        var sectionsplit  = section.split("section");
        var sectionid = parseInt(sectionsplit[1]) + 1;

        var question = dropped.parentNode.id;
        var questionsplit = question.split("question");
        var questionid = parseInt(questionsplit[1]);

        CheckAnswer(sectionid, questionid, dragging, target);

        dragging = "";
    }
}