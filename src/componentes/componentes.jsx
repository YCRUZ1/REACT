function RazasGatos({nombreRaza, imagen}){
    return(
      <li className="listaOrganizado backrojo"> 
      <div className="contenedorImagen">
      <img src={imagen} alt="Esfinge"/> 
    </div>
    <span className="SubtitulosOrganizado">{nombreRaza}</span>
    </li> 
      
    );
  }

  export default RazasGatos;
  