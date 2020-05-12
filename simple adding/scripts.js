
function SimpleAdding(){
    var input = document.getElementById("input").value;
    var counter = 0;

    for(var i = 1; i<= input; i++){
        counter += i;
    }

    return document.getElementById("result").innerHTML = "Uitkomst= " + String(counter);
}