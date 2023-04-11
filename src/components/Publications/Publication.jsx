import React from 'react';
import "./publication.css";
const Publication = () => {
  return (
    <section className="contact section" id="publication">
    <h2 className="section__title">Published Articles</h2>
    <span className="section__subtitle">My published research articles</span>
    
    <div className="container">
        <div className='publication__content'>
            <a href='https://doi.org/10.1145/3489849.3489915' target="_blank" rel="noopener noreferrer" >
            <div className='publication__card'>
            
            <span className="publication__card-header">
                Fishtank Sandbox: A Software Framework for Collaborative Usability Testing of Fish Tank Virtual Reality Interaction Techniques
            </span>
            <p>VRST '21: Proceedings of the 27th ACM Symposium on Virtual Reality Software and Technology</p><p>December 2021</p>
            <p><b>Authors:</b> Vishal Jangid, Sirisilp Kongsilp</p>
            <p><b>DOI:</b> <a href="https://doi.org/10.1145/3489849.3489915">https://doi.org/10.1145/3489849.3489915</a></p>            
            </div>
            </a>
        </div>
   
   
</div>
    
    </section>
    
    
    
  )
}

export default Publication