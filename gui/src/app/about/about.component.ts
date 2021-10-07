import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let observer = new IntersectionObserver(function test (observables) {
      observables.forEach(function (observable) {
        // L'élément devient visible
        if (observable.intersectionRatio > 0.5) {
          observable.target.classList.remove('not-visible')
          
        }else{
          observable.target.classList.add('not-visible')
        }
      })
    }, {
      threshold: [0.5]
    });
    
    // On observe nos éléments
    let items = document.querySelectorAll('h1 .text')
    items.forEach(function (item) {
      item.classList.add('not-visible')
      observer.observe(item)
    })

  }

}
