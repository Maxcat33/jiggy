import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  openmap: boolean = false;
  fadeout: boolean = false;
  countdownShow: boolean = false;
  mapShow: boolean = true;
  titleShow: boolean = false;
  audio = new Audio();
  audio1 = new Audio();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  open() {
    if (this.openmap) {
      this.close();
    } else {
      this.openmap = true;
      this.play();
    }
    //this.openmap = true;
    setTimeout(() => this.close(), 19000);
  }

  close() {
    this.openmap == false;
    this.fadeout = true;
    setTimeout(() => {
      (this.countdownShow = false),
        (this.mapShow = false),
        (this.titleShow = true),
        this.hbdPlay();
    }, 5000);
  }

  play() {
    if (this.audio.currentTime == 0) {
      this.audio.src = 'assets/music/harry_potter.mp3';
      this.audio.load();
      this.audio.play();
    }
  }
  hbdPlay() {
    this.audio.pause();
    if (this.audio.currentTime == 0) {
      this.audio1.src = 'assets/music/DJ_BoBo_Happy_Birthday.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }
}
