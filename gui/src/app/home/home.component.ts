import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import  { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: any;
  
  config: SwiperOptions = {
   
    loop: true,
    autoplay:{delay:1500},
    pagination: { 
      el: '.swiper-pagination', 
      
      clickable: true ,
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }; 

  constructor() { }
  open(id:  number){
    var element=document.getElementsByClassName("contenu");
    for(var i=0;i<4;i++){
      element[i].setAttribute("style","display:none");
    }
    element[id].setAttribute("style","display:block");
  }
  
  
  ngOnInit(): void {
    
    var groupe=document.getElementsByClassName('cardheader')[0];
    groupe.setAttribute('style',"background:url('assets/images/bg2.jpg')");
    var element=document.getElementsByClassName("contenu");
    for(var i=1;i<4;i++){
      element[i].setAttribute("style","display:none");
    }
   
    
  }

}
