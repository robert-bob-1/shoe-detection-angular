import { Component, Input } from '@angular/core';

import { Website } from '../../models/website';

@Component({
    selector: 'website-card',
    templateUrl: './website-card.component.html',
    styleUrls: ['./website-card.component.scss']
})
export class WebsiteCardComponent {
    @Input() website: Website = {
        name: '',
        url: '',
        logo: ''
    }

    constructor() { }

    redirectToWebsite(): void {
        window.open(this.website.url, '_blank');
    }
}
