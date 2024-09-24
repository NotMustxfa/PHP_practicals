<?php

    function check_value($a,$b)
    {
        if ($a > $b)
        {
            return 0;
        }
        return 1;
    }

    $x = check_value(30,20);
    if ($x == 0)
    {
        echo "First number is bigger";
    }
    else
    {
        echo "Second number is bigger";
    }


?>