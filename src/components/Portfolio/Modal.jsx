import ImageGallery from "./ImageGallery";

export default function Modal({ closeModal, data }) {

    console.log("data" + data);
    return (
      <div className="portfolio__modal">
        <div className="portfolio__modal-content">
        <i className="uil uil-times portfolio__modal-close" onClick={() => closeModal()}> </i>
            
          <div className="modal__body">
            <h3 className="portfolio__modal-title">
            {data.title}
            </h3>
            <div>
                <span className="techLabel">unity</span>

            </div>
            <p className="portfolio__modal-desc">
                {data.desc}
            </p>
            <ImageGallery galleryImages={data.images} />
          </div>
          <div className="modal__footer">
            <p>Wanna put your business out there ?</p>
            <button className="btn btn--main">{data.name}</button>
          </div>
        </div>
      </div>
    );
  }