
const URLs='https://api.chucknorris.io/jokes/random'
const getJoke=document.getElementById('fetchJoke')
const putJoke=document.getElementById('jokeList')


//- Manejador de click en el botón "Obtener Chiste"
getJoke.addEventListener('click',()=>{
    getJokes();
})

//Fetch creamos una función para traernos el chiste
//- Una función para obtener un chiste de Chuck Norris desde la API
function getJokes(){
    const joke=fetch (URLs)
    .then(resopons=>{
        if(!resopons.ok){
            throw new Error("Error no se ha podido obtener el chiste")
        }
        return resopons.json();
    })
    .then(data=>{
        bbdd(data.value)

    })
    .catch(error=>{
        console.error('Error:', error.status)
    })
}

//- Una función para guardar la lista de chistes en localStorage

function bbdd(Joke){
    //console.log(numJokes)
    let numJokes=localStorage.length+1;
    localStorage.setItem(`Joke${numJokes}`,JSON.stringify(Joke))//Load dato
    loadJokes()
    //console.log(numJokes)
}

//- Una función para cargar la lista de chistes desde localStorage
function loadJokes(){
    let Jokes=[];
    let idJoke=[];
    for(let i=1;i<=localStorage.length;i++){
        Jokes[i-1]=localStorage.getItem(`Joke${i}`)
        idJoke[i-1]=`Joke${i}`
    }
    console.log(Jokes)
    drawDOM(Jokes,idJoke)
}

//- Una función para renderizar la lista de chistes en el DOM
//Put in DOM the joke
function drawDOM(joke,idjoke){
    //console.log(joke)
    //console.log(idjoke)
    let input=[];
    for(let i=0;i<=idjoke.length-1;i++){
        input[i]=`<li id=${idjoke[i]}>${joke[i]}</li>
    <button id=buttDelet>Eliminar Chiste</button>
    `;
    }
    //console.log(input);
    putJoke.innerHTML="";//Limpia pantalla
    putJoke.innerHTML+=input.join("");//Refreca todo
    const buttDelet=document.getElementById("buttDelet")
    //console.log(buttDelet)
    buttDelet.addEventListener('click',()=>{
        putJoke.innerHTML="";//Limpia pantalla
    })
}


//- Manejador de click en los botones de eliminación







/*
listaUsuarios.innerHTML = ""
jsonUsuarios.forEach(usuario => {
  const { name, age} = usuario // Destructuring
  listaUsuarios.innerHTML += `
  <h2>Nombre: ${name}</h2>
  <p>Edad: ${age}</p>
*/