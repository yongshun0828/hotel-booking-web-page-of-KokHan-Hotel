const totalCosts = JSON.parse(localStorage.getItem('total'));
const name =document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const address = document.getElementById('address').value;
const city = document.getElementById('city').value;
const state = document.getElementById('state').value;
const zipcode = document.getElementById('zipcode').value;

// Get payment details
const cardName = document.getElementById('cardname').value;
const cardNumber = document.getElementById('card-number').value;
const expirationDate = document.getElementById('exp').value;
const cvv = document.getElementById('cvv').value;

// Perform validation or additional processing if needed
// Add event listener to form submit
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
if (cardNumber.value.length !== 16) {
  alert('Please enter a valid 16-digit card number.');
  cardNumber.focus();
  return;
}

if (cardName.value.trim() === '') {
  alert('Please enter a cardholder name.');
  cardName.focus();
  return;
}

if (cardExpiryInput.value.length !== 5 || !cardExpiryInput.value.includes('/')) {
  alert('Please enter a valid card expiry date (MM/YY).');
  cardExpiryInput.focus();
  return;
}

if (cardCvvInput.value.length !== 3) {
  alert('Please enter a valid 3-digit CVV code.');
  cardCvvInput.focus();
  return;
}

  // Simulate payment processing
  alert('Payment processed successfully!');
  form.reset();
});
// Create an object to store guest and payment details
const paymentDetails = {
  guest: {
    name: name,
    email: email,
    phone: phone,
    address: address,
    city : city,
    state : state,
    zipcode : zipcode,
  },
  payment: {
    cardname : cardName,
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    cvv: cvv
  }
};

// Display the payment details (you can modify this to suit your needs)
console.log(paymentDetails);
console.log(totalCosts); 

paymentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the amount paid from the form input
  const amountPaid = parseFloat(document.getElementById('total').value);

  // Perform any necessary validation or processing on the amount paid

  // Display success message with the amount paid
  displaySuccessMessage(amountPaid);
});
function displaySuccessMessage(amountPaid) {
  const successMessage = document.createElement('p');
  successMessage.textContent = `You have successfully paid $${amountPaid.toFixed(2)}. Thank you!`;
  successMessage.classList.add('success-message');

  // Append the success message to the page
  const mainSection = document.querySelector('main');
  mainSection.appendChild(successMessage);
}
