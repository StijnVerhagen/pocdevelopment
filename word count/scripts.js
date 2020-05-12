
function SimpleAdding(){
    var input = document.getElementById("input").value;

    return document.getElementById("result").innerHTML = "Aantal woorden= " + String(input.split(" ").length);
}