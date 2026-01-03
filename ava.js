const checkAvailabilityForm = document.getElementById('check-availability-form');

checkAvailabilityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get the form values
  const checkInDate = document.getElementById('check-in-date').value;
  const checkOutDate = document.getElementById('check-out-date').value;
  const guests = document.getElementById('guests').value;
  const rooms = document.getElementById('rooms').value;
  
  // validate the form
  if (checkInDate === '' || checkOutDate === '' || guests === '' || rooms === '') {
    alert('Please fill out all fields.');
  } else {
    // submit the form
    alert(`Check-In Date: ${checkInDate}\nCheck-Out Date: ${checkOutDate}\nGuests: ${guests}\nRooms: ${rooms}`);
<div class="form-group">
  <label for="rooms">Rooms:</label>
  <select id="rooms" name="rooms">
    <option value="deluxe">Deluxe Room</option>
    <option value="normal">Normal Room</option>
    <option value="seaview">Sea View Room</option>
  </select>
</div>
   
  }

