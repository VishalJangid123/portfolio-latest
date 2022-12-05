import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer_container container">
        <h1 className="footer__title">Vishal</h1>

        <ul className="footer__list">
            <li>
                <a href="" className="footer__link">About</a>
            </li>

            <li>
                <a href="" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="" className="footer__link">Contact</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://github.com/VishalJangid123" rel="noreferrer" className="footer__social-link" target="_blank">
        <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/vishal-jangid-879b85108/" rel="noreferrer" className="footer__social-link" target="_blank">
        <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.instagram.com/quantum_free_particle/" rel="noreferrer"  className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/vishal.jangid123" rel="noreferrer" className="footer__social-link" target="_blank">
        <i className="bx bxl-facebook" color="#fff"></i>
        </a>
        

        </div>


        <span className="footer__copy">Made by Vishal </span>
    </div>
   </footer>
  )
}

export default Footer