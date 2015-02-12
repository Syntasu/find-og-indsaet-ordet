<?php
    var_dump($_POST);

    if(isset($_POST["title"]))
    {
        if (!mkdir("../created/".$_POST["title"]."", 0777, true))
        {
            echo "../created/".$_POST["title"]."";
            echo "Failed to create folder";
        }
    }
?>