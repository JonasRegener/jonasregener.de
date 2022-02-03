import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['pexels-negative-space-34153.jpg', 'pexels-jéshoots-218863.jpg', 'pexels-negative-space-169573.jpg'];
  headlines = ["Bring engineering to the next level", "Programming isn't about what you know;     it's about what you can figure out.", "First, solve the problem. Then, write the code."]
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
    }, 8000);

  }


}
