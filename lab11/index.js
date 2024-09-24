function form_generate(){
    document.getElementById("form").innerHTML = 
    `<form>
    <label>Enter Name</label>
    <br> 
    <input type = 'name' id = 'name'> 
    <br>
    <label> Enter Number </label> 
    <br> 
    <input type = 'text' id = 'number'>
    </form>`
}