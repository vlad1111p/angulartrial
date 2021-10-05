import { Component, OnInit } from '@angular/core';
import { Artist, MusicData } from 'src/model/artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  newArtist: Artist= {name:"",songs:[], likes:0};

  constructor() { }

  saveNewArtist(){
    MusicData.topArtists.push(this.newArtist);
  }

  ngOnInit(): void {
  
  }

}
