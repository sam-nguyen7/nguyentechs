import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import Resume2018 from '../Resume2018.pdf'

class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages })
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='resume-grid'>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            /> 
                        </div>

                        <h2 style={{paddingTop: '2em'}}> Sam Nguyen </h2>
                        <h4 style={{color: 'grey'}}> Programmer </h4>
                        <hr style={{borderTop: '2px solid red', width: '50%'}} />
                        <p> bible verse or quote here </p>
                    </Cell>
                    <Cell className="resume-right-col" col={7}>
                        <Document
                            file = {Resume2018}
                            onLoadSuccess={this.onDocumentLoad}
                            loading = "Please wait while PDF loads"
                            width = '400'
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;