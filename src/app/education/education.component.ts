import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  stageIsShown: boolean = false ;
  freelanceIsShown : boolean = false;
  alternanceIsShown:boolean = false;
  freelanceScotfyIsShown:boolean = false;
  freelanceMotionIsShown:boolean = false;
  latinAmericanIsShown:boolean = false;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;
  detailOnClick(id:String) {
    if(id=="alternance_detail"){
      this.alternanceIsShown = !this.alternanceIsShown;
    }
    else if(id=="freelance_detail"){
     this.freelanceIsShown = !this.freelanceIsShown;
    }
    else if(id=="stage_detail"){
      this.stageIsShown = !this.stageIsShown;
    }
    else if(id=="freelanceScotfy_detail"){
      this.freelanceScotfyIsShown = !this.freelanceScotfyIsShown;
    }
    else if(id=="freelanceMotion_detail"){
      this.freelanceMotionIsShown = !this.freelanceMotionIsShown;
    }
    else if(id=="latinamerican_detail"){
      this.latinAmericanIsShown = !this.latinAmericanIsShown;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faBong;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faTableTennis;
  }

}
