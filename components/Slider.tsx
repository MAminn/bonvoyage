import Image from "next/image";
import { useState } from "react";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center gap-2 ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            width={0}
            height={0}
            className={`w-[120px] h-[120]  transition duration-500 ease-in-out object-cover object-center object-fit ${
              index === currentIndex ? "opacity-100" : " opacity-50"
            }`}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-accent rounded-full p-2 text-white"
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-accent rounded-full p-2 text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
