import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService, RegisterUserInterface } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(this.appService) // will render this in the build of the app // Just call once
  }

  @Get()
  getUser() : string[] {
    // return this.appService.getHello();
    return this.appService.getUser();
  }

  @Get(":name")
  getHelloWithName(@Param("name") name): string {
    // return this.appService.getHelloWithName();
    console.log(name)
    return "Welcome Hello World " + name;
  }

  @Post() 
  registerUser(@Body() payload : RegisterUserInterface): RegisterUserInterface {
    return this.appService.registerUser(payload); // Run with provider

    // Use this code with we dont have a provider(the constructor in the top of the class)
    // const appService = new AppService();
    // return appService.registerUser(payload);
  }
  
}
