import { Injectable, signal } from '@angular/core';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

const MEDIA_QUERIES = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
} as const;

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private readonly _deviceType = signal<DeviceType>('desktop');

  readonly deviceType = this._deviceType.asReadonly();

  private readonly mobileQuery = window.matchMedia(MEDIA_QUERIES.mobile);
  private readonly tabletQuery = window.matchMedia(MEDIA_QUERIES.tablet);

  constructor() {
    this.updateDeviceType();

    this.mobileQuery.addEventListener('change', this.updateDeviceType);
    this.tabletQuery.addEventListener('change', this.updateDeviceType);
  }

  private readonly updateDeviceType = () => {
    if (this.mobileQuery.matches) {
      this._deviceType.set('mobile');
    } else if (this.tabletQuery.matches) {
      this._deviceType.set('tablet');
    } else {
      this._deviceType.set('desktop');
    }
  };
}