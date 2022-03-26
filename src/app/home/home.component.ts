import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['Magento','PHP', 'Angular','Linux Servers','Git','Api Rest','Scrum','PrimeNg','Material','SQL','PMBOK'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
