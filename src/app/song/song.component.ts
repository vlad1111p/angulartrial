import { Component,EventEmitter,Output, Input, OnInit } from '@angular/core';
import { Song } from 'src/model/artist';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  // @Input("song-name")
  // songName:string="default name";
  // @Output("song-likes") valueChange = new EventEmitter<number>();
  // songslikes:number=0;

  @Input("song")
  song: Song= { name : "", likes: 0 };


  constructor() { }

  ngOnInit(): void {
  }
  increaseLike(){
    this.song.likes++;
  }
  decreaseLike(){
    if(this.song.likes>0)
    this.song.likes--;
    // this.valueChange.emit(this.song.likes);
  }

}
