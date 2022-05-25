import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FetchUserServiceService } from '../../domain/use_cases/fetch-users/fetch-user-service.service';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserDto } from '../dto/UserDto';
import { ImageDto } from '../dto/ImagesDto';
import { FetchImageServiceService } from '../../domain/use_cases/fetch-images/fetch-image-service.service';

@Injectable({
    providedIn: 'root'
})
export class AppRepository{

    constructor(private fetchUser:FetchUserServiceService, private fetchImages:FetchImageServiceService){

    }

    getUserList() : Promise<UserDto[]>{
       return this.fetchUser.fetchUsers()
    }

    getImageList() : Promise<ImageDto[]>{
        return this.fetchImages.fetchImages()
    }


}