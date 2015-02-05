var dragging = ""; // COntains element that is last dragged.

/* Check if its allowed to drop, prevent default behaviour.*/
function allowDrop(ev)
{
    ev.preventDefault();
}

/* Called when a draggable object is being dragged.
Set the global variable to indentify the dragged element/object
 */
function drag(ev)
{
    dragging = ev.target.innerHTML;
    ev.dataTransfer.setData('Text/html', ev.target.id);
}


/*Called when a element is dropped on this element.
Check if answer is correct or wrong, perform action based off of that.*/
function drop(ev, target)
{
    ev.preventDefault();
    var dropped = ev.target.innerHTML;

    target.innerHTML = dragging;
    target.style.color = "black";
}