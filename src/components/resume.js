import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
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
                        <center><hr style={{borderTop: '2px solid red', width: '50%', textAlign: 'center'}} /></center>
                        <Button primary style={{fontSize: '1.5em', height: '40px', width: '300px'}}>Download My Resume</Button>
                    </Cell>
                    <Cell col={7}>
                        <center><div style={{width: '612px', height: '792px'}} className="resume-right-col"> 
                            <Document
                                file = {Resume2018}
                                onLoadSuccess={this.onDocumentLoad}
                                loading = "Please wait while PDF loads."
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </div></center>

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;