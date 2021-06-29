import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from "react-slick";
import { Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper } from './styles';


const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0); //slide index 번호
    return (
        <Overlay>
            <Global />
            <Header>
                <h2>image detail</h2>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0} beforeChange={(slide) => setCurrentSlide(slide)} infinite arrows={false} slidesToShow={1} slidesToScroll={1}
                    >
                        {images.map((img) => (<ImgWrapper key={img.src}>
                            <img src={img.src} alt={img.src} />
                        </ImgWrapper>))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {` `}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    )
}

ImagesZoom.protoTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;