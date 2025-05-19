import highlightBurger from "../assets/burgers/highlightBurger.png";
import coverbg from "../assets/burgers/coverbg.png";

const Highlights = () => {
  return (
    <header className="relative px-2">
      <div className="relative flex flex-col items-center justify-center">
        <img
          src={highlightBurger}
          alt="highlight-burger"
          className="w-auto bg-cover"
        />

        <div className="absolute transform  text-center z-10 text-white">
          {/* TODO: Need to put animation in h1 */}
          <h1 className="font-extrabold text-5xl text-center text-yellow-500">
            Discover the all-new
          </h1>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl">Brie Beef Burger</h2>
      <p> Black Truffle and Brie Beef Burger with Caramelized Shallots</p>
        <span className="text-orange-300 font-semibold">
          ₱ 229.00
        </span>

      </div>
      
      <div className="flex justify-center md:justify-end gap-4">
        <button className="bg-yellow-500 px-4 py-2 rounded-4xl text-white font-bold">
          Order now
        </button>
        <button className="bg-gray-500 px-4 py-2 rounded-4xl font-semibold">
          Browse menu
        </button>
      </div>
    </header>
  );
};

export default Highlights;
