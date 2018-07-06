import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                            <h1>Software Developer</h1>

                            <hr/>
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