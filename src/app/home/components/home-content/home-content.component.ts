import { Component } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Website } from '../../models/website';

@Component({
    selector: 'home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {

    loading = true;
    websites: Website[] = [];

    constructor(
        private readonly websiteService: WebsiteService
    ) { }

    ngOnInit(): void {
        this.websiteService.getWebsites().subscribe((websites: Website[]) => {
            this.websites = websites;
            this.loading = false;
        });
    }
}
