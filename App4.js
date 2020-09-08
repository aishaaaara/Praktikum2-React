import React, {Component} from 'react';  
import './App.css';  
import Alert2 from './Components/Alert2';  
// import element Alert yang telah dibuat  
  
class App4 extends Component {  
  render(){  
       // berada pada function render  
        return (  
          <div className="App container col-sm-6">  
            <Alert type="danger" header="Fatal Error">  
              Ini adalah alert dengan tipe danger  
            </Alert>  
            <Alert type="success" header="Berhasil">  
              Ini adalah alert dengan tipe success  
            </Alert>  
            <Alert type="warning" header="Warning">  
              Ini adalah alert dengan tipe warning  
            </Alert>  
          </div>  
        );  
      }
}
export default App4;  