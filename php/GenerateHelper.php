<?php

function GetJsonFileContent($p)
{
    return file_get_contents($p);
}

function ToUTF8($string)
{
    return utf8_decode($string);
}

function ApplyBasicFormat($subject)
{
    $search = array(
        "[input]" => "<span class='dropable' id='drop3' ondrop='Drop(event, this)' ondragover='AllowedDrop(event)'>svar...</span>",
        "[break]" => "<br/>"
    );

    return str_replace(array_keys($search), array_values($search), $subject);
}
?>