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
  constructor(private router:Router) {}

  ngOnInit(): void {}

  open() {
    if(this.openmap){
      this.close();
    }else{
      this.openmap = true;
    }
    //this.openmap = true;
    //setTimeout(() => this.router.navigateByUrl('/countdown'),20000);
  }

  close() {
    this.openmap == false;
    this.fadeout = true;
    setTimeout(() => {this.countdownShow = false, this.mapShow=false, this.titleShow = true},8000);
  }
}
