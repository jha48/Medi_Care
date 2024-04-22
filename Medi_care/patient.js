document.getElementById('hospitalSelect').addEventListener('change', function() {
    var selectedHospital = this.value;
    var hospitalDetails = document.getElementById('hospitalDetails');
    
    if (selectedHospital) {
      hospitalDetails.classList.remove('hidden');
      document.getElementById('hospitalName').textContent = selectedHospital;
      
      // Dummy data for bed availability
      var totalBeds = 100;
      var bookedBeds = Math.floor(Math.random() * totalBeds);
      var availableBeds = totalBeds - bookedBeds;
      
      document.getElementById('bedAvailability').textContent = "Bed Availability:";
      document.getElementById('bedsBooked').textContent = "Beds Booked: " + bookedBeds;
      document.getElementById('availableBeds').textContent = "Available Beds: " + availableBeds;
    } else {
      hospitalDetails.classList.add('hidden');
    }
  });
  