import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-base-encoding',
    templateUrl: './base-encoding.component.html',
    styleUrls: ['./base-encoding.component.css']
})
export class BaseEncodingComponent implements OnInit {
    encodedText;
    decodedText;
    textToEncode;
    textToDecode;

    constructor() {
    }

    ngOnInit() {
    }

    encode() {
        this.encodedText = btoa(this.textToEncode);
    }

    decode() {
        this.decodedText = atob(this.textToDecode);
    }
}
