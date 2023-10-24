window.onload = function(){
  // we test if you have the Browser local Storage enable to store the Fiat Value of Dogecoin to calculate prices
  function isLocalStorageAvailable(){
    var SuchTest = 'SuchTest';
    try {
        localStorage.setItem(SuchTest, SuchTest);
        localStorage.removeItem(SuchTest);
        return true;
    } catch(e) {
        return false;
    }
}

if(!isLocalStorageAvailable()){
    alert("Please enable Local Storage on your browser to be able to store the Dogecoin current value");
}


var fiat_currency = 'usd';
    // Fetch Dogecoin value and convert prices
    $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=" + fiat_currency, function(data){
        localStorage.setItem('dogecoinValue', data["dogecoin"][fiat_currency]); // we store the value in local storage        
    }).fail(function( data, textStatus, error ) {
        alert("Failed to fetch Dogecoin value: " + textStatus + ", " + error);
    });

    const dogecoinValue = localStorage.getItem('dogecoinValue');
    if (dogecoinValue <= 0 ){
        setTimeout(
        function() 
            {
              location.reload();
            }, 120);
    };

    span = document.getElementById("dogecoin-price");
    txt = document.createTextNode(dogecoinValue);
    span.appendChild(txt);
};