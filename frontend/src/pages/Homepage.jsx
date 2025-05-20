import React from "react";
import Highlights from "../components/Highlights.jsx";
import articleDrill from "../assets/articleIMG/articleDrill.jpg";
import articleCarwash from "../assets/articleIMG/articleCarwash.jpg";
import articleGrassCutter from "../assets/articleIMG/articleGrassCutter.jpeg";
import { Link } from "react-router-dom";
import NewArrival from "../components/NewArrival.jsx";

const Homepage = () => {
  return (
    <header className="bg-neutral-950 min-h-screen">
      <Highlights />
      <main className="bg-neutral-950 h-full px-2">
        POTANGINANG HOMEPAGE TO
        <article className=" flex flex-col md:flex-row gap-2">
          <div class="card image-full w-fit md:w-full rounded-none">
            <figure>
              <img src={articleDrill} alt="article-Drill" />
            </figure>
            <div class="card-body absolute transform text-left z-10 mt-10 ">
              <h1 class="font-bold text-2xl">Drill Machine</h1>
              <p className="font-semibold">Check for best prices </p>

              <Link to="/menu">
                <button className="btn btn-xs border-0 shadow-none rounded-xl w-auto mt-1 md:btn-lg md:rounded-4xl  bg-amber-300 text-black ">
                  See More
                </button>
              </Link>
            </div>
          </div>

          <div class="card image-full w-fit md:w-full rounded-none">
            <figure>
              <img src={articleCarwash} alt="article-Carwash" />
            </figure>
            <div class="card-body absolute transform text-left z-10 mt-10 ">
              <h1 class="font-bold text-2xl">Carwash Supplies</h1>
              <p className="font-semibold">
                Shop Now for All Your Carwash Essentials
              </p>
              <div class="card-actions">
                <Link to="/menu">
                  <button className="btn btn-xs border-0 shadow-none rounded-xl w-auto mt-1 md:btn-lg md:rounded-4xl  bg-amber-300 text-black ">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="card image-full w-fit md:w-full rounded-none">
            <figure>
              <img src={articleGrassCutter} alt="article-GrassCutter" />
            </figure>
            <div class="card-body absolute transform text-left z-10 mt-10 ">
              <h1 class="font-bold text-2xl">Grass Cutters</h1>
              <p className="font-semibold">
                Find the Best Grass Cutters Here
              </p>
              <div class="card-actions">
                <Link to="/menu">
                  <button className="btn btn-xs border-0 shadow-none rounded-xl w-auto mt-1 md:btn-lg md:rounded-4xl  bg-amber-300 text-black ">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <NewArrival/>
      </main>
    </header>
  );
};

export default Homepage;