
import React, { Component } from 'react';
import './Post'
import  Add from './Add';

  
  class Post extends Component {
    

    render() { 
      const {items} =this.props
        return ( 
            <div>
               
                {
                  items.map(text =>{
                    return(
                      <Add key={text.key}
                      title={text.title}
                     />
                    )
                  }
                    )
                }
            </div>
         );
    }
  }
   
  export default Post;