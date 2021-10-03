import RazasGatos from "../componentes/componentes";
import persa from './imagenes/persa.jpg';
import bengala from './imagenes/bengala.jpg';
import British from './imagenes/BritishShorthair.jpg';
import MaineCoon from './imagenes/MaineCoon.jpg';
import siames from './imagenes/siamés.jpg';
import esfinge from './imagenes/esfinge.jpg';

function index(){
    return   (
   
<div>
           <header></header>
    
           <ul className="navbar">
          
    
    
            <li> <img className="logo" src="./gato.png" alt="imagen"/></li>
            
            
          <li>  
            <div className="busqueda"> <input placeholder="Buscar en CaTDore"/> 
              <i className="fas fa-search button iconobusqueda"></i>  
            </div > 
            </li>
            
            <li> <button className="button mainbutton" >  Nueva publicacion</button> </li>
            <li> <button className="button mainbutton" > Especial Favoritos</button> </li>
          
          
            <li> <button className="button secundarybutton" >Iniciar Sesion</button></li>
    
             </ul>
    
        <main>
          <section>
            <h1> MUNDO GATUNO </h1>
            <h2>Razas de gatos</h2>
            <ul className="contenedorOrganizado">
              <RazasGatos nombreRaza="Persa" imagen={persa}/>
              <RazasGatos nombreRaza="Bengala" imagen={bengala}/>
              <RazasGatos nombreRaza="Maine Coon"imagen={MaineCoon}/>
              <RazasGatos nombreRaza="British Shorthair"imagen={British}/>
              <RazasGatos nombreRaza="Siamés" imagen={siames}/>
              <RazasGatos nombreRaza="Esfinge"imagen={esfinge}/>
            </ul>
          </section>
          <section></section>
        </main>
        <footer> </footer>
    
       
</div>
    
      );
}

export default index;
