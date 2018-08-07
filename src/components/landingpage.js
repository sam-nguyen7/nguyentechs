import React, { Component } from 'react';
import { Grid, Cell, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col ={4}  class="centeritems mdl-grid ">
                        <div>
                            <div className="mdl-layout-spacer"></div>
                                <Link to="/resume" style={{ textDecoration: 'none', color: 'white' }}><h3>Resume</h3></Link>
                                <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}><h3>About</h3></Link>
                                <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}><h3>Projects</h3></Link>
                                <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}><h3>Contact</h3></Link> 
                        </div>
                    </Cell>
                    <Cell col = {12}>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/samuelthanh/" rel="nooper noreferrer"target="_blank"> 
                                    <i className="fa fa-linkedin" aria-hidden="true" /> 
                                </a>
                                <a href="https://github.com/sam-nguyen7" rel="nooper noreferrer"target="_blank"> 
                                    <i className="fa fa-github" aria-hidden="true" /> 
                                </a>
                                <a href="https://www.instagram.com/sam_nguyen7/" rel="nooper noreferrer"target="_blank"> 
                                    <i className="fa fa-instagram" aria-hidden="true" /> 
                                </a>
                                <a href=" https://www.facebook.com/sam.nguyen.1234" rel="nooper noreferrer"target="_blank"> 
                                    <i className="fa fa-facebook" aria-hidden="true" /> 
                                </a>
                            </div> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;