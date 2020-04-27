import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
gallery: any = [{img:"assets/images/gallery/04.jpg",name:"Czarny pieprz", tag: "Dania"},
{img:"assets/images/gallery/05.jpg",name:"Kurczak w cieście", tag: "Dania"},
{img:"assets/images/gallery/06.jpg",name:"Rafał Kądziołka", tag: "Szef"}]
  constructor() {
   }
  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit() {
    
    this.loadScript('assets/js/popup/jquery.magnific-popup.js');
    this.loadScript('assets/js/isotope/isotope.pkgd.min.js');

  }
}
