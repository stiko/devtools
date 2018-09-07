import {Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
    selector: 'app-string',
    templateUrl: './string.component.html',
    styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {
    textToLength;
    stringLength;

    textToSlice;
    sliceResult;
    sliceBegin;
    sliceEnd;

    textSubstring;
    substringFrom;
    substringTo;
    substringResult;

    textSubstr;
    substrStart;
    substrLength;
    substrResult;

    @Input()
    matAutosizeMinRows: 6;

    constructor(private ngZone: NgZone) {
    }

    @ViewChild('autosize') autosize: CdkTextareaAutosize;

    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }

    ngOnInit() {
    }

    getLength() {
        this.stringLength = this.textToLength.length;
    }

    getSliceString() {
        if (this.sliceEnd) {
            this.sliceResult = this.textToSlice.slice(this.sliceBegin, this.sliceEnd);

        } else {
            this.sliceResult = this.textToSlice.slice(this.sliceBegin);
        }
    }

    getSubstring() {
        if (this.substringTo) {
            this.substringResult = this.textSubstring.substring(this.substringFrom, this.substringTo);

        } else {
            this.substringResult = this.textSubstring.substring(this.substringFrom);

        }
    }

    getSubstr() {
        if (this.substrStart) {
            this.substrResult = this.textSubstr.substr(this.substrStart, this.substrLength);
        } else {
            this.substrResult = this.textSubstr.substr(this.substrStart);

        }
    }
}
