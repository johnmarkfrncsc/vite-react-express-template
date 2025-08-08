import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import newProduct5 from "../assets/newArrivalItem/newProduct5.png";
import newProduct3 from "../assets/newArrivalItem/newProduct3.png";
import newProduct4 from "../assets/newArrivalItem/newProduct4.png";

const Menupage = () => {
  const products = [
    { id: 1, title: "Power Sprayers", img: newProduct5 },
    { id: 2, title: "Generator", img: newProduct3 },
    { id: 3, title: "Grass Cutter", img: newProduct4 },
  ];

  return (
    <header className="min-h-screen bg-amber-50 text-black">
      <nav className="p-4">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            
          >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card image-full w-full h-[150px] shadow-sm rounded-none">
                <figure>
                  <img src={product.img} alt={product.title} />
                </figure>
                <div className="card-body rounded-none flex justify-center">
                  <h2 className="card-title text-3xl justify-center">{product.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>

      <main className="p-4">
        <ul className="list-disc list-inside">
          <li>Pressure Washer</li>
          <li>Electric Blower</li>
          <li>Gasoline Engine</li>
        </ul>
      </main>
    </header>
  );
};

export default Menupage;

