import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import { DeviceService } from '../../core/service/device.service';
import type { CarouselData } from '../../types';

@Injectable()
export class CarouselService {
  private readonly device = inject(DeviceService);

  readonly data = signal<CarouselData>({});

  readonly hovered = signal<number | null>(null);
  readonly currentCarouselBlockIdx = signal<number>(0);

  readonly loop = computed(() => this.data()?.loop ?? false);
  readonly autoAdvance = computed(() => this.data()?.autoAdvance ?? false);
  readonly advanceInterval = computed(() => this.data()?.advanceInterval ?? 5000);
  readonly pauseOnHover = computed(() => this.data()?.pauseOnHover ?? false);
  readonly variant = computed(() => this.data()?.variant ?? 'hero');
  readonly priority = computed(() => this.data()?.priority ?? false);

  readonly itemsPerPage = computed(
    () =>
      this.data()?.itemsPerPage ?? {
        mobile: 1,
        tablet: 3,
        desktop: 5,
      },
  );

  readonly carouselTitle = computed(() => this.data()?.title ?? null);
  readonly carouselItems = computed(() => this.data()?.items ?? []);

  readonly enrichedItemsPerPage = computed(() => {
    const variant = this.variant();
    const itemsPerPage = this.itemsPerPage();
    const deviceType = this.device.deviceType();

    return variant === 'hero' ? 1 : itemsPerPage[deviceType];
  });

  readonly totalPages = computed(() => {
    const totalItems = this.carouselItems().length;
    const perPage = Math.max(1, Number(this.enrichedItemsPerPage()) || 1);
    if (totalItems <= perPage) return 1;

    return totalItems - perPage + 1;
  });

  readonly totalPagesArray = computed(() => {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  });

  readonly activePageIndex = computed(() => {
    return Math.min(this.currentCarouselBlockIdx(), this.totalPages() - 1);
  });

  readonly trackTransform = computed(() => {
    const currentCarouselBlockIdx = this.currentCarouselBlockIdx();
    const itemsPerPage = Math.max(1, Number(this.enrichedItemsPerPage()) || 1);

    return `translateX(-${currentCarouselBlockIdx * (100 / itemsPerPage)}%)`;
  });

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

  goToPage(pageIdx: number): void {
    const maxIndex = this.totalPages() - 1;
    const targetIdx = Math.max(0, Math.min(pageIdx, maxIndex));
    this.currentCarouselBlockIdx.set(targetIdx);
  }

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

  handleHovered = ({ type, idx }: { type: 'enter' | 'leave'; idx: number }): void => {
    this.hovered.set(type === 'enter' ? idx : null);
  };
}