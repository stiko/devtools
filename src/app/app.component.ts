import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '../../node_modules/@angular/cdk/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    title = 'Dev Tools';
    mobileQuery: MediaQueryList;
    // fillerNav = Array.from({length: 3}, (_, i) => `Nav Itemmmmmmmm ${i + 1}`);
    fillerNav = [
        {name: 'Encode/Decode', link: '/base64'},
        {name: 'Hash', link: '/hash'},
        {name: 'String', link: '/string'},
        {name: 'Binary', link: '/binary'}
    ];

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 800px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
