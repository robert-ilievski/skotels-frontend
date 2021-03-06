import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersModel} from '../models/users.model';
import {Observable} from 'rxjs';
import {HotelsModel} from '../models/hotels.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {
  private hotelsUrl: string;
  constructor(private http: HttpClient) {
    // this.hotelsUrl = 'https://skotels-gateway.herokuapp.com/api/hotels';
    this.hotelsUrl = 'http://localhost:8080/api/hotels';
  }
  public add(hotel: HotelsModel): Observable<HotelsModel> {
    return this.http.post<HotelsModel>(`${this.hotelsUrl}/save`, hotel);
  }
  public findAll(): Observable<HotelsModel[]> {
    return this.http.get<HotelsModel[]>(`${this.hotelsUrl}/all`);
  }
  // delete
  deleteHotel(hotel: HotelsModel): Observable<HotelsModel[]> {
    return this.http.post<HotelsModel[]>(`${this.hotelsUrl}/delete`, hotel);
  }
  // sort
  public sortByStars(): Observable<HotelsModel[]> {
    return this.http.get<HotelsModel[]>(`${this.hotelsUrl}/sortbystars`);
  }

  public sortAlphabetic(): Observable<HotelsModel[]> {
    return this.http.get<HotelsModel[]>(`${this.hotelsUrl}/sortalphabetic`);
  }

}
