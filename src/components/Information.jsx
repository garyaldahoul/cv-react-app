import React from "react";

const Information =()=>{

    return(
        <>
        <section id="content-section">
            <img src="https://via.placeholder.com/200x200/000?" alt="My_image" />
          <div className="contact">
            
            <h2>CONTCT</h2>
            <div className="email">
              <i className="fa fa-envelope"></i
              ><a href="mailto: gary.gds@gmail.com"> gary.gds@gmail.com</a>
            </div>
            <div><i className="fa fa-phone"></i>
              <a href="tel:+46765571778">SW +46 765571778 </a>
            </div>
            <div><i className="fab">&#xf0e1; </i> Linkedin</div>
            <div><i className="fas fa-map-marker-alt"></i> Lund, Sweden</div>
          </div>
        </section>
        </>
    )
}

export default Information;