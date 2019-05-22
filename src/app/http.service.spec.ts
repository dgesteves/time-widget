import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

describe( 'HttpService', () => {
  beforeEach( () => TestBed.configureTestingModule( {
    imports: [ HttpClientModule ]
  } ) );

  it( 'should be created', () => {
    const service: HttpService = TestBed.get( HttpService );
    expect( service ).toBeTruthy();
  } );

  it( 'getData method should exist', () => {
    const service: HttpService = TestBed.get( HttpService );
    expect( service.getData ).toBeTruthy();
  } );

  it( 'getData method should have property amount equal to 50', ( done: DoneFn ) => {
    const service: HttpService = TestBed.get( HttpService );
    let data;
    expect( service.getData().subscribe( res => data = res.amount === 50 ) ).toBeTruthy();
    done();
  } );

  it( 'getData method should have property prize equal to Free Spins', ( done: DoneFn ) => {
    const service: HttpService = TestBed.get( HttpService );
    let data;
    expect( service.getData().subscribe( res => data = res.prize === 'Free Spins' ) ).toBeTruthy();
    done();
  } );

  it( 'getData method should have property game equal to Gemix', ( done: DoneFn ) => {
    const service: HttpService = TestBed.get( HttpService );
    let data;
    expect( service.getData().subscribe( res => data = res.game === 'Gemix' ) ).toBeTruthy();
    done();
  } );

  it( 'getData method should have property countdown equal to 25', ( done: DoneFn ) => {
    const service: HttpService = TestBed.get( HttpService );
    let data;
    expect( service.getData().subscribe( res => data = res.countdown === 25 ) ).toBeTruthy();
    done();
  } );
} );
