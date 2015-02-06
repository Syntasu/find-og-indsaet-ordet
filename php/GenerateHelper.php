<?php

function GetJsonFileContent($p)
{
    return file_get_contents($p);
}

function HTMLSafeString($subject)
{
    $utfdecode = utf8_decode($subject);

    $search = array(
        "[input]" => "<span class='dropable' id='drop' ondrop='Drop(event, this)' ondragover='AllowedDrop(event)'>svar...</span>",
        "[break]" => "<br/>",
        "[indent]" => "&nbsp;"
    );

    return str_replace(array_keys($search), array_values($search), $utfdecode);
}
?>