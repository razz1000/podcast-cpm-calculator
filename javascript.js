


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

    if (document.getElementById("cpm").value >= 10 && document.getElementById("cpm").value <= 35) {
        cpmResult.innerHTML = "<span style='color: #4ef018;'>Your price is within the recommended CPM range.👍</span>"
    } else if (document.getElementById("cpm").value >= 0 && document.getElementById("cpm").value < 10) {
        cpmResult.innerHTML = "<span style='color: yellow;'>Your price is quite low. You should consider raising your price.⬆️</span>"
    } else if (document.getElementById("cpm").value === 'NaN') {
        cpmResult.innerHTML = ''
    } else {
        cpmResult.innerHTML = "<span style='color: red;'>Your price is NOT within the recommended CPM range ($10-35). Consider lowering your price.⬇️</span>"
    }
}


); };


