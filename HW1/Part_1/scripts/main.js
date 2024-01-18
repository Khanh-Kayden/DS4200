// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!"

// let myVariable;

// myVariable = "Bob";

// myVariable = "steve";

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// } else {
//     alert("Awwww, but chocolate is my favorite...");
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// test('mul 4 by 7', () => {
//     expect(multiply(4,7)).toBe(28);
// })

// document.querySelector("html").addEventListener("click", function() {
//     alert("Ouch! Stop poking me!");
// })




const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Firefox_logo.png") {
    myImage.setAttribute("src", "images/Firefox_N2.png");
  } else {
    myImage.setAttribute("src", "images/Firefox_logo.png");
  }
};

let myButton = documnet.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = setUserName();
