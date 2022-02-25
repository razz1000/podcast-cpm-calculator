


function calc() {
    let cpmResult = document.getElementById('cpm_result')

    var listeners = document.getElementById("listeners").value;
    var listeners = parseInt(listeners, 10);
    var price = document.getElementById("price").value;
    var price = parseInt(price, 10);
    var cpm = (price / listeners) * 1000;
    document.getElementById("cpm").value = cpm;  

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      sleep(2000).then(() => { 

    if (document.getElementById("cpm").value >= 10 && document.getElementById("cpm").value <= 45) {
        cpmResult.innerHTML = 'You are within the recommended CPM range.👍'
    } else if (document.getElementById("cpm").value >= 0 && document.getElementById("cpm").value < 10) {
        cpmResult.innerHTML = 'Your price is too low. You should consider raising your price.⬆️'
    } else if (document.getElementById("cpm").value === 'NaN') {
        cpmResult.innerHTML = ''
    } else {
        cpmResult.innerHTML = 'You are NOT within the recommended CPM range ($10-45). Consider lowering your price.⬇️'
    }
}


); };


