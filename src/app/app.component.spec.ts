import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Widget } from './widget';

describe( 'AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule
      ]
    } ).compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( AppComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect( app ).toBeTruthy();
  } );

  it( 'should have data property equal to new Widget', () => {
    expect( component.data ).toEqual( new Widget() );
  } );

  it( 'should have wasClaimed property set to false', () => {
    expect( component.wasClaimed ).toBe( false );
  } );

  it( 'should have btnText property set to Claim now', () => {
    expect( component.btnText ).toBe( 'Claim now' );
  } );

  it( 'should have Method getMessage', () => {
    expect( component.getMessage ).toBeTruthy();
  } );

  it( 'should have Method countdown', () => {
    expect( component.countdown ).toBeTruthy();
  } );

  it( 'should have Method onClaim', () => {
    expect( component.onClaim ).toBeTruthy();
  } );
} );
