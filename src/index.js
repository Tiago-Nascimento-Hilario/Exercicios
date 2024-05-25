console.log(axios)

// Request - jasonplaceholder

const getData = async ()=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
getData()

// Imprimindo dados
const container = document.querySelector('#dados-usuarios-container');

const renderizaDados =  async () =>{
    
    const data = await getData();
    
    data.forEach(usuario => {
        
        const divElemento = document.createElement('div');
        const nomeElemento = document.createElement('h2');
        const emailElemento = document.createElement('p');

        const linhaElemento = document.createElement('hr');
        
        nomeElemento.textContent = usuario.name;
        emailElemento.textContent = usuario.email;
        divElemento.appendChild(nomeElemento);
        divElemento.appendChild(emailElemento);
        divElemento.appendChild(linhaElemento);

        container.appendChild(divElemento);

    });
}

renderizaDados();