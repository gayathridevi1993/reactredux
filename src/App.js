import React, { Component } from 'react';
import './App.css';
import pic1 from './images/1.jpeg'

class App extends Component {
  render() {
    return (
     <div>
      <div class="form-group">
               
                <div class="input-group">
                    <input type="text" class="form-control"
                           placeholder="Search" id="inputGroup"/>
                    <span class="input-group-addon">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
            </div>
      <div className="App">
        
      <div class="flex-container">
 
 
 <div>
 <input type="checkbox" className="checkbox" /><br />
 <figure>
 <img src={pic1} id="imagealign" /><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>
 <div>
  <input type="checkbox" class="checkbox" /><br />
 <figure>
 <img src={pic1}/><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>
 <div>
 <input type="checkbox" class="checkbox" /><br />
 <figure>
 <img src={pic1}/><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>  
 <div>
 <input type="checkbox" class="checkbox" /><br/>
 <figure>
 <img src={pic1}/><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>
 
</div>
      </div>

        
        <div class="flex-container">
 
 
 <div>
 <input type="checkbox" className="checkbox" /><br />
 <figure>
 <img src={pic1} /><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>
 <div>
  <input type="checkbox" class="checkbox" /><br />
 <figure>
 <img src={pic1}/><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>
 <div>
 <input type="checkbox" class="checkbox" /><br />
 <figure>
 <img src={pic1}/><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>  
 <div>
 <input type="checkbox" class="checkbox" /><br/>
 <figure>
 <img src={pic1}/><br />
 <figcaption class="figcaption">h1.jpeg</figcaption>
 </figure>
 </div>
 
</div>
      </div>
      
    );
  }
}

export default App;
