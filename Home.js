
import React, { Component } from 'react';
import './Home.css';
import Post from './Post'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          items:[],
          text:'',
          key:''
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
      }

      addItem(e){
        e.preventDefault();
        const newItem = {
          title: this.state.text,
          key:this.state.key
        }
        const updatedItems = [...this.state.items, newItem];
          this.setState({
            items: updatedItems,
            text:'',
            key:''  
          })
        }

      handleInput(e){
        this.setState({
          text: e.target.value,
          key: Date.now()
        })
      }

      render() { 
        return (
            <div className="Home-main">
              <div className="Home-body">
               <h1>{this.state.title}</h1>
                  <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Name" value= {this.state.text} onChange={this.handleInput}/>
                    <button type="submit">Submit</button>
                  </form>
                <Post items={this.state.items} />
              </div>
            </div>
          )
       }
    }
 
export default Home;