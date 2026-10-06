import { Component, effect, input, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';

import { CarouselBlockComponent } from '../carousel-block/carousel-block.component';
import { CarouselService } from './carousel.service';
import type { CarouselData } from '../../types';

@Component({
  standalone: true,
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [CarouselBlockComponent, NgIcon],
  providers: [
    CarouselService,
    provideIcons({
      lucideChevronLeft,
      lucideChevronRight,
    }),
  ],
})
export class CarouselComponent {
  readonly carouselService = inject(CarouselService);

  data = input<CarouselData>({});

  constructor() {
    effect(() => {
      this.carouselService.data.set(this.data());
    });
  }
}