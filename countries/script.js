const container = document.getElementById("container")

const button = document.createElement("button")
button.innerText = "get country"
button.style.height = "50px"
container.appendChild(button)

const input = document.createElement("input")
input.type = "text"
input.placeholder = "search for country"

container.append(input,button)


const getCountry = async(event) => {
    event.preventDefault()

    const inputValue = input.value.trim()
    console.log(`you typed: ${inputValue}`)

    const result = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    console.log(result)

    const data = await result.json()
    console.log(data)

    if(result.status === 404){
        const infoElement = document.createElement("h1")
        infoElement.innerText = result.statusText
        container.appendChild(infoElement)
    } else{
        const allCards = document.querySelectorAll(".card")
        allCards.forEach(card=> card.remove())


        console.log(data)
        data.map((country, index)=>{
            const card = document.createElement("div")
            card.className = "card"

            const flagImage = document.createElement("img")
            flagImage.style.border = "thick solid black"
            flagImage.src = country.flags.png
            flagImage.alt = country.flags.alt || country.name.common

            const flagTitle = document.createElement("h3")
            flagTitle.innerText = country.name.common

            card.append(flagImage, flagTitle)
            container.appendChild(card)
        })
    }
}

button.addEventListener("click", getCountry)



