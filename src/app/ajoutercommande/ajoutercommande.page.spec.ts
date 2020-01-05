import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutercommandePage } from './ajoutercommande.page';

describe('AjoutercommandePage', () => {
  let component: AjoutercommandePage;
  let fixture: ComponentFixture<AjoutercommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercommandePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutercommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
