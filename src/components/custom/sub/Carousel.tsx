import { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";

interface Props {
  slides: string[]
}

const Carousel: FC<Props> = ({ slides }) => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, index) => (
            <div className="embla__slide" key={`slides-${index}`}>
              <img src={img} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;