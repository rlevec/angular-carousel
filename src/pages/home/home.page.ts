import { Component } from '@angular/core';

import { CarouselComponent } from '../../components/carousel/carousel.component';

import { carouselData } from '../../data';

import type { CarouselData } from '../../types';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  imports: [CarouselComponent],
})
export class HomePage {
  firstCarousel: CarouselData = { ...carouselData, title: undefined, priority: true };

  secondCarousel: CarouselData = {
    ...carouselData,
    title: 'Second Carousel',
    variant: 'standard',
    loop: true,
    autoAdvance: true,
  };

  thirdCarousel: CarouselData = {
    ...carouselData,
    itemsPerPage: { ...carouselData.itemsPerPage, mobile: 1, tablet: 2, desktop: 3 },
    title: 'Third Carousel',
    variant: 'standard',
    loop: true,
    autoAdvance: true,
  };

  fourthCarousel: CarouselData = {...this.firstCarousel, title: "Fourth Carousel", items: [...(this.firstCarousel.items || []), ...(this.firstCarousel.items || []), ...(this.firstCarousel.items || [])], variant: "standard"}

  fifthCarousel: CarouselData = {...this.thirdCarousel, title: "Fifth Carousel", itemsPerPage: {...this.thirdCarousel.itemsPerPage, mobile: 2, tablet: 2, desktop: 2}, variant: "standard"}
}
