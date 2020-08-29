const peticion = fetch("http://52.146.51.69:9010/api-gateway/cliente/cliente");

peticion
.then( resp => resp.json() )
.then( ({data}) => {
    console.log(data[0].tipoSession);
}) 

