const container = document.getElementById("container")
const coffeeButton = document.createElement("button")
coffeeButton.innerText = "get photo"
coffeeButton.style.height = "50px"
container.appendChild(coffeeButton)
const image = document.createElement("img")
image.style.width = "300px"
image.style.height = "300px"



const getPhoto = async()=>{
    const result = await fetch("https://coffee.alexflipnote.dev/random.json")
    console.log(result)

    const data = await result.json()
    console.log(data)

    image.src = data.file

    container.appendChild(image)
}
getPhoto()

coffeeButton.addEventListener("click", getPhoto);

