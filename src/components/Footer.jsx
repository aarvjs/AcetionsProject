import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-heading">
                            <span className="bar"></span>
                            <h4>GET IN TOUCH</h4>
                        </div>
                        <div className="contact-details">
                            <p className="company-name">MEHRA APPAREL</p>
                            <p><i className="fas fa-envelope"></i> sample@mehragroup.co.in</p>
                            <p><i className="fas fa-phone"></i> +91-9876543210</p>

                            <p className="company-name mt-2">EQUINE MAKERS</p>
                            <p><i className="fas fa-envelope"></i> info@mehragroup.co.in</p>
                            <p><i className="fas fa-phone"></i> +91-9876543210</p>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-heading">
                            <span className="bar"></span>
                            <h4>ABOUT MEHRA GROUP</h4>
                        </div>
                        <ul className="footer-links">
                            <li><img src="https://placehold.co/10" alt="" /> Mehra Apparel is involved in the production of Garments, specially breeches.</li>
                            <li><img src="https://placehold.co/10" alt="" /> Equine Makers is involved in Leather products.</li>
                            <li><img src="https://placehold.co/10" alt="" /> Mehra Schuhe manufactures riding boots, fashion sandals and Shoes.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; Mehra Group. All Rights Reserved.</p>
                    <p>Developed by <a href="#">Varkama Technologics Pvt. Ltd.</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
