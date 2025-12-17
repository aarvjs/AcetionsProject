import React from "react";
import { useNavigate } from "react-router-dom";
import NEW from '../assets/d.png';

const stylesheet = `
 

  .page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 30px;
  }

 /* TITLE WITH LEFT LINE */
.title-wrap {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 50px;
}

.title-line {
  width: 4px;
  height: 95px;
  background-color: #2da3df;
  margin-top: 4px;
}

/* Existing */
.title {
  margin-bottom: 0;
}

.title small {
  color: #2da3df;
  font-size: 12px;
  letter-spacing: 1px;
}

.title h2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 6px;
  line-height: 1.3;
}


  /* GRID */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }

  .product-card1 {
    border: 1px solid #ededed;
    padding: 30px;
    background: #fff;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .product-card1:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    transform: translateY(-4px);
  }

  .product-card1 img {
    width: 100%;
    height: 260px;
    object-fit: contain;
  }

  .product-card1 p {
    margin-top: 16px;
    font-size: 12px;
    letter-spacing: 1px;
  }

  /* RESPONSIVE (IMAGE JAISE STACK) */
  @media (max-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .products-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .product-card1 {
      padding: 24px;
    }

    .product-card1 img {
      height: 320px;
    }
  }
    @media (max-width: 600px) {
  .title-line {
    height: 50px;
  }
}

`;

const DesktopProducts = () => {

  const navigate = useNavigate();


  const handleClick = () => {
    // navigate(`/products/${name.toLowerCase()}`);
    console.log("Clicked product:");
    navigate(`/product-detail`);
  };

  return (
    <>
      <style>{stylesheet}</style>

      <div className="page">
        {/* TITLE */}
        <div className="title-wrap">
  <div className="title-line"></div>

  <div className="title">
    <small>PRODUCTS</small>
    <h2>
      PRODUCTS FOR YOUR <br />
      BEST FRIENDS
    </h2>
  </div>
</div>


        {/* GRID */}
        <div className="products-grid">

          <div className="product-card1" onClick={() => handleClick("BRIDLE")}>
            <img src={NEW} />
            <p>BRIDLE</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("HALTER")}>
            <img src={NEW} />
            <p>HALTER</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("REINS")}>
            <img src={NEW} />
            <p>REINS</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("BELT")}>
            <img src={NEW}  />
            <p>BELT</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("BREECHES")}>
            <img src={NEW} />
            <p>BREECHES</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("BOOTS")}>
            <img src={NEW} />
            <p>BOOTS</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("BROWBAND")}>
            <img src={NEW} />
            <p>BROWBAND</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("SADDLE PAD")}>
            <img src={NEW} />
            <p>SADDLE PAD</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("COLLAR")}>
            <img src={NEW} />
            <p>COLLAR</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("GIRTH")}>
            <img src={NEW} />
            <p>GIRTH</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("BREASTPLATE")}>
            <img src={NEW} />
            <p>BREASTPLATE</p>
          </div>

          <div className="product-card1" onClick={() => handleClick("SADDLE")}>
            <img src={NEW} />
            <p>SADDLE</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default DesktopProducts;
