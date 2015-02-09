/**
 * Created by aboum_000 on 9-2-2015.
 */
function AddCorrect()
{
    var correct = document.getElementById("score_correct");
    var newscore = parseInt(correct.innerHTML) + 1;
    correct.innerHTML= newscore;
}

function AddWrong()
{
    var wrong = document.getElementById("score_wrong");
    var newscore = parseInt(wrong.innerHTML) + 1;
    wrong.innerHTML= newscore;
}

