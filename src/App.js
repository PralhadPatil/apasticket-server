import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Flow from './components/flow';

class App extends Component {
  state = {
    modalVisible : false
  }
  toggleModal = () => {
    this.setState({
      modalVisible : !this.state.modalVisible
    });
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <Content posterClickHandler={this.toggleModal}></Content>
        <Footer></Footer>
        <Flow visible={this.state.modalVisible} closeHandler={this.toggleModal} ></Flow>
      </div>
    );
  }
}

export default App;
