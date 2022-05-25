export class User {
    name!:string
    email!:string
    phone!:string
    website!:string

    constructor(name:string, email:string, phone:string, website:string){
        this.name = name
        this.email = email
        this.phone = phone
        this.website = website
    }

}