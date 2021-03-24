import { Component, OnInit } from '@angular/core';
import { Work } from '../model/work';
import { WorkServiceService } from '../services/work-service.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
    works: Work[];
    worksCounter: number;

    constructor(
        private _workService: WorkServiceService,
        private _location: Location
    ) {}

    ngOnInit(): void {
        this.worksCounter = Work.worksCounter;
        this.works = this._workService.getWorks();
    }

    /** Method that returns to previous screen  */
    goBack() {
        this._location.back();
    }
}
