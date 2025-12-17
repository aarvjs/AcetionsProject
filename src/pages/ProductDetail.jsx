import React from "react";
import img1 from "../assets/b.png";
import img2 from "../assets/C.png";
import img3 from "../assets/d.png";

const stylesheet = `
  .Baharpage {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .page {
    width: 100%;
    max-width: 1400px;
    padding: 70px 32px;
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 40px;
  }

  .line {
    width: 5px;
    height: 60px;
    background: #2da3df;
  }

  .text small {
    color: #2da3df;
  }

  .text h1 {
    font-size: 36px;
    font-weight: 700;
    margin-top: 6px;
  }

  .products {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .box {
    width: 100%;
    height: 100px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border: 1px solid #e0e0e0;
  }

  .box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  /* Make sure no gaps around images */
  .box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: transparent;
  }

  /* RESPONSIVE */
  @media (max-width: 1100px) {
    .products {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .box {
      height: 90px;
    }
  }

  @media (max-width: 480px) {
    .products {
      grid-template-columns: 1fr;
    }
    
    .box {
      height: 80px;
    }
  }
`;

const ProductDetails = () => {
  return (
    <>
      <style>{stylesheet}</style>

      <div className="Baharpage">
        <section className="page">

          <div className="heading">
            <div className="blue-line"></div>
            <div className="text">
              <small>PRODUCTS</small>
              <h1>BRIDLE</h1>
            </div>
          </div>

          <div className="products">
            <div className="box"><img src={img1} alt="Product 1" />
            </div>
            <div className="box"><img src={img2} alt="Product 2" />
            </div>
            <div className="box"><img src={img3} alt="Product 3" />
            </div>
            <div className="box"><img src={img1} alt="Product 4" />
            </div>

            <div className="box"><img src={img2} alt="Product 5" />
            </div>
            <div className="box"><img src={img3} alt="Product 6" />
            </div>
            <div className="box"><img src={img1} alt="Product 7" />
            </div>
            <div className="box"><img src={img2} alt="Product 8" />
            </div>

            <div className="box"><img src={img3} alt="Product 9" />
            </div>
            <div className="box"><img src={img1} alt="Product 10" />
            </div>
            <div className="box"><img src={img2} alt="Product 11" />
            </div>
            <div className="box"><img src={img3} alt="Product 12" />
            </div>

            <div className="box"><img src={img1} alt="Product 13" />
            </div>
            <div className="box"><img src={img2} alt="Product 14" />
            </div>
            <div className="box"><img src={img3} alt="Product 15" />
            </div>
            <div className="box"><img src={img1} alt="Product 16" />
            </div>

            <div className="box"><img src={img2} alt="Product 17" />
            </div>
            <div className="box"><img src={img3} alt="Product 18" />
            </div>
            <div className="box"><img src={img1} alt="Product 19" />
            </div>
            <div className="box"><img src={img2} alt="Product 20" />
            </div>
            
            <div className="box"><img src={img3} alt="Product 21" />
            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default ProductDetails;
