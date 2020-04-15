import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../_models';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  uploadFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('uploadfile', fileToUpload, fileToUpload.name);
    return this.http
      .post(environment.upload, formData)
      .pipe(map((response) => { 
            console.log(response);
            return response;
         }),
         catchError((e) => this.handleError(e))
      )
    }

    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}
