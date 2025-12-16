import React from 'react';
import Briddle from '../assets/bridle.png';

const ProductsSection = () => {
    return (
        <section className="products-section">
            <div className="container">
                <div className="section-header">
                    <span className="blue-line"></span>
                    <div>
                        <h4 className="sub-title-small">PRODUCTS</h4>
                        <h2 className="section-title">PRODUCTS FOR YOUR<br />BEST FRIENDS</h2>
                    </div>
                </div>

                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-image">
                            <img src={Briddle} alt="Bridle" />
                        </div>
                        <h3>BRIDLE</h3>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={Briddle} alt="Halter" />
                        </div>
                        <h3>HALTER</h3>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={Briddle} alt="Reins" />
                        </div>
                        <h3>REINS</h3>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={Briddle} alt="Belt" />
                        </div>
                        <h3>BELT</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
