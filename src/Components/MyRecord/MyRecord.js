import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

const MyRecord = () => {
    const myRecords = [
        {
            number: '2+',
            details: 'years experience',
            delay: 800
        },
        {
            number: '20+',
            details: 'Projects',
            delay: 1300
        },
        {
            number: '70k+',
            details: 'lines of Codes',
            delay: 1700
        },
        {
            number: '19+',
            details: 'Technologies Learned',
            delay: 2200
        },
    ]
    return (
        <MDBContainer breakpoint="xl" className='p-3 vh-100 d-flex flex-column justify-content-center align-items-center' id='web-dev-journey-in-numbers'>
            <MDBRow className='d-flex flex-column mb-md-5'>
                <Fade duration={6000}>
                    <div className="d-flex justify-content-center ">
                        <div className="d-inline-block">
                            <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                                My Dev Records
                                <h4 className="section-title-alt font-700">Numbers</h4>
                            </h4>
                        </div>
                    </div>
                </Fade>
                <Flip top cascade delay={1500}>
                    <h6 className="text-white text-center p-2">
                        My web development journey estimated records
                    </h6>
                </Flip>
            </MDBRow>
            <MDBRow>
                {
                    myRecords.map((record, i) => (
                        <MDBCol size="6" md="3" key={i}>
                            <Slide cascade top delay={record.delay} duration={400}>
                                <div className='mx-auto h-100 p-3 d-flex flex-column align-items-center'>
                                    <h4 className="font-600 text-white">{record.number}</h4>
                                    <h6 className="font-400 text-center gradient-4 gradient-color-text">{record.details}</h6>
                                </div>
                            </Slide>
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default MyRecord