import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./boody.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front-End Engineer
        </motion.h1>

        <p className="sub-title">
          I’m Abdelrahman Mohamed ,A Front-End Engineer with a great passion with software development in general,always seeking new oppertunities to enhance my skills and to make a new friends :) 
        </p>

        <div className="all-icons flex">
          {/* <div className="icon icon-twitter"></div> */}
          {/* <div className="icon icon-instagram"></div> */}
          <a href="https://github.com/AbdelrahmanMohamed1" target="_blank">
          <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/abdelrahman-mohamed-960865243/" target="_blank">
          <div className="icon icon-linkedin"></div>
          </a>
          
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
