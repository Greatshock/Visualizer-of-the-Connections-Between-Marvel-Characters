import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkComponent } from './social-network.component';

describe('SocialNetworkComponent', () => {
  let component: SocialNetworkComponent;
  let fixture: ComponentFixture<SocialNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
