import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import animation1 from "../assets/animation/animation0.json";
import animation2 from "../assets/animation/animation1.json";
import animation3 from "../assets/animation/animation2.json";
import animation4 from "../assets/animation/animation3.json";

const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  
  const [step, setStep] = useState(1);
  const [anim1Scale, setAnim1Scale] = useState(1);
  const [anim2Scale, setAnim2Scale] = useState(1);
  const [anim2Opacity, setAnim2Opacity] = useState(1);
  const [anim3Scale, setAnim3Scale] = useState(0.1);
  const [screenTransition, setScreenTransition] = useState(0);
  const [show, setShow] = useState(true);
  const [hideAnim, setHideAnim] = useState(false);
  const anim1Ref = useRef<any>(null);
  const anim2Ref = useRef<any>(null);
  const anim3Ref = useRef<any>(null);
  const anim4Ref = useRef<any>(null);
  const [anim1Direction, setAnim1Direction] = useState(1);

  // Animation 1: play forward, then reverse on repeat
  const handleAnim1Loop = () => {
    setAnim1Direction((d) => -d);
    if (anim1Ref.current) {
      anim1Ref.current.setDirection(anim1Direction === 1 ? -1 : 1);
      anim1Ref.current.play();
    }
  };

  // Animation 1 click: enlarge and transition to anim2
  const handleAnim1Click = () => {
    setAnim1Scale(1.2);
    setTimeout(() => {
      setAnim1Scale(30);
      setTimeout(() => {
        setStep(2);
      }, 1500);
    }, 150);
  };

  // Animation 2 click: shrink and transition to anim3
  const handleAnim2Click = () => {
    setAnim2Scale(0.1);
    setAnim2Opacity(0);
    setTimeout(() => {
      setStep(3);
      setTimeout(() => {
        setAnim3Scale(1);
      }, 100);
    }, 350);
  };

  // Animation 3 click: transition to anim4
  const handleAnim3Click = () => {
    setStep(4);
    anim4Ref.current?.setSpeed(1.5);
  };

  // Animation 4 end: hide splash with transition
  const handleAnim4Complete = () => {
    setHideAnim(true);
    setScreenTransition(100);
    setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 1000);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-b-1 z-50 flex flex-col items-center justify-center splash-fade ${hideAnim ? 'splash-hide' : ''}`}
      style={{ pointerEvents: "auto", transform: `translateY(-${screenTransition}vh)`, transition: "transform 1s linear" }}
    >
      {step === 1 && (
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          style={{ transform: `scale(${anim1Scale})`, transition: "transform 1.5s ease-in-out" }}
          onClick={handleAnim1Click}
        >
          <Lottie
            lottieRef={anim1Ref}
            animationData={animation1}
            loop={false}
            onComplete={handleAnim1Loop}
            style={{ width: 220, height: 220 }}
          />
        </div>
      )}
      {step === 2 && (
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          style={{
            transform: `scale(${anim2Scale})`,
            opacity: anim2Opacity,
            transition: "transform 0.35s cubic-bezier(.4,2,.6,1), opacity 0.35s cubic-bezier(.4,2,.6,1)"
          }}
          onClick={handleAnim2Click}
        >
          <Lottie
            lottieRef={anim2Ref}
            animationData={animation2}
            loop
            style={{ width: 220, height: 220 }}
          />
        </div>
      )}
      {step === 3 && (
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          style={{
            transform: `scale(${anim3Scale})`,
            transition: "transform 0.35s cubic-bezier(.4,2,.6,1)"
          }}
          onClick={handleAnim3Click}
        >
          <Lottie
            lottieRef={anim3Ref}
            animationData={animation3}
            loop
            style={{ width: 220, height: 220 }}
          />
        </div>
      )}
      {step === 4 && (
        <div className="flex flex-col items-center justify-center">
          <Lottie
            lottieRef={anim4Ref}
            animationData={animation4}
            loop={false}
            onComplete={handleAnim4Complete}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default SplashScreen;