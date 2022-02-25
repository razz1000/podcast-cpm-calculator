


function calc() {
    let cpmResult = document.getElementById('cpm_result')

    var listeners = document.getElementById("listeners").value;
    var listeners = parseInt(listeners, 10);
    var price = document.getElementById("price").value;
    var price = parseInt(price, 10);
    var cpm = (price / listeners) * 1000;
    document.getElementById("cpm").value = cpm;  
    
    if (document.getElementById("cpm").value < 45) {
        cpmResult.innerHTML = 'You are within the recommended CPM range.👍'
    } else {
        cpmResult.innerHTML = 'You are NOT within the recommended CPM range ($10-45). Consider lowering your price'
    }
}