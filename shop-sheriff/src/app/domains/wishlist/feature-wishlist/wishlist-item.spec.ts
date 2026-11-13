import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistItem } from './wishlist-item';

describe('WishlistItem', () => {
  let component: WishlistItem;
  let fixture: ComponentFixture<WishlistItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistItem],
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
