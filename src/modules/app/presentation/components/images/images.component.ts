import { Component, OnInit } from '@angular/core';
import { ImageDto } from 'src/modules/app/data/dto/ImagesDto';
import { AppImage } from 'src/modules/app/data/model/AppImage';
import { AppRepository } from 'src/modules/app/data/repository/AppRepository';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  // loading status
  isLoading:Boolean = false
  images:AppImage[] = []
  constructor(private appRepo:AppRepository,) { }

  ngOnInit(): void {
    this.isLoading = true
    this.getImages()
  }

  getImages(){
    this.appRepo.getImageList().then(
      (data:ImageDto[]) => {
        this.images = data.map( dto => {return new AppImage(dto.title, dto.thumbnailUrl)})
        this.isLoading = false
      },
      (error) => {}
    )
  }

}
