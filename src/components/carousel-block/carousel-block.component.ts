import { Component, computed, input } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';

import { RouterLink } from '@angular/router';

import type { CarouselBlock, Variant } from '../../types';

@Component({
  standalone: true,
  selector: 'carousel-block',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './carousel-block.component.html',
  styleUrl: './carousel-block.component.scss',
})
export class CarouselBlockComponent {
  variant = input.required<Variant>();
  data = input<CarouselBlock>({});
  priority = input<boolean>(false)

  cta = computed(() => {
    const carouselLink = this.data().carouselLink;

    return carouselLink?.type === 'cta' ? carouselLink.cta : null;
  });

  wholeCarouselBlockLink = computed(() => {
    const carouselLink = this.data().carouselLink;

    return carouselLink?.type === 'whole-carousel-item' ? carouselLink.destination : null;
  });
}
