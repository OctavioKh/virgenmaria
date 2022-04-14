import React from "react";

export default class Navbarx extends React.Component{


render() {
    return ( 

        <nav className="nav nav-pills flex-column flex-sm-row borde">
      <a className="flex-sm-fill text-sm-center nav-link navi borde" href="#">     <span className="logo  ">Virgen  Maria</span></a>  
  <a className="flex-sm-fill text-sm-center nav-link navi borde" href="#">Música</a>
  <a className="flex-sm-fill text-sm-center nav-link navi borde" href="#">NFT</a>
  <a className="flex-sm-fill text-sm-center nav-link navi borde" href="#">Ig</a>
  <a className="flex-sm-fill text-sm-center nav-link navi borde" href="#">Archivo</a>
  <a className="flex-sm-fill text-sm-center nav-link navi borde" href="#" tabindex="-1" aria-disabled="true">Contacto</a>
</nav>
    )
}

}