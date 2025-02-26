import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieFile from "../assets/lottieFile.json";

function LottieAnimation({ isHamburgerActive, isAnimationActive }) {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false, // Prevent autoplay on load
      animationData: lottieFile,
    });
    animRef.current = animation;

    // Cleanup animation on unmount
    return () => animation.destroy();
  }, []);

  useEffect(() => {
    if (!animRef.current) return;

    if (isAnimationActive === true) {
      // Play forward
      animRef.current.playSegments([0, 43], true);
    } else if (isAnimationActive === false) {
      // Play reverse
      animRef.current.playSegments([43, 0], true);
    }
  }, [isAnimationActive]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}

export default LottieAnimation;
