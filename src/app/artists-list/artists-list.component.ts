import { Component, OnInit } from '@angular/core';
import { Artist, MusicData } from 'src/model/artist';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']

})

export class ArtistsListComponent implements OnInit {
  

  constructor(private httpClient: HttpClient) { 


  }

  artists: Array<Artist> = MusicData.topArtists;

  ngOnInit(): void {
    this.httpClient.get("https://enuxai24hrxjpr9.m.pipedream.net/artists").subscribe(response=>{this.artists=response as Array<Artist>},error=>{console.log(error)})
    console.log("artists might not hav e arrived ")
  }

}
