function addRecommendation() {
  var nameInput = document.querySelector('#contact input[type="text"]');
  var recommendationInput = document.querySelector('#new_recommendation');

  var name = nameInput.value.trim();
  var message = recommendationInput.value.trim();

  if (message === '') {
      alert('Please enter a recommendation message.');
      return;
  }

  var newRecommendation = document.createElement('div');
  newRecommendation.classList.add('recommendation');
  newRecommendation.innerHTML = `
      <span>&#8220;</span>${message}<span>&#8221;</span>
      <br>- ${name !== '' ? name : 'Anonymous'}
  `;

  var recommendationsContainer = document.getElementById('all_recommendations');
  recommendationsContainer.appendChild(newRecommendation);

  // Clear input fields after submission
  nameInput.value = '';
  recommendationInput.value = '';

  // Show the popup
  showPopup(true);
}

function showPopup(bool) {
  var popup = document.getElementById('popup');
  if (bool) {
      popup.style.visibility = 'visible';
  } else {
      popup.style.visibility = 'hidden';
  }
}
