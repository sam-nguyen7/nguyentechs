import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Content, Footer } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header className="header-color" scroll> 
          <Link to="/"><img className="logo" src={logo} alt="Logo"/></Link>
          </Header>  

          <Content>
            <div className="page-content" />
            <Main/>

            <Footer>
                <h1>End</h1>
            </Footer>
          </Content>
          
        </Layout>
      </div>
    );
  }
}

export default App;
