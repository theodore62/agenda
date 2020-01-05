import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveaucompterenduPage } from './nouveaucompterendu.page';

describe('NouveaucompterenduPage', () => {
  let component: NouveaucompterenduPage;
  let fixture: ComponentFixture<NouveaucompterenduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveaucompterenduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveaucompterenduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
