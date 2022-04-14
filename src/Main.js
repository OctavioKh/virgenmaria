import React from "react";import Navbarx from './Navbar';



export default class MainPage extends React.Component{
render() {
    return ( 
        <>

        <div className="borde">
        <article  >
    <marquee  behavior="scroll" direction="right">
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex 
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex 
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex
    Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex Blex
    Blex Blex Blex Blex </marquee>
    </article>
    <Navbarx className="borde"/>
    <div className="row animate__animated animate__fadeIn">
      
      <div className="col-md-5 colu1  "> <span className='texto-colu1'>
      <h1 className="h1-col1">Berlin</h1>
<ul><li><h2>Fecha: 66/66/66</h2></li></ul>    
    </span></div>
      <div className="col-md-7 colu2  ">  
      <div className='cont-foto-1'>  <img className='foto-1'
        // src="https://lastfm.freetls.fastly.net/i/u/ar0/f737828bee1d6d2dc3b74a0fa8a90e0d" 
        src="/"
        alt=""/>
    </div>
    
    </div>
    </div>
    
    </div>
    
    
      <div>
      <main>
      </main>
      </div>
      
    </>
    )
}

}