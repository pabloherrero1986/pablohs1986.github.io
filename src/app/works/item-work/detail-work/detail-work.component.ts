import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from 'src/app/model/work';
import { WorkServiceService } from 'src/app/services/work-service.service';

@Component({
  selector: 'app-detail-work',
  templateUrl: './detail-work.component.html',
  styleUrls: ['./detail-work.component.css']
})
export class DetailWorkComponent implements OnInit {

  selectedWork: Work;
  workId: string;

  constructor(private _workService: WorkServiceService, private _route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.workId = this._route.snapshot.paramMap.get('id');
    this.selectedWork = this._workService.getWorkById(parseInt(this.workId));
  }

   /** Method that returns the class to apply according to the status of the work. */
  getStatusColor() {
    switch (this.selectedWork.status) {
      case true:
        return 'draculaGreen';
      case false:
        return 'draculaRed';
    }
  }

  /** Method that returns to previous screen  */
  goBack() {
    this._location.back();
  }

}
