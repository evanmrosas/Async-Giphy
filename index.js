require('dotenv').config();


// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImages(query) {
    try{
        const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
        const response = await fetch(endpoint)
        const data = await response.json()
        const imageURL = data.data[0].url
        console.log(imageURL)
        return imageURL
    } catch(error){
        console.error(error)
    }
}

getImages("dogs");