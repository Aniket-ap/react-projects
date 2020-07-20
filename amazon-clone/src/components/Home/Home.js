import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://www.amazon.in/images/G/31/img20/Wireless/Xiaomi/Mi_days/June/Updated/D14588853_IN_WLME_Xiaomi_Landing_Page_DesktopTallHero_1500x600._CB430441142_.jpg"
        alt="banner"
      />

      {/* Product id, title, price, rating, image */}
      <div class="home__row">
        <Product
          id="12341"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          price={199900}
          rating={5}
          image="https://www.amazon.in/images/I/71L2iBSyyOL._SL1500_.jpg"
        />

        <Product
          id="12342"
          title="Microsoft Surface Laptop 3 Intel Core™ i5 10th Gen 13.5 inch Touchscreen Laptop (8GB/128GB SSD/Windows 10 Home/Integrated Graphics/Platinum/1.265kg), VGY-00021"
          price={101990}
          rating={4}
          image="https://www.amazon.in/images/I/61cuElU6PaL._SL1200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12343"
          title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
          price={117000}
          rating={4}
          image="https://www.amazon.in/images/I/61ers6OzvUL._SL1024_.jpg"
        />

        <Product
          id="12344"
          title="Samsung Galaxy S20 (Cloud Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={70000}
          rating={4}
          image="https://www.amazon.in/images/I/81LevhQnGmL._SL1500_.jpg"
        />

        <Product
          id="12345"
          title="Mi 10 (Twilight Grey, 8GB RAM, 128GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready"
          price={49999}
          rating={3}
          image="https://www.amazon.in/images/I/71pezNM40gL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12346"
          title="Acer KG241QP 23.6 1 MS 144 Hz Gaming Monitor - 300nits - 2xHDMI 1xDisplayport - AMD Free Sync - KG241QP (Black)"
          price={13299}
          rating={5}
          image="https://www.amazon.in/images/I/A1SxNac1-cL._SL1500_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
