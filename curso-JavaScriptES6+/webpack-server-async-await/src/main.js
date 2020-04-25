//async sempre tem que ter uma função por volta
//exemplos
// async function executaPromise(){
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())

// }
// executaPromise()
//arrow function
// const executaPromise = async() => {
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
// }
// executaPromise()

//axios
import axios from 'axios'

class Api{
    static async getUserInfo(username){
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(response)
        }
        
        catch(err){
            console.log('Erro na API')
        }
    }
}
Api.getUserInfo('luccasadriano')
Api.getUserInfo('luccasadriassdfdsfno')
