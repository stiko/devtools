import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-binary',
    templateUrl: './binary.component.html',
    styleUrls: ['./binary.component.css']
})
export class BinaryComponent implements OnInit {

    intToBin;
    binInt = [];

    strToBin;
    strBin = [];

    constructor() {
    }

    ngOnInit() {
    }

    convertIntTobin() {
        const binInt = (Number(this.intToBin) >>> 0).toString(2);
        this.binInt[this.binInt.length] = {from: this.intToBin, to: binInt};
    }

    convertStrToBin() {
        let strBin = '';
        for (let i = 0; i < this.strToBin.length; i++) {
            strBin += this.strToBin[i].charCodeAt(0).toString(2) + ' ';
        }

        this.strBin[this.strBin.length] = {from: this.strToBin, to: strBin};
    }
}
