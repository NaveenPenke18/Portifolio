import { Component, OnInit } from '@angular/core';
//@ts-ignore
import * as AOS from 'aos'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  
  ngOnInit(): void {
    AOS.init()
  }
}
