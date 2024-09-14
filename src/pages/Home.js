import React, { useEffect, useState } from "react";
import image from "../assets/vladan.png";
import imagepng from "../assets/vladan-image.png";

const Home = () => {
  const [name] = useState("Vladan Stojic");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Frontend Developer", "Web Designer", "Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      id="home"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2 pt-[75px] px-4 fade-in"
    >
      <div className="left-side  flex justify-center pt-14">
        <div className="flex flex-col text-center ">
          <p className="text-4xl ">Welcome to my Portfolio</p>
          <h1 className="text-5xl">
            Hi! I'm {name} <p> I am {text}</p>
          </h1>
          <p className="text-3xl pt-10 pl-5 text-justify">
            I am a frontend developer with 2 years of effective experience in
            projects developing, prossessing expanding knowledge in mention
            fields. Always ready and excited for solving complex problems, even
            if they are out of my current knowledge boundaries
          </p>
        </div>
      </div>
      <div className="right-side  flex justify-center">
        <img
          src={imagepng}
          alt="..."
          className="h-full drop-shadow-[0_10px_15px_black] [clip-path:polygon(50%_0%,_100%_0,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_0_0)]
          transform transition duration-300 hover:scale-105 hover:drop-shadow-[0_10px_15px_purple]
          "
        />
      </div>
    </div>
  );
};

export default Home;
