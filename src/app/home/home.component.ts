import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  target= document.getElementById("tw")

 constructor(){
  
}
  ngAfterViewInit(){
     setTimeout(() => {
      
     }, 2000);
  }
}
