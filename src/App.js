

import './App.css';
import photoOne from './photo1.jpg';
import photoTwo from './photo2.jpg';

import { TimeManager } from './TimeManager';


 function App() {
  return (
    <div className='App'>
<div className="container">
  <h1>Time Manager</h1>

</div>
      <div className="container">
        <img src={photoOne}alt='picOne'width='250px'/>
      </div>

      <div className="container">
      <TimeManager/>
      </div>


      <div className="container">
        <img src={photoTwo}alt='picTwo'width='250px'/>
      </div>
    </div>
  );
}

export default App;
