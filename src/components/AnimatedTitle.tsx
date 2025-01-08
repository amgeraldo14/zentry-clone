import { cn } from "../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedTitle = ({
  title,
  containerClassName,
  sectionId,
}: {
  title: string;
  containerClassName?: string;
  sectionId?: string | number;
}) => {
  useGSAP(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-title",
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    });
    titleAnimation.to(".animated-word", {
      opacity: 1,
      transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      stagger: 0.02,
    });
  });
  return (
    <div className={cn("animated-title", containerClassName)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
