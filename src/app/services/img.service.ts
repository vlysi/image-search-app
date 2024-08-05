import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private error$ = new Subject<string>();
  private searchTerm$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  setError(message: string){
    this.error$.next(message);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  sendSearchTerm(term: string){
    this.searchTerm$.next(term);
  }

  getSearchTerm(): Observable<string>{
    return this.searchTerm$.asObservable()
  }

  getImagenes(term: string, imagesPerPage: number, currentPage: number): Observable<any>{
    const KEY = '45276514-99165b5be624507a37c397bb7';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${term}&per_page${imagesPerPage}&page=${currentPage}`;
    return this.http.get(URL);
  }
}
