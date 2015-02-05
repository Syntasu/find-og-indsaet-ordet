var dragging = "";
var dropped = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    dragging = ev.target.innerHTML;
    ev.dataTransfer.setData('Text/html', ev.target.id);
}

function drop(ev, target) {
    ev.preventDefault();
    dropped = ev.target.innerHTML;

}