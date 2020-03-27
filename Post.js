
import React, { Component } from 'react';
import './Post'


  
  class Post extends Component {
    createTasks(item){
      return <li key={item.key}>{item.text}hi</li>
    }
    render() {
      var todoitem = this.props.items;
      var  listItems = todoitem.map(this.createTasks)
      return ( 
        <div>
          {listItems}hi
        </div>
       );
    }
  }
   
  export default Post;