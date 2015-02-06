<?php
    include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateQuestions.php";
    include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateOptions.php";
    include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateSituation.php";

?>

<!DOCTYPE html>
<html>

    <head>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <title>Find og indsaet ordet</title>
    <head>

    <body>
        <div id="reset_wrapper"">
            <img id="reset_image" src="img/button.png" width="40" height="36" />
            <h3 id="reset_text">Igen</h3>
        </div>

        <div id="score_wrapper">
            <p id="score_text" >
                <span id="correct_text">Rigtige</span>
                :&nbsp; <span id="score_correct">0</span>

                &nbsp; <span id="wrong_text">Forkerte</span>:
                &nbsp; <span id="score_wrong">0</span>
            </p>
        </div>


        <div id="content_wrapper">
            <?php
                StartGeneratingSituation();
                StartGeneratingQuestions();
            ?>
        </div>

        <div id="options_wrapper">
            <?php
                StartGeneratingOptions();
            ?>
        </div>
    </body>

    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script id="scripts" src="js/DragDropManager.js"></script>
    <script id="scripts" src="js/LanguageManager.js"></script>

</html>