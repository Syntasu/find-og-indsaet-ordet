<?php

include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateHelper.php";

function StartGeneratingSituation()
{
    $id = 0;
    $path = $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/config.json";
    $jsonraw = GetJsonFileContent($path);

    $results = json_decode($jsonraw, true);

    foreach($results["config"] as $result )
    {
        $hasSituation = $result["situation"] === "true" ? true : false;

        if($hasSituation)
        {
            CreateSituation($result["situation_text"]);
        }
    }
}

function CreateSituation($text)
{
    echo "<div id='situation'>
            <p id='situation_text'>".HTMLSafeString($text)."</p>
          </div>";
}

?>