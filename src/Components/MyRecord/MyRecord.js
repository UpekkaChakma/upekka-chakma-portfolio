import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const MyRecord = () => {
    const myRecords = [
        {
            number: '2+',
            details: 'years experience'
        },
        {
            number: '20+',
            details: 'Projects'
        },
        {
            number: '70k+',
            details: 'lines of Codes'
        },
        {
            number: '19',
            details: 'Technologies Learned'
        },
    ]
    return (
        <MDBContainer breakpoint="xl" className='p-3 vh-100 d-flex flex-column justify-content-center align-items-center'>
            <MDBRow className='d-flex flex-column mb-md-5'>
                <div className="d-flex justify-content-center ">
                    <div className="d-inline-block">
                        <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                            My Dev Records
                            <h4 className="section-title-alt font-700">Numbers</h4>
                        </h4>
                    </div>
                </div>
                <div>
                    <h6 className="text-white text-center p-2">
                        My web development journey estimated records
                    </h6>
                </div>
            </MDBRow>
            <MDBRow>
                {
                    myRecords.map(record => (
                        <MDBCol size="6" md="3" className=''>
                            <div className='mx-auto h-100 p-3 d-flex flex-column align-items-center'>
                                <h4 className="font-600 text-white">{record.number}</h4>
                                <h6 className="font-400 text-center gradient-4 gradient-color-text">{record.details}</h6>
                            </div>
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default MyRecord