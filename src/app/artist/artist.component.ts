import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist, Song } from 'src/model/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }
  @Input("artist")
  artist: Artist = { name: "", likes: 0, songs: [] }
  // @Input("artist-name")
  // artistName:string="default artist name";
  // @Output("artist-likes") valueChange = new EventEmitter<number>();
  // artistLikes:number=0;

  // @Input("songs")
  // songs: Array<Song>=[]
  ngOnInit(): void {
  }

  increaseArtistLike() {
    this.artist.likes++;
    //  this.valueChange.emit(this.artist.likes);
  }
  decreaseArtistLike() {
    this.artist.likes--;
    //  this.valueChange.emit(this.artist.likes);
  }

}
