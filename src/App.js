import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Content, Footer, Tooltip, Icon, HeaderRow } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';
import samName3 from './img/samName3.svg';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
          <Header className="header-color" scroll> 

            <HeaderRow><Link to="/"><img className="logo" src={samName3} alt="Logo"/></Link>

            <Tooltip label="Follow" position="left" align="right">
                <Icon name="arrow_back" />
            </Tooltip></HeaderRow>
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
