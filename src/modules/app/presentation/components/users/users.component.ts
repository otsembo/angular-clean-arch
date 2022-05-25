import { Component, OnInit } from '@angular/core';
import { AppRepository } from 'src/modules/app/data/repository/AppRepository';
import { User } from 'src/modules/app/data/model/User';
import { UserDto } from 'src/modules/app/data/dto/UserDto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // initial user list
  users:User[] = []
  // loading status
  isLoading:Boolean = false

  constructor(private appRepo:AppRepository,) { }

  ngOnInit(): void {
    this.isLoading = true
    this.getUsers()
  }

  getUsers(){
    this.appRepo.getUserList().then(
      (data:UserDto[]) => {
        this.users = data.map( dto => {return new User(dto.name, dto.email, dto.phone, dto.website)})
        this.isLoading = false
      },
      (error) => {}
    )
  }



}
