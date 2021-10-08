import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "0",
      icon: "./assets/writing.png",
      title: "bengas",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit edamame",
      img: "https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg",
      type: "picici",
    },
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Global",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit edamame",
      img: "https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg",
      type: "picas",
    },
    {
      id: "2",
      icon: "./assets/twitter.png",
      title: "Social Media",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit edamame",
      img: "https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg",
      type: "post",
    },
    {
      id: "3",
      icon: "./assets/linkedin.png",
      title: "LinkedIn",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit edamame",
      img: "https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg",
      type: "blimblom",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.type}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/down.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/down.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
