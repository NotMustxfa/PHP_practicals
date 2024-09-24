<?php
    function a1(&$a)
    {
        $a.="hello";
    }

    $message = "Good morning";
    $y = a1($message);
    echo $y;