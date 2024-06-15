
// declare
function farToCel(far) {
    return (far - 32) * 5/9
}



const userInput = prompt("enter degree in far");
const result = farToCel(userInput);
document.write(result)