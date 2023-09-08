// Write your code here!
// Remove element by ID
const element = document.getElementById("main");
element.remove();

// Add newHeader variable that points to H1 node;
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "John is the champion"