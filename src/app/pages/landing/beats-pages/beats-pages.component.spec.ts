import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsPagesComponent } from './beats-pages.component';

describe('BeatsPagesComponent', () => {
  let component: BeatsPagesComponent;
  let fixture: ComponentFixture<BeatsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatsPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
