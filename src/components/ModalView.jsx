import React, { useRef, useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Modal() {
    return(
        <>
        <h3>안녕하세요123</h3>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true} modules={[navigation]}
        ></Swiper>
        <ModalBody></ModalBody>
        </>
    )
}
function ModalBody() {
    
    return(
        <>
        <p className="myP">Lorem ipsum dolor sit amet.</p>
        </>
    )
}

export default Modal;