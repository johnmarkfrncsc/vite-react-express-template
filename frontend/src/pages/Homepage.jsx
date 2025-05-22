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
      <main className="bg-neutral-100 h-full px-2">
        POTANGINANG HOMEPAGE TO
        <article className="flex gap-2 overflow-x-auto flex-nowrap px-1">
          <Link
            to="/menu"
            className="card image-full w-70 flex-none rounded-none lg:w-90"
          >
            <figure>
              <img src={articleDrill} alt="article-Drill"/>
            </figure>
            <div className="card-body absolute transform text-left z-10 mt-10">
              <h1 className="font-bold text-2xl">Drill Machine</h1>
              <p className="font-semibold">Check for best prices</p>
            </div>
          </Link>

          <Link
            to="/menu"
            className="card image-full w-70 flex-none rounded-none lg:w-90"
          >
            <figure>
              <img src={articleCarwash} alt="article-Carwash" />
            </figure>
            <div className="card-body absolute transform text-left z-10 mt-10">
              <h1 className="font-bold text-2xl">Carwash Supplies</h1>
              <p className="font-semibold">
                Shop Now for All Your Carwash Essentials
              </p>
            </div>
          </Link>

          <Link
            to="/menu"
            className="card image-full w-70 flex-none rounded-none lg:w-90"
          >
            <figure>
              <img src={articleGrassCutter} alt="article-GrassCutter" />
            </figure>
            <div className="card-body absolute transform text-left z-10 mt-10">
              <h1 className="font-bold text-2xl">Grass Cutters</h1>
              <p className="font-semibold">Find the Best Grass Cutters Here</p>
            </div>
          </Link>
        </article>
        <NewArrival />
      </main>
    </header>
  );
};

export default Homepage;
