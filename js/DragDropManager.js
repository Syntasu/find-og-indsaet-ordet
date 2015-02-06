var dragging = "Invalid object";

function AllowedDrop(ev)
{
    ev.preventDefault();
}

function Drag(ev)
{
    dragging = ev.target;

    console.log(dragging.id);

    ev.dataTransfer.setData('Text/html', ev.target.id);
}


function Drop(ev, target)
{
    ev.preventDefault();
    var dropped = ev.target.innerHTML;

    if(dragging.id == "option_text")
    {
        target.innerHTML = dragging.innerHTML;
        target.style.color = "black";

        dragging.parentNode.style.height = "0px";
        dragging.parentNode.style.visibility = "collapse";

        dragging = "";
    }
}