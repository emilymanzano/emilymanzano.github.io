const myImage = document.querySelector("img");
//ISSO É UM COMENTÁRIO JAVA//
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/imagem_glados.png") {
    myImage.setAttribute("src", "images/mario_luigi.png");
  } else {
    myImage.setAttribute("src", "images/imagem_glados.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Qual o seu nome?");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = "Bem-vinde, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Bem-vinde, " + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
