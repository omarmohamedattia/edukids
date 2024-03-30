// Function to get wallet amount from localStorage
function getWalletAmount() {
    var walletAmount = localStorage.getItem("walletAmount");
    if (walletAmount === null) {
        return 3000; // Set wallet amount to $3000 if not set
    }
    return parseInt(walletAmount);
}

// Function to update wallet amount in localStorage
function updateWalletAmount(amount) {
    localStorage.setItem("walletAmount", amount);
}

// Get the wallet element
var wallet = document.getElementById("walletAmount");
// Set initial wallet amount
wallet.innerText = getWalletAmount();

// Get all buy buttons
var buyButtons = document.querySelectorAll(".buy");

// Loop through each buy button and add event listener
buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get current wallet amount
        var currentAmount = parseInt(wallet.innerText);
        
        // Get the price of the item
        var itemPrice = parseInt(button.previousElementSibling.innerText.split(":")[1].trim());
        
        // Check if there's enough balance
        if (currentAmount >= itemPrice) {
            // Deduct the item price from the wallet
            var newAmount = currentAmount - itemPrice;
            // Update the wallet amount displayed
            wallet.innerText = newAmount;
            // Update wallet amount in localStorage
            updateWalletAmount(newAmount);
            // Alert for successful purchase
            alert("Purchase successful! Your new balance is: $" + newAmount);
        } else {
            // Alert for insufficient funds
            alert("you don't  have money !");
        }
    });
});
function goapple(){
  window.location= "apple.html"

}
function gops(){
  window.location= "ps.html"

}
function gobed(){
  window.location= "bed.html"

}
function gophysiotherapy(){
  window.location= "physiotherapy.html"

}
function gophone(){
  window.location= "phone.html"
}
function gowh(){
  window.location= "wh.html"
}
function goby(){
  window.location= "by.html"
}
function goarchitecture(){
  window.location= "architecture.html"
}
function gonoex(){
  window.location= "noex.html"
}
function gorichbook(){
  window.location= "richbook.html"
}