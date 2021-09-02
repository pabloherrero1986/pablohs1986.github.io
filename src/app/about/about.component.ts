import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    typedStrings: String[];

    constructor() {}

    ngOnInit(): void {
        this.typedStrings = [
            "I'm a developer",
            'I ' + String.fromCodePoint(0x2764) + ' front',
            'I ' + String.fromCodePoint(0x2764) + ' back',
            "I'm a geek",
            'I ' + String.fromCodePoint(0x2764) + ' Java',
            'I ' + String.fromCodePoint(0x2764) + ' JavaScript',
            'I ' + String.fromCodePoint(0x2764) + ' TypeScript',
            'I ' + String.fromCodePoint(0x2764) + ' Dart',
            'I ' + String.fromCodePoint(0x2764) + ' tea',
            'I ' + String.fromCodePoint(0x2764) + ' dark side',
            "I'm creative",
            'I ' + String.fromCodePoint(0x2764) + ' Spring',
            'I ' + String.fromCodePoint(0x2764) + ' Angular',
            'I ' + String.fromCodePoint(0x2764) + ' React',
            'I ' + String.fromCodePoint(0x2764) + ' React Native',
            'I ' + String.fromCodePoint(0x2764) + ' Flutter',
            "I'm pragmatic",
            'I ' + String.fromCodePoint(0x2764) + ' SQL',
            'I ' + String.fromCodePoint(0x2764) + ' Mongo',
            'I ' + String.fromCodePoint(0x2764) + ' Git',
            'I ' + String.fromCodePoint(0x2764) + ' Firebase',
            "I'm a student",
            'I ' + String.fromCodePoint(0x2764) + ' beer',
            'I ' + String.fromCodePoint(0x2764) + ' Clean Code',
            'I ' + String.fromCodePoint(0x2764) + ' to learn',
            "I'm inquisitive",
            'I ' + String.fromCodePoint(0x2764) + ' teamwork',
            'I ' + String.fromCodePoint(0x2764) + ' problems',
            'I ' + String.fromCodePoint(0x2764) + ' guitars',
            "I'm a developer",
        ];
    }
}
