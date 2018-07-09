import React, { Component } from 'react';
import { Grid, Cell, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col ={4}  class="centeritems mdl-grid">
                        <div>
                            <div class="mdl-layout-spacer"></div>
                                <Link to="/resume" style={{ textDecoration: 'none', color: 'white' }}><h3>Resume</h3></Link>
                                <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}><h3>About</h3></Link>
                                <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}><h3>Project</h3></Link>
                                <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}><h3>Contact</h3></Link>   
                            <div className="social-links">
                                <a href="http://google.com" rel="nooper noreferrer"target="_blank"> 
                                    <i className="fa fa-linkedin-square" aria-hidden="true" /> 
                                </a>
                            </div>                                  
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;