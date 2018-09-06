import {Component, OnInit} from '@angular/core';
import * as sha512 from 'js-sha512';

@Component({
    selector: 'app-hash',
    templateUrl: './hash.component.html',
    styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {
    textToHash;
    hashedText;

    constructor() {
    }

    ngOnInit() {
    }
    hash() {
        // @ts-ignore
        this.hashedText = sha512(this.textToHash);
    }
}
