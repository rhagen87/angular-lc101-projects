import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'This is the photos section';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://steamcdn-a.akamaihd.net/steam/spotlights/0c8351b98fdf90bfcebc18ae/spotlight_image_english.jpg?t=1591721377';
  image3 = 'https://steamcdn-a.akamaihd.net/steam/spotlights/c501c13fb26f118984213809/spotlight_image_english.jpg?t=1591642315';

  constructor() { }

  ngOnInit() {
  }

}