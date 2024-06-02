import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading-mask',
    templateUrl: './loading-mask.component.html',
    styleUrls: ['./loading-mask.component.scss']
})
export class LoadingMaskComponent {
    @Input() message: string = 'Loading shoes...';

    constructor() {}
}
