<?php
    function even_odd($n)
    {
        //$n = 8;
        if ($n % 2 == 0)
        {
            echo "Its an even number";
        }
        else
        {
            echo "Its an odd number";
        }
    }

    even_odd(5);
    even_odd(6);
    even_odd(2);
?>