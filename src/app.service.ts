import { Injectable } from '@nestjs/common';


export interface RegisterUserInterface {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  private user = [];

  getHello(): string {
    return 'Hello World!';
  }

  registerUser(payload : RegisterUserInterface): RegisterUserInterface {
    this.user.push(payload.name);

    if(payload.age >= 13){ 
      this.addToHighSchool(payload)
      return payload;
    }
    this.addToKindergarter(payload)
    return payload;
  }

  getUser() : string[] {
    return this.user;
  }


  private addToHighSchool(payload) {
    console.log("Adding user to high school " + payload.name)
  }

  private addToKindergarter(payload) {
    console.log("adding to garden " + payload.name)
  }
  
}
