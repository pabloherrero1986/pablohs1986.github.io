import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/model/work';

@Component({
    selector: 'app-item-work',
    templateUrl: './item-work.component.html',
    styleUrls: ['./item-work.component.css'],
})
export class ItemWorkComponent implements OnInit {
    @Input() work: Work;

    constructor() {}

    ngOnInit(): void {}
}
