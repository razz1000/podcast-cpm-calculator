



function calc() {
    var listeners = document.getElementById("listeners").value;
    var listeners = parseInt(listeners, 10);
    var price = document.getElementById("price").value;
    var price = parseInt(price, 10);
    var cpm = (price / listeners) * 1000;
    document.getElementById("cpm").value = cpm;  
}


