import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist, MusicData } from 'src/model/artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  newArtist: Artist= {name:"",songs:[], likes:0};

  constructor(private httpClient: HttpClient) {

   }

  saveNewArtist(){
    // MusicData.topArtists.push(this.newArtist);
    console.log("wat")
    this.httpClient.post("https://enuxai24hrxjpr9.m.pipedream.net/artist",this.newArtist)
    .subscribe(response=>{console.log(response)},error=>{console.log(error)})
  }

  ngOnInit(): void {
  
  }

}
