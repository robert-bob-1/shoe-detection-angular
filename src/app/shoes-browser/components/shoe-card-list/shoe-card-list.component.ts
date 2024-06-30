import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Shoe } from '../../models/shoe-model';
import { ShoesMetadataService } from '../../services/shoes-metadata.service';

@Component({
    selector: 'shoe-card-list',
    templateUrl: './shoe-card-list.component.html',
    styleUrls: ['./shoe-card-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoeCardListComponent implements OnInit {
    // @Input() shoeList: Shoe[] = [];

    shoes: Shoe[] = [];
    loadingInitial = true;
    loadingScroll = false;

    page = 1;
    pageSize = 5;
    totalPages = 0;

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly shoesMetadataService: ShoesMetadataService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscription.add(
            this.shoesMetadataService.getShoes(1, this.pageSize).subscribe(({ shoes, totalPages }) => {
                this.totalPages = totalPages;
                this.loadingInitial = false;
                this.shoes = shoes;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    onReachingBottom() {
        this.loadingScroll = true;
        this.page++;

        this.subscription.add(
            this.shoesMetadataService.getShoes(this.page, this.pageSize).subscribe(({ shoes }) => {
                this.shoes = this.shoes.concat(shoes);
                this.loadingScroll = false;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    arePagesLeft(): boolean {
        console.log(this.page, this.totalPages);
        return this.page < this.totalPages;
    }
}
