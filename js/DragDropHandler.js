var dragging = "Invalid object";

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    dragging = ev.target.innerHTML;
    ev.dataTransfer.setData('Text/html', ev.target.id);
}


function drop(ev, target)
{
    ev.preventDefault();
    var dropped = ev.target.innerHTML;

    target.innerHTML = dragging;
    target.style.color = "black";
}