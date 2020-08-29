const peticion = async() => { 
    
    const response = await fetch("http://52.146.51.69:9010/api-gateway/cliente/cliente");
    const {data} = await response.json();
    data.forEach(element => {
        console.table(element);
    });
}

peticion();

