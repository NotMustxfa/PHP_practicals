const user_value = document.getElementById("num").value;


function prime_or_not(){
console.log(user_value)
    

    for (i = 1; i < user_value; i--)
    {
        if (user_value % i == 0)
        {
            return false;
        }
        else
        {
            return false;
        }
    }

}

let result = prime_or_not();
console.log(result);