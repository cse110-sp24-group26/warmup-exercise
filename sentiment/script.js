document.addEventListener('DOMContentLoaded', function() {
    // Get all emoji labels
    const emojiLabels = document.querySelectorAll('.emoji-label');
  
    // Function to handle emoji selection
    function selectEmoji(label) {
      // Get the emotion associated with the clicked emoji label
      const emotion = label.getAttribute('data-emotion');
      
      // Update the text to display the selected sentiment
      document.getElementById('selectedSentiment').textContent = `You feel ${emotion} about Team 26.`;
    }
  
    // Add click event listener to each emoji label
    emojiLabels.forEach(function(label) {
      label.addEventListener('click', function() {
        selectEmoji(label);
      });
    });
  
    // Add keyup event listener to handle tab selection
    document.addEventListener('keyup', function(event) {
      // Check if the pressed key is the Tab key (key code 9)
      if (event.keyCode === 9) {
        // Check if focus is on an emoji label
        emojiLabels.forEach(function(label) {
          if (label === document.activeElement) {
            selectEmoji(label);
          }
        });
      }
    });
  });
  