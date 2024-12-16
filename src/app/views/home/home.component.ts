import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'boxicons'

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  words = ['Coder', 'Youtuber', 'Blogger', 'Designer']; // Array of words
  dynamicContentArray!: string[];


  constructor() {
    // Initialize the array with content (can include HTML)
    this.dynamicContentArray = [
      ` With a strong foundation in backend development and a knack for bringing ideas to life,
       I focus on crafting efficient and scalable systems that power the web. Whether it's tackling
        complex logic or optimizing performance, I thrive on challenges that allow me to learn and grow. 
        Let’s connect and build something amazing together! `
    ];
  }

  // Method to dynamically change array contents later
  updateContent(newContent: string, index: number): void {
    this.dynamicContentArray[index] = newContent;
  }
}
