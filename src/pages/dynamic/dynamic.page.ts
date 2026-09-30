import { Component, inject, signal} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './dynamic.page.html',
  styleUrl: './dynamic.page.scss',
})
export class DynamicPage {
    private route = inject(ActivatedRoute);
    path = signal<string>(this.route.snapshot.url.map(segment => segment.path).join('/') || '/');
}