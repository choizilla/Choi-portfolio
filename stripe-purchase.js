function buy_product(price_id) {
  var stripe = Stripe('pk_live_51GvSGPH0PRIOMrSqlqqmKEJ3LLTA8q6DkhmlOSGi4bz65RrJpg9y2bB8yNEfjleovsFZ5LpV0AyINLE3c4LLClYX00YFZsxCUR');

  stripe.redirectToCheckout({
      lineItems: [{price: price_id, quantity: 1}],
      mode: 'payment',
      successUrl: 'https://conversationaltransformation.com/success.html',
      cancelUrl: 'https://www.conversationaltransformation.com/resources/',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
}

function buy_ac_book() {
  buy_product('price_1Gwb0vH0PRIOMrSqQFT02AtR');
}

function buy_dtt_guide() {
  buy_product('price_1IEdTHH0PRIOMrSqWmKpThhR');
}  

function buy_dtt_workshop() {
  buy_product('price_1IEdVhH0PRIOMrSqLm98iBkC');
}  

document.getElementById("ac_book_button")     .addEventListener("click", buy_ac_book);
document.getElementById("dtt_guide_button")   .addEventListener("click", buy_dtt_guide);
document.getElementById("dtt_workshop_button").addEventListener("click", buy_dtt_workshop);
