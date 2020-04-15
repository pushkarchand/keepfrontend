import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Store } from '../_models/store';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }

  public createNewStore(argStore:Store):Observable<Store>{
      return this.http.post<Store>(environment.store,argStore)
      .pipe(
        map(response=>{
          return response;
        })
      )
  }


  public updateStore(argStore:Store):Observable<Store>{
    return this.http.put<Store>(environment.store,argStore)
    .pipe(
      map(response=>{
        return response;
      })
    )
}


  public enumerateStores():Observable<Store[]>{
      return this.http.get<Store[]>(environment.store)
      .pipe(
        map(response=>{
          return response;
        })
      )
  }


  public getStoreDetails(argStoreId:string):Observable<Store>{
    return this.http.get<Store>(`${environment.store}/${argStoreId}`)
    .pipe(
      map(response=>{
        return response;
      })
    )
  }

  public deleteStores(argStoreIds:string){
      return this.http.delete(`${environment.store}/${argStoreIds}`)
      .pipe(
        map(response=>{
          return response;
        })
      )
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}
