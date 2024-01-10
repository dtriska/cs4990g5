document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.getElementById('timeline');
  
    // Example employment data
    const employmentHistory = [
      { year: 2005, position: 'CEO', company: 'Wayne Enterprises' },
      { year: 2010, position: 'Vigilante', company: 'Batman Incorporated' },
      { year: 2015, position: 'Justice League Member', company: 'Justice League' },
    ];
  
    // Populate the timeline
    employmentHistory.forEach(job => {
      const timelineItem = document.createElement('div');
      timelineItem.classList.add('timeline-item');
      timelineItem.innerHTML = `<p>${job.year}</p><p>${job.position} at ${job.company}</p>`;
      timeline.appendChild(timelineItem);
    });
  });

let secretNumber;
let attempts = 0;

function initializeGame() {
  // Generate a random number between 1 and 100
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  // Display the input field and button
  document.getElementById('guess-input').style.display = 'block';
  document.getElementById('submit-guess').style.display = 'block';

  // Display the initial message
  displayMessage('Guess a number between 1 and 100');
}

function submitGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById('guess-input').value);

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    displayMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
    // Hide the input field and button after the game is won
    document.getElementById('guess-input').style.display = 'none';
    document.getElementById('submit-guess').style.display = 'none';
  } else {
    // Provide a hint whether the secret number is higher or lower
    const hint = userGuess < secretNumber ? 'Higher' : 'Lower';
    displayMessage(`${hint}! Try again.`);
    // Increment the attempts
    attempts++;
  }
}

function displayMessage(message) {
  // Display the message to the user
  document.getElementById('message').innerText = message;
}

// Call initializeGame when the page loads
initializeGame();
