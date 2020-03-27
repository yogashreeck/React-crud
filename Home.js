
import React, { Component } from 'react';
import './Home.css'
// import Post from './Post'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           title : 'Home page',
           items:[],
      currentItem:{
        text:'',
        key:''
      }
           
         }
         this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem)
       
        if(newItem.text !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            text:'',

            key:''
          }
          
        })
        this.props.history.push('/Add')
        }
        console.log(this.state.items)
      }
      handleInput(e){
        this.setState({
          currentItem:{
            text: e.target.value,
            key: Date.now()
          }
        })
      }
    render() { 
        return (
            <div className="Home-main">
                <div className="Home-body">
               <h1>{this.state.title}</h1>
               <form onSubmit={this.addItem}>
                   
                   <input type="text" placeholder="Name" value= {this.state.currentItem.text} onChange={this.handleInput}/>
                   <button type="submit">Submit</button>
               </form>
           
               {/* <p>{this.state.items.text}</p>
             
            <Post items={this.state.items} /> */}
               </div>
              
            </div>
        )
    }
}
 
export default Home;