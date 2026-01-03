function validateAndRedirect() {
  var checkinDate = new Date(document.getElementById('check-in-date').value);
  var checkoutDate = new Date(document.getElementById('check-out-date').value);
  var promoCode = document.getElementById('promocode').value;

  // Check if the dates are valid
  if (isNaN(checkinDate) || isNaN(checkoutDate)) {
    alert('Please enter valid check-in and check-out dates.');
    return false;
  }

  // Check if the check-out date is before the check-in date
  if (checkoutDate < checkinDate) {
    alert('Check-out date must be after the check-in date.');
    return false;
  }

  // Check if the promo code is correct
  if (promoCode === 'FREEBREAKFAST1234') {
    document.getElementById('promocode').textContent = 'Congratulations! You get free breakfast!';
  } else {
    document.getElementById('promocode').textContent = 'Promo code is not valid.';
  }

  // Validation successful, redirect to the next page
  window.location.href = 'hotel_cart.html';
}