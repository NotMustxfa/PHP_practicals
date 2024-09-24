
function fib() {
    const n = document.getElementById("num").value;
    const para = document.getElementById("para");
    let result = fib1(Number(n));
    console.log(result)
}

function fib1(num){

    let a = 0;
    let b = 1;
    para.innerText += a + " ";
    for (let i = 0; i < num - 1; i++) {
        total = a + b;
        a = b;
        b = total;
        para.innerText += a;


    }

}

    // 0 1 1 2 3 5 