import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [bigVideo, setBigVideo] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const nextVideoRef = useRef(null);
  const totalVideos = 4;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0 ",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const handleMiniVideoClick = () => {
    if (!isAnimating) {
      setHasClicked(true);
      setCurrentIndex(upcomingVideoIndex);
    }
  };

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  useEffect(() => {
    if (hasClicked) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setBigVideo(getVideoSrc(currentIndex));
        setIsAnimating(false);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setBigVideo(getVideoSrc(currentIndex));
    }
  }, [hasClicked, currentIndex]);

  const handleVideoLoad = () => setLoadedVideos((value) => value + 1);

  return (
    <div className="relative h-dvh w-full overflow-x-hidden ">
      {isLoading && <Loader />}
      <div
        id="video-frame"
        className="relative z-10 h-full overflow-hidden w-full rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              id="current-video"
              className="size-64  origin-center scale-100 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <video
          src={bigVideo}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={(e) => {
            if (hasClicked) {
              e.currentTarget.currentTime = 1;
            }
            handleVideoLoad();
          }}
        />
        <h2 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h2>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h2 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h2>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClassName="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h2 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>a</b>ming
      </h2>
    </div>
  );
};

export default HeroSection;
