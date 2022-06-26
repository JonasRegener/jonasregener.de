import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['pexels-negative-space-34153.jpg', 'pexels-jéshoots-218863.jpg', 'pexels-negative-space-169573.jpg'];
  headlines = ["Willkommen auf meiner Internetseite", "Mein Name ist Jonas Regener, in 'About me' kannst du mehr über mich erfahren", "Unter 'Projekte' findest du kleine Praxisbeispiele meiner Fähigkeiten"]
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 3000);

  }


}
