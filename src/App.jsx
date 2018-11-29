import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Flow from "./components/flow";
import CheckoutForm from './components/checkoutform';
import {Elements, StripeProvider} from 'react-stripe-elements';

import {BrowserRouter, Route} from 'react-router-dom';


class Home extends Component {
  state = {
    modalVisible: false
  };
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  render() {
    return (
      <div className="App">
        <Header> </Header>{" "}
        <Content posterClickHandler={this.toggleModal}> </Content>{" "}
        <Footer> </Footer>{" "}
        <Flow visible={this.state.modalVisible} closeHandler={this.toggleModal}>
          {" "}
        </Flow>{" "}
      </div>
    );
  }
}

class StripePage extends Component {
  render(){
    return(

      <div className="App">
      <Header> </Header>{" "}
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                  <div className="example">
                    <h1>React Stripe Elements Example</h1>
                    <Elements>
                      <CheckoutForm />
                    </Elements>
                  </div>
                </StripeProvider>
    
      <Footer> </Footer>{" "}
    </div>

      );
  }
}


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/'  render={() => (
            <Home />
          )}/>
          <Route exact={true} path='/pay' render={() => (
                  <StripePage></StripePage>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
