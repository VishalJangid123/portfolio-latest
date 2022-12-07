import React, { useState } from 'react'
import "./imagegallery.css";

const ImageGallery = (galleryImages) => {

  galleryImages = galleryImages.galleryImages
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
  }

  const handleCloseModal = () => {
        setOpenModal(false);
  }

  const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
}

const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1);
}


    return (
   <div>

    { openModal && 
        <div className="slideWrap">
            <i className="uil uil-times btnClose" onClick={handleCloseModal}></i>
            <i className="uil uil-previous btnPrev" onClick={prevSlide}></i>
            <i className="uil uil-step-forward btnNext" onClick={nextSlide}></i>
            <div className="fullScreenImage">
                <img src={galleryImages[slideNumber].img} />
            </div>
        </div>
    }
   
   <div className="galleryWrap">
    {
        galleryImages != null && galleryImages.length > 1 && galleryImages.map((slide, index) => {
            return(
                <div className="single" key={index} onClick = { () => handleOpenModal(index)} >
                    <img src={slide.img} alt="" key={slide.img}/>
                </div>
            )
        })
    }
   </div>
   </div>
  )
}

export default ImageGallery