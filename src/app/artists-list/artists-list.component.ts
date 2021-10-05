import { Component, OnInit } from '@angular/core';
import { Artist, MusicData } from 'src/model/artist';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  constructor() { }

  artists: Array<Artist> = MusicData.topArtists;

  ngOnInit(): void {
  }

}
