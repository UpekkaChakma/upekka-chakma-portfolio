import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView, MDBCarouselCaption, MDBMask, MDBContainer
} from "mdbreact";
import { RxLink1 } from 'react-icons/rx';
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Carousel = ({ props }) => {
    return (
        <MDBContainer className='p-0'>
            <MDBCarousel
                activeItem={1}
                length={props.length}
                showIndicators={false}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    {

                        props.map(item => (
                            <MDBCarouselItem itemId={item.itemId} key={item.id}>
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={item.img}
                                        alt="carousel-slide"
                                        style={{ height: '425px', objectFit: 'cover' }}
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h2 className="font-500">{item.title && item.title}</h2>
                                    <h6 className="font-300 my-3" style={{ fontSize: '13px' }}>{item.secondTitle && item.secondTitle}</h6>
                                    <span className="d-flex justify-content-center">
                                        {item.features &&
                                            <ul className="">
                                                {
                                                    item.features.map(list => (
                                                        <li className='my-3 px-1 d-flex align-items-start' style={{ textAlign: 'start' }}>
                                                            <span className='mr-2 bg-white' style={{ height: '13px', width: '1px', marginTop: '5px' }}></span>
                                                            {list}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </span>
                                    <span className="d-flex justify-content-center">
                                        {item.hrefLive &&
                                            <Link
                                                to={{ pathname: item.hrefLive }}
                                                target="_blank"
                                            >
                                                <h5 className="text-white mr-3" >
                                                    <RxLink1 />
                                                </h5>
                                            </Link>}
                                        {item.hrefGithub &&
                                            <Link
                                                to={{ pathname: item.hrefGithub }}
                                                target="_blank"
                                            >
                                                <h5 className="text-white ml-2" >
                                                    <FiGithub />
                                                </h5>
                                            </Link>}
                                    </span>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        ))
                    }
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    )
}

export default Carousel