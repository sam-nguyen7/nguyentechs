import React, { Component } from 'react';
import { Grid, Cell, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col ={12}>
                        <img
                            src="http://stephanienguyen.co/images/logo_text_half.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Projects</h1>
                            <h1>About</h1>
                            <h1>Contact</h1>
                            <h1>Resume</h1>
                            <hr/>
                            <Navigation>
                                <Link to="/resume"><h1>Resume</h1></Link>
                                <Link to="/about"><h1>About</h1></Link>
                                <Link to="/projects"><h1>Project</h1></Link>
                                <Link to="/contact"><h1>Contact</h1></Link>
                            </Navigation>
                        </div>
                        
                        <div className="social-links">
                            <a href="http://google.com" rel="nooper noreferrer"target="_blank"> 
                                <i className="fa fa-linkedin-square" aria-hidden="true" /> 
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;