const API = "Y7312dlg4bY9Bn0yoW7QbLQ0QLRpP9tz1xmXr1wst38"

const container = document.getElementById("container");
const button = document.createElement("button");
button.innerText = "AAAAAAAAA";
 
let input = document.createElement("input");
input.type = "text";
input.placeholder = "miau";
 
container.append(button, input);
 
const getPhoto = async (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  // const result = await fetch(`https://api.unsplash.com/photos/random/?client_id=${API}&count=3`);
 
  const result = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${API}&query=${inputValue}&per_page=3`
  );
  console.log(result);
 
  const data = await result.json();
  console.log(data);
 
  if (result.total === 0) {
    const infoElement = document.createElement("h2");
    infoElement.innerText = "data not found";
    container.appendChild(infoElement);
  } else {
    const allImages = document.querySelectorAll(".foto");
    allImages.forEach((image) => image.remove());
 
    data.results.map((image) => {
      const card = document.createElement("div");
      card.className = "card";
      container.appendChild(card);
 
      const cardImage = document.createElement("img");
      cardImage.className = "foto";
      cardImage.src = image.urls.small;
 
      container.appendChild(cardImage);
    });
  }
};
button.addEventListener("click", getPhoto);
 