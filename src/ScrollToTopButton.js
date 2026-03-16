import {  faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2; // 20% of screen height

      setShowButton(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showButton && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg opacity-80 transition hover:opacity-100"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
