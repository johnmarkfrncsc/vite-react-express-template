import React from "react";
import Highlights from "../components/Highlights.jsx";
import burgerCategory from "../assets/catergories/burgerCategory.png";
import articleBurger from "../assets/articleIMG/articleBurger.jpeg";
import articlePasta from "../assets/articleIMG/articlePasta.jpg";

const Homepage = () => {
  return (
    <header className="bg-neutral-950 min-h-screen">
      <Highlights />
      <main className="bg-amber-900 h-screen">
        pokingina

        <article className="px-5">

          <div class="card image-full w-fit md:w-56 rounded-2xl pb-2  ">
            <figure>
              <img src={articleBurger} alt="Burger-Category" />
            </figure>
            <div class="card-body absolute transform  text-left z-10 ">
              <h2 class="font-semibold">Try it today</h2>
              <h1 className="card-title font-bold">Most popular burgers </h1>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

         <div class="card image-full w-fit md:w-56 rounded-2xl  ">
            <figure>
              <img src={articlePasta} alt="Burger-Category" />
            </figure>
            <div class="card-body absolute transform  text-left z-10 ">
              <h2 class="font-semibold">Try it today</h2>
              <h1 className="card-title font-bold">More fun and fresh </h1>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

        </article>
        {/* <div className="card bg-base-100 size-30 gap-2">
          <img
            src={burgerCategory}
            alt="Burger-Category"
            className="w-auto h-auto bg-cover"
          />
          <h2 class="card-title justify-center">Burgers</h2>
        </div> */}
      </main>
    </header>
  );
};

export default Homepage;
