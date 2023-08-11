function Smelly() {
  const indicator = document.querySelector('footer'); // Change this to the desired selector
  console.log('Checked');
  if (indicator) {
    console.log('Found');
    clearInterval(intervalId); // Stop checking
    const textarea = document.querySelector(
      '[data-testid="conversation-compose-box-input"]'
    );
    textarea.style.maxHeight = '500px';
  }
}

// Start checking every 200ms
const intervalId = setInterval(Smelly, 300);
