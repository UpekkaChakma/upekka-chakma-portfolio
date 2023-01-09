import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const MyRecord = () => {
    const myRecords = [
        {
            number: '1.7+',
            details: 'years experience'
        },
        {
            number: '20+',
            details: 'Projects'
        },
        {
            number: '10k+',
            details: 'lines of Codes'
        },
        {
            number: '19',
            details: 'Technologies Learned'
        },
    ]
    return (
        <MDBContainer breakpoint="xl" className='p-3'>
            <MDBRow className='p-3 d-flex flex-column'>
                <h4 className=" d-inline-block font-600 gradient-color-text gradient-1 text-center mx-auto" style={{ maxWidth: "430px" }}>Numbers</h4>
                <h6 className="font-400 text-white text-center w-100 mx-auto lh-md my-3" style={{ maxWidth: "430px" }}>My Web Development Journey so far in numbers</h6>
            </MDBRow>t
            <MDBRow>
                {
                    myRecords.map(record => (
                        <MDBCol size="6" md="3" className='p-3'>
                            <div className='mx-auto h-100 p-3 d-flex flex-column justify-content-center align-items-center aspect-ratio'>
                                <h2 className="font-600 text-white">{record.number}</h2>
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