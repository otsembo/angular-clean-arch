import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { UserDto } from 'src/modules/app/data/dto/UserDto';
import { AppUtil } from 'src/modules/app/common/AppUtil';

@Injectable({
  providedIn: 'root'
})
export class FetchUserServiceService {

  constructor(private httpClient:HttpClient) {

  }

  // function that makes network request
  fetchUsers (): Promise<UserDto[]> {
    return new Promise<UserDto[]>(
      (resolve, reject) => {
        this.httpClient.get<UserDto[]>(AppUtil.USER_ENDPOINT).subscribe({

          next: (data) => resolve(data),
          error: (errMessage) => reject(errMessage),
          complete: () => console.info('complete') 

          }
        )
      }
    )
  }


}