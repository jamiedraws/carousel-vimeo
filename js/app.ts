// components
import VimeoCarousel from "Shared/ts/components/vimeo-carousel";

// adapters
import VimeoSlideCarouselAdapter from "Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel";

// observers
import { observer } from "Shared/ts/observers/intersection";

observer(".slide--vimeo-carousel", {
    inRange: (element) => {
        const carousel = new VimeoCarousel(
            new VimeoSlideCarouselAdapter(element)
        );

        carousel.enablePrevNextControls();
    }
});
