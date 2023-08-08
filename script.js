function playGame(playerMove) {
    const moves = ['Piedra', 'Papel', 'Tijera'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    // Determine the winner
    let result;
    if (playerMove === computerMove) {
        result = 'Es un empate';
    } else if (
        (playerMove === 'Piedra' && computerMove === 'Tijera') ||
        (playerMove === 'Papel' && computerMove === 'Piedra') ||
        (playerMove === 'Tijera' && computerMove === 'Papel')
    ) {
        result = 'Tu ganas!';
    } else {
        result = 'Computadora gana!';
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Computadora escogió ${computerMove}. ${result}`;
}

