import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


const endpoint = 'https://localhost:44334/api/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getAudios(): Observable<any> {
    return this.http.get<Audio>(endpoint + 'Audios').pipe(
      catchError(this.handleError)
    );
  }

  getAudio(id: string): Observable<any> {
    return this.http.get<Audio>(endpoint + 'Audios/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addAudio(Audio: any): Observable<any> {
    return this.http.post(endpoint + 'Audios', Audio).pipe(
      catchError(this.handleError)
    );
  }

    updateAudio(id: string, Audio: Audio): Observable<any> {
    return this.http.put<Audio>(endpoint + 'Audios/' + id, Audio).pipe(
      catchError(this.handleError)
    );
  }

    deleteAudio(id: string): Observable<any> {
    return this.http.delete<Audio>(endpoint + 'Audios/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }
}

export interface Audio {
  id: string;
  arquivoNome: string;
  tipoLigacao: number;
  operadorNome: string;
  dataCriacao: Date;


}



