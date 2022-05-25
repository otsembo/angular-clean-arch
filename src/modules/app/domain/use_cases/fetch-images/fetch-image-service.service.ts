import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from 'src/modules/app/data/dto/UserDto';
import { AppUtil } from 'src/modules/app/common/AppUtil';
import { ImageDto } from 'src/modules/app/data/dto/ImagesDto';

@Injectable({
  providedIn: 'root'
})
export class FetchImageServiceService {


  constructor(private httpClient:HttpClient) {

  }

  // function that makes network request
  fetchImages(): Promise<ImageDto[]> {
    return new Promise<ImageDto[]>(
      (resolve, reject) => {
        this.httpClient.get<ImageDto[]>(AppUtil.IMAGES_ENDPOINT).subscribe({

          next: (data) => resolve(data),
          error: (errMessage) => reject(errMessage),
          complete: () => console.info('complete') 

          }
        )
      }
    )
  }

}
