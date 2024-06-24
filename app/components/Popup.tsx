import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popup = ({
  show,
  title,
  desc,
  techs,
  images,
  repo,
}: {
  show: boolean;
  title: string;
  desc: string;
  techs: string[][];
  images: string[];
  repo: string;
}) => {
  if (!show) return null;

  var settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const closePopup = () => {
    document.getElementById("popup");
    console.log("closing");
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      id="popup"
      onClick={() => closePopup()}
    >
      {" "}
      {/* Assuming closePopup is a function to close the popup */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={() => closePopup()}
      ></div>
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-projects p-10 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold text-center mt-5">{title}</h1>
        <p className="text-center mt-5 text-white">{desc}</p>
        <Slider {...settings} className=" max-w-xl mx-auto">
          {images.map((image, index) => (
            <img src={image} alt={title} key={index} className="mx-auto mt-5" />
          ))}
        </Slider>
        <p className="text-center mt-5 text-white">Technologies used:</p>
        <div className="flex flex-wrap justify-center  max-w-xl mx-auto">
          {techs.map((tech, index) => (
            <div className="flex justify-center items-center flex-col mx-auto font-bold mt-5" key={index}>
              <img
                src={tech[1]}
                alt={tech[0]}
                className="w-10 h-10 my-auto"
              />
              <p>{tech[0]}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 flex-col mx-auto w-max items-center hover:scale-105 hover:cursor-pointer" onClick={() => {open(repo)}}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" className="w-10 h-10 mr-2 my-auto" />
          <p
            className="underline underline-offset-4 decoration-2"
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
