<?php
include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateHelper.php";

function StartGeneratingOptions()
{
    $path = $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/json/options.json";
    $jsonraw = GetJsonFileContent($path);

    $results = json_decode($jsonraw, true);
    foreach($results as $result)
    {
        foreach($result as $option)
        {
            CreateOption($option['id'], ToUTF8($option['word']));
        }
    }
}

function CreateOption($id, $text)
{
    echo '<div id="option'. $id . '" class="option">
            <img id="option_image" src="img/button.png" width="30" height="26" />
            <p draggable="true" ondragstart="Drag(event)" id="option_text">'.$text.'</p>
        </div>';
}

?>