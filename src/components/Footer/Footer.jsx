import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer_container container">
        <h1 className="footer__title">Vishal Jangid</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#contact" className="footer__link">Contact</a>
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

        <a href="https://line.me/ti/p/54ecpXAs48" rel="noreferrer" className="footer__social-link" target="_blank">
        <i className="uil uil-line"></i>
        </a>
        

        </div>


        <span className="footer__copy">Last updated: 8 Dec 2022 | Views:<div id="visit__footer"></div>  </span>
    </div>
   </footer>
  )
}

export default Footer