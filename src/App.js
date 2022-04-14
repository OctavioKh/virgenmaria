// import logo from './logo.svg';
import './App.css';
import MainPage2 from './Main2';
import status from './assets/img/status-02.svg';

function App() {
  return (
   
<>

<div className="iphone-x">
  {/* <p className='carrier'>Virgen Maria </p> */}
  <div className="container-head">
  <div className="item-head">Virgen María</div>
  <div className="item-head status1"><img src={status} /> </div>
  
</div>


  <i>Speaker</i>
  <b>Camera</b> 
 
<MainPage2/>

</div>




</>
  );
}

export default App;
