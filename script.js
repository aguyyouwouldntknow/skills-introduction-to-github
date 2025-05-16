function flip(choice) {
  const coin = Math.random() < 0.5 ? 'heads' : 'tails';
  document.getElementById('choice').textContent = choice;
  document.getElementById('result').textContent = coin;
  document.getElementById('outcome').textContent = (choice === coin) ? 'You win!' : 'You lose!';
}
