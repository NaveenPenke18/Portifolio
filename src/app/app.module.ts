import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AboutComponent } from './about/about.component';
import {MatDividerModule} from '@angular/material/divider'
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
@NgModule({
  declarations: [AppComponent,HomeComponent,AboutComponent,WorkComponent,SkillsComponent],
  imports: [
   BrowserModule,CommonModule,MatButtonModule,MatIconModule,BrowserAnimationsModule,MatDividerModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }



