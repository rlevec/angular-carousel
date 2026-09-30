import { Component, computed, effect, input, signal, untracked, inject } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';

import { CarouselBlockComponent } from '../carousel-block/carousel-block.component';

import { DeviceService } from '../../core/service/device.service';

import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';

import type { CarouselData } from '../../types';

@Component({
  standalone: true,
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [CarouselBlockComponent, NgIcon],
  providers: [
    provideIcons({
      lucideChevronLeft,
      lucideChevronRight,
    }),
  ],
})
export class CarouselComponent {
  readonly device = inject(DeviceService);

  hovered = signal<number | null>(null);

  currentCarouselBlockIdx = signal<number>(0);
  data = input<CarouselData>({});

  loop = computed(() => this.data()?.loop ?? false);

  autoAdvance = computed(() => this.data()?.autoAdvance ?? false);

  advanceInterval = computed(() => this.data()?.advanceInterval ?? 5000);

  pauseOnHover = computed(() => this.data()?.pauseOnHover ?? false);

  variant = computed(() => this.data()?.variant ?? 'hero');

  priority = computed(() => this.data()?.priority ?? false)

  itemsPerPage = computed(
    () =>
      this.data()?.itemsPerPage ?? {
        mobile: 1,
        tablet: 3,
        desktop: 5,
      },
  );

  carouselTitle = computed(() => this.data()?.title ?? null);

  carouselItems = computed(() => this.data()?.items ?? []);

  enrichedItemsPerPage = computed(() => {
    const varian = this.variant();
    const itemsPerPage = this.itemsPerPage();
    const deviceType = this.device.deviceType();

    return varian === 'hero' ? 1 : itemsPerPage[deviceType];
  });

  totalPages = computed(() => {
    const totalItems = this.carouselItems().length;
    const perPage = Math.max(1, Number(this.enrichedItemsPerPage()) || 1);
    if (totalItems <= perPage) return 1;

    return totalItems - perPage + 1;
  });

  totalPagesArray = computed(() => {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  });

  activePageIndex = computed(() => {
    return Math.min(this.currentCarouselBlockIdx(), this.totalPages() - 1);
  });

  goToPage(pageIdx: number): void {
    const maxIndex = this.totalPages() - 1;
    const targetIdx = Math.max(0, Math.min(pageIdx, maxIndex));
    this.currentCarouselBlockIdx.set(targetIdx);
  }


  trackTransform = computed(() => {
    const currentCarouselBlockIdx = this.currentCarouselBlockIdx();
    const itemsPerPage = Math.max(1, Number(this.enrichedItemsPerPage()) || 1);

    return `translateX(-${currentCarouselBlockIdx * (100 / itemsPerPage)}%)`;
  });

  handleCarouselBlockChange = ({ direction }: { direction: 'prev' | 'next' }): void => {
    const carouselItems = this.carouselItems();
    const totalItems = carouselItems?.length ?? 0;
    const itemsPerPage = Math.max(1, Number(this.enrichedItemsPerPage()) || 1);

    if (totalItems <= itemsPerPage) return;

    const maxIndex = totalItems - itemsPerPage;
    const loop = this.loop();

    this.currentCarouselBlockIdx.update((idx) => {
      if (direction === 'next') {
        return idx >= maxIndex ? (loop ? 0 : idx) : idx + 1;
      } else {
        return idx <= 0 ? (loop ? maxIndex : idx) : idx - 1;
      }
    });
  };

  handleHovered = ({ type, idx }: { type: 'enter' | 'leave'; idx: number }) => {
    this.hovered.set(type === 'enter' ? idx : null);
  };

  constructor() {
    effect((onCleanup) => {
      const isAuto = this.autoAdvance();
      const delay = this.advanceInterval();
      const hovered = this.hovered();

      if (!isAuto || hovered) return;

      const timer = setInterval(() => {
        untracked(() => {
          this.handleCarouselBlockChange({ direction: 'next' });
        });
      }, delay);

      onCleanup(() => clearInterval(timer));
    });
  }
}