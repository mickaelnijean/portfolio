import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentView  from './component/currentview/current-view'
import Menu  from './component/menu/menu'
import { MyFooter } from './component/footer/footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const views = [
  {key:"presentation", row:1, url :"./montain.png"},
  {key:"interest", row:2, url :"./water.png"},
  {key:"whyme", row:3, url :"./montain.png"},
  {key:"portfolio", row:4, url :"./water.png"},
  {key:"blockchain", row:5, url :"./montain.png"},
  {key:"chatbot", row:6, url :"./water.png"},
  {key:"contact", row:7, url :"./montain.png"}
]

class App extends Component {
  render() {
    return (
      <div className="ot">
        <Router>
        <div>
          <Route exact path="/" component={Menu}/>
        </div>
      </Router>
        {
          views.map( ({key,row,url})=>(
            <CurrentView key={key} row ={row} url={url} anchor={key}/>
          ))
        }
        <MyFooter />
      </div>
    );
  }
}

export default App;
