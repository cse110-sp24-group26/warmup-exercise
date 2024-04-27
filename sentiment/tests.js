// Define selectEmoji function directly in tests.js
function selectEmoji(label) {
  const emotion = label.getAttribute('data-emotion');
  
  document.getElementById('selectedSentiment').textContent = `You feel ${emotion} about Team 26.`;
  
  document.getElementById('feelRating').style.display = 'block';
}

// Unit tests for sentiment rating widget
function testSelectEmoji() {
  const testLabel = document.createElement('label');
  testLabel.setAttribute('data-emotion', 'Happy');

  selectEmoji(testLabel);

  console.assert(document.getElementById('selectedSentiment').textContent === 'You feel Happy about Team 26.', 'Selecting emoji did not update sentiment correctly.');
}

function testFeelRatingDisplay() {
  const testLabel = document.createElement('label');
  testLabel.setAttribute('data-emotion', 'Sad');

  selectEmoji(testLabel);

  console.assert(document.getElementById('feelRating').style.display === 'block', 'feelRating div is not displayed after selecting an emoji.');
}


// Run unit tests
testSelectEmoji();
testFeelRatingDisplay();