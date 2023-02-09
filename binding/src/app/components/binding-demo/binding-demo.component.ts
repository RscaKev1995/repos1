import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent {
  isNotAllowedToWrite = false;
  isPremium=true;
  userName="Vive les gros pets";
  changeUserName(){
    console.log("quand il pete il troue son slip")
  }
  changeUsername(
    input:HTMLInputElement){

    console.log(input);
    this.userName=input.value;
    input.value="";
  }
}

