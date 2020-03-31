import React, { Component } from 'react';


class Add extends Component {

    render() { 
        const {  title} = this.props;
       
        return ( 
          <div>
            <ul>
              <li>{title}</li>
            </ul>
          </div>
         );
      }
    }
     

 
export default Add;