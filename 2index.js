
function generateRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100); // generates a random number between 0 and 99
        console.log(randomNumber);
    }, 2000);
}

generateRandomNumber();
