import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
        <Header className="header-color" title={<img src={logo} alt="Logo"/>} scroll> 
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Project</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
