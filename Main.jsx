import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import EpicMenu from './EpicMenu';
import Foot from "./Foot";

class App extends Component {
  render() {
    let links = [
    
      { label: 'About', link: '#about' },
      { label: 'services', link: '#services' },
      { label: 'Contact Us', link: '#contact-us' },
    ];

    return (
        <React.Fragment>
      <div className="container center">
        <EpicMenu links={links} />
      </div>
      <div>
      <h1>Page Heading</h1>
      </div>
      <div className="row1">
         <div className="r1"></div> 
         <div className="txt">
          <h2>Project 1</h2>
          </div>
          <div className="p1">
         <p>Lorem ipsum dolo
             r sit amet consectetur adipisicing<br/> elit.
         Sit quibusdam excepturi mollitia quasi.<br/>
          Accusantium praesentium qui vel ducimus
            commodi<br/> provident mollitia voluptas dolorem,
             cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
             </div>
             
         <div className="r2"></div>
         <div className="txt1">
         <h2>Project 2</h2>
         </div>
         <div className="p2">
         <p>Lorem ipsum dolo
             r sit amet consectetur adipisicing<br/> elit.
         Sit quibusdam excepturi mollitia quasi.<br/>
          Accusantium praesentium qui vel ducimus
            commodi<br/> provident mollitia voluptas dolorem,
             cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
             </div>
         <div className="r3"></div>
         <div className="txt2">
         <h2>Project 3</h2>
         </div>
         <div className="p3">
         <p>Lorem ipsum dolo
             r sit amet consectetur adipisicing<br/> elit.
         Sit quibusdam excepturi mollitia quasi.<br/>
          Accusantium praesentium qui vel ducimus
            commodi<br/> provident mollitia voluptas dolorem,
             cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
             </div>
      </div>

      <div className="row2">
        
            <div className="r21"></div>
            <div className="txt3">
             <h2>Project 4</h2>
             </div>
             <div className="p4">
         <p>Lorem ipsum dolo
             r sit amet consectetur adipisicing<br/> elit.
         Sit quibusdam excepturi mollitia quasi.<br/>
          Accusantium praesentium qui vel ducimus
            commodi<br/> provident mollitia voluptas dolorem,
             cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
             </div>
        
            <div className="r22"></div>
            <div className="txt4">
             <h2>Project 5</h2>
             </div>
             <div className="p5">
         <p>Lorem ipsum dolo
             r sit amet consectetur adipisicing<br/> elit.
         Sit quibusdam excepturi mollitia quasi.<br/>
          Accusantium praesentium qui vel ducimus
            commodi<br/> provident mollitia voluptas dolorem,
             cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
             </div>
            <div className="r23"></div>
            <div className="txt5">
             <h2>Project 6</h2>
             </div>
             <div className="p6">
         <p>Lorem ipsum dolo
             r sit amet consectetur adipisicing<br/> elit.
         Sit quibusdam excepturi mollitia quasi.<br/>
          Accusantium praesentium qui vel ducimus
            commodi<br/> provident mollitia voluptas dolorem,
             cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
             </div>
            </div>

            <div className="row3">
        
        <div className="r31"></div>
        <div className="txt6">
         <h2>Project 7</h2>
         </div>
         <div className="p7">
     <p>Lorem ipsum dolo
         r sit amet consectetur adipisicing<br/> elit.
     Sit quibusdam excepturi mollitia quasi.<br/>
      Accusantium praesentium qui vel ducimus
        commodi<br/> provident mollitia voluptas dolorem,
         cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
         </div>
    
        <div className="r32"></div>
        <div className="txt7">
         <h2>Project 8</h2>
         </div>
         <div className="p8">
     <p>Lorem ipsum dolo
         r sit amet consectetur adipisicing<br/> elit.
     Sit quibusdam excepturi mollitia quasi.<br/>
      Accusantium praesentium qui vel ducimus
        commodi<br/> provident mollitia voluptas dolorem,
         cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
         </div>
        <div className="r33"></div>
        <div className="txt8">
         <h2>Project 9</h2>
         </div>
         <div className="p9">
     <p>Lorem ipsum dolo
         r sit amet consectetur adipisicing<br/> elit.
     Sit quibusdam excepturi mollitia quasi.<br/>
      Accusantium praesentium qui vel ducimus
        commodi<br/> provident mollitia voluptas dolorem,
         cumque fugit eligendi <br/>laudantium at repudiandae nemo!</p> 
         </div>
        </div>
            <Foot/>
      </React.Fragment>
    );
  }
}

export default App;