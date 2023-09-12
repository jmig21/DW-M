document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://api.artic.edu/api/v1/artists";

  try{
    let response = await fetch(apiUrl, { 
        method: "GET", 
        headers: {
            'Content-Type': 'application/json'
        } 
    })
    if(response.ok){
        let postRespuesta = await response.json()
        console.log( postRespuesta )
        let ej01 = document.getElementById("primerEjemplo")
        let ej01Elemento = document.createElement("p");
        ej01Elemento.innerHTML = postRespuesta.data[3].alt_titles[0]
        ej01.appendChild(ej01Elemento)

        let ej02 = document.getElementById("primerEjemplo")
        let ej02Elemento02 = document.createElement("p");
        ej02Elemento02.innerHTML = postRespuesta.data[3].birth_date
        ej02.appendChild(ej02Elemento02)

    }

  } catch( error ){
    console.log(error)
  }

})

