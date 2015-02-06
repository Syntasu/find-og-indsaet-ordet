<?php
include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateOptions.php";

function StartGeneratingQuestions()
{
    $id = 0;
    $path = $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/json/questions.json";
    $jsonraw = GetJsonFileContent($path);

    $results = json_decode($jsonraw, true);

    foreach($results as $result)
    {
        foreach($result as $caption)
        {
            createCaption($id, $caption["caption"]);

            $questionid = 0;
            foreach($caption["questions"] as $question)
            {
                CreateQuestions($questionid, $question["text"]);

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
    echo "<h4 id='caption2' class='caption'>".ToUTF8($text)."</h4>";
}

function CreateQuestions($id, $text)
{
    $search = array("[input]" => "<span class='dropable' id='drop3' ondrop='drop(event, this)' ondragover='allowDrop(event)'>svar...</span>");
    $newtext = StringReplaceAssociative($search, $text);

    echo "<p id='question".$id."' class='question'>".ToUTF8($newtext)."</p><br/>";
}

function StringReplaceAssociative(array $replace, $subject)
{
    return str_replace(array_keys($replace), array_values($replace), $subject);
}

?>