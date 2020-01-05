import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CataloguesPage } from './catalogues.page';

describe('CataloguesPage', () => {
  let component: CataloguesPage;
  let fixture: ComponentFixture<CataloguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataloguesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CataloguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
