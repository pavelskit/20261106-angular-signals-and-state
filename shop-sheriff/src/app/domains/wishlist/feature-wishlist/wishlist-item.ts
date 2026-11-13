import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-wishlist-item',
  styles: ``,
  template: `<li class="list-group-item d-flex justify-content-between">
    <a [routerLink]="['/products', slug()]">{{ slug() }}</a>
  </li>`,
})
export class WishlistItem {
  slug = input.required<string>()
}
