import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Popup = ({
  show,
  title,
  desc,
  techs,
  images,
  repo,
  toggleShow,
}: {
  show: boolean;
  title: string;
  desc: string;
  techs: string[][];
  images: string[];
  repo: string;
  toggleShow: () => void;
}) => {
  if (!show) return null;

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
  };

  const closePopup = () => {
    var popup1 = document.getElementById("popup");

    toggleShow();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      id="popup"
    >
      {/* Assuming closePopup is a function to close the popup */}
      <div
        id="popup2"
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
      ></div>
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-projects p-10 rounded-xl max-w-sm md:max-w-lg lg:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={closePopup} // Attach the onClick event handler here
        >
          X
        </button>
        <h1 className="text-2xl font-bold text-center mt-5 text-white">{title}</h1>
        <p className="text-center mt-5 text-white">{desc}</p>
        <Slider {...settings} className=" max-w-xl mx-auto max-h-96">
          {images.map((image, index) => (
              <Image
                src={`${image}`}
                alt={title}
                key={index}
                className="mx-auto mt-5 object-scale-down max-h-96 w-auto"
                width={500}
                height={0}
                quality={100}
              />
          ))}
        </Slider>
        <p className="text-center mt-5 text-white font-semibold">Technologies used:</p>
        <div className="flex flex-wrap justify-center max-w-xl mx-auto">
          {techs.map((tech, index) => (
            <div
              className="flex justify-center items-center flex-col mx-auto font-bold mt-5"
              key={index}
            >
              <img
                src={`${tech[1]}`}
                alt={tech[0]}
                className="my-auto"
              />
            </div>
          ))}
        </div>
        <div
          className="flex justify-center mt-5 flex-col mx-auto w-max items-center hover:scale-105 hover:cursor-pointer"
          onClick={() => {
            open(repo);
          }}
        >
          <img
            src="https://go-skill-icons.vercel.app/api/icons?i=github&theme=dark"
            alt="github"
            className="w-10 h-10 my-auto"
          />
          <p
            className="underline underline-offset-4 decoration-2 text-white"
            rel="noreferrer"
          >
            See the repo
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
