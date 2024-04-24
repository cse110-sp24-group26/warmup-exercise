document.addEventListener('DOMContentLoaded', function() {
    // Get all emoji labels
    const emojiLabels = document.querySelectorAll('.emoji-label');
  
    // Add click event listener to each emoji label
    emojiLabels.forEach(function(label) {
      label.addEventListener('click', function() {
        // Get the emotion associated with the clicked emoji label
        const emotion = label.getAttribute('data-emotion');
        
        // Update the text to display the selected sentiment
        document.getElementById('selectedSentiment').textContent = `You feel ${emotion} about Team 26.`;
      });
    });
  });
  