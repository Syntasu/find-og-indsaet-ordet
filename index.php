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
        <p id="score_text" >Rigtige:&nbsp; <span id="score_correct">0</span> &nbsp; Forkerte: &nbsp; <span id="score_wrong">0</span></p>
    </div>


    <div id="content_wrapper">
        <div id="situation">
            <p id="situation_text">Situation text</p> 
        </div>

        <div id="section1" class="section">
            <h4 id="caption1" class="caption"> This is caption one:</h4>
            <p id="question1" class="question">- Krav1 krav1<span class="dropable" id="drop1" ondrop="drop(event, this)" ondragover="allowDrop(event)" >svar...</span>bla bla bla</p><br/>
            <p id="question2" class="question">- Krav2 krav2<span class="dropable" id="drop2" ondrop="drop(event, this)" ondragover="allowDrop(event)" >svar...</span>bla bla bla</p><br/>
            <p id="question3" class="question">- Krav3 krav3<span class="dropable" id="drop3" ondrop="drop(event, this)" ondragover="allowDrop(event)" >svar...</span>bla bla bla</p><br/>
        </div>

        <div id="section2" class="section">
            <h4 id="caption2" class="caption"> This is caption two:</h4>
            <p id="question1" class="question">- Krav1 krav1<span class="dropable" id="drop1" ondrop="drop(event, this)" ondragover="allowDrop(event)">svar...</span>bla bla bla</p><br/>
            <p id="question2" class="question">- Krav2 krav2<span class="dropable" id="drop2" ondrop="drop(event, this)" ondragover="allowDrop(event)">svar...</span>bla bla bla</p><br/>
            <p id="question3" class="question">- Krav3 krav3<span class="dropable" id="drop3" ondrop="drop(event, this)" ondragover="allowDrop(event)">svar...</span>bla bla bla</p><br/>
        </div>
    </div>

    <div id="options_wrapper">
        <?php
            include_once $_SERVER["DOCUMENT_ROOT"] . "/stageopdrachten/find-og-indsaet-ordet/php/GenerateOptions.php";
            StartGeneratingOptions();
        ?>
    </div>
</body>



<script src="js/DragDropHandler.js""></script>


</html>