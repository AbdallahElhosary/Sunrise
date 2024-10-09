import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, AboutUsComponent, ContactUsComponent, FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  companyName:string="Bright Stars for Manufacturing and Trade";
  evaluation:number = 0.92;
  numberOfTransactions:number=12759482;
  sales:number = 25952000.75;
  startDate:Date = new Date(2022,8,15);

  
  
  
  
  
  
  
  
  isAdmin:boolean = false;










  isLoggedIn: boolean = false;














  isAccepted: boolean = true;

  ToggleAccepted() {
    this.isAccepted = !this.isAccepted;
  }






  customerCountry: string = 'Egypt';
  score: number = 31;
  currentDateTime: Date = new Date();
  //currentHour:number = this.currentDateTime.getHours();
  currentHour: number = 23;

  branches = ['Alexandria', 'Cairo', 'Giza', 'Luxor', 'Aswan'];

  products = [    {id:1, name:"LMS", description: "Learning Management System", price: 225000},
    {id:2, name:"SIS", description: "Student Inforation System", price:435000},
    {id:3, name:"CRM", description: "Customer Relation Management", price: 275000},
    {id:4, name:"ERP", description: "Enterprise Resource Planning", price: 685000},
    {id:5, name:"HIS", description: "Hospital Information System", price: 525000}
  ];


















  //Data Binding
  company: string = 'Sunrise Soft.';
  img1Url: string = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg';
  img2Url: string = 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg';

  isDangerous: boolean = false;

  address: string = "Alexandria, 29 Farid st.";
  appraisal: number = 50;



  updateAddress(event: any) {
    this.address = event.target.value;
  }

  alertEventTargetValue(event: any) {
    alert(event.target.value);
  }







  greetVisitor() {
    alert("Welcome to Sunrise Soft!");
  }

  onParagraphMouseOver() {
    alert("Your mouse hovered on the paragraph.");
  }

  ToggleDangerous() {
    this.isDangerous = !this.isDangerous;
  }



  onInput1Focus() {
    console.log("Welcome to Input 1")
  }

  onInput1Blur() {
    console.log("Good bye from Input 1")
  }

  printOnConsole(userInput: string) {
    console.log(userInput)
  }

  printEventObject(event: any) {
    console.log(event);
  }

  printEventTarget(event: any) {
    console.log(event.target);
  }

  printEventTargetValue(event: any) {
    console.log(event.target.value);
  }

}
