import React, { Component } from 'react';
import Post from './Post'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[],
       currentItem:{
         text:'',
         key:''
       }
            
          }
          console.log('hi',this.state.items)
         
    }

    render() { 
        
        return ( 
            
            <div>
                
                <p>hi{this.state.items.text}  </p>
            <Post items={this.state.items} />

            </div>
         )
    }
}
 
export default Add;