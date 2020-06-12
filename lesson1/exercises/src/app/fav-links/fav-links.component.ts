import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["http://store.steampowered.com/", "https://www.twitch.tv/directory/following/live"]

  constructor() { }

  ngOnInit() {
  }

}
