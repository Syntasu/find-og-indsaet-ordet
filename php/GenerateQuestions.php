<?php
include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateHelper.php";

function StartGeneratingQuestions()
{
    $id = 0;

    $path = $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/json/questions.json";
    $jsonraw = GetJsonFileContent($path);

    $results = json_decode($jsonraw, true);

    foreach ($results as $result)
    {
        foreach ($result as $caption)
        {
            createCaption($id, $caption["caption"]);

            $questionid = 0;
            foreach ($caption["questions"] as $question)
            {
                CreateQuestions($questionid, $id, $question["text"] );

                $questionid++;
            }

            echo "</div>";
        }
        $id++;
    }

}

function CreateCaption($id, $text)
{
    echo "<div id='section".$id."' class='section'>";
    echo "<h4 id='caption".$id."' class='caption'>".HTMLSafeString($text)."</h4>";
}

function CreateQuestions($id, $captionid, $text)
{
    echo "<p id='question".$id."' class='question'><img class='noselect hidden' id='button".($captionid+1)."-".($id+1)."' onclick='PlaySentence(this)' src='img/button.png' width='30' height='26'/> " .HTMLSafeString($text) . "</p><br/>";
}
?>