import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { shoePlaceholder } from 'src/app/constants/shoe-placeholder';
import { Shoe } from 'src/app/models/shoe-model';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
    selector: 'shoe-card-list',
    templateUrl: './shoe-card-list.component.html',
    styleUrls: ['./shoe-card-list.component.scss']
})
export class ShoeCardListComponent implements OnInit {
    shoes: Shoe[] = [];
    loadingInitial = true;
    loadingScroll = false;

    page = 1;
    pageSize = 5;
    totalPages = 0;

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly shoesService: ShoesService
    ) {}

    ngOnInit() {
        this.subscription.add(
            this.shoesService.getShoes(1, this.pageSize).subscribe(({ shoes, totalPages }) => {
                this.totalPages = totalPages;
                this.loadingInitial = false;
                this.shoes = shoes;
            })
        );
    }

    onReachingBottom() {
        this.loadingScroll = true;
        this.page++;

        this.subscription.add(
            this.shoesService.getShoes(this.page, this.pageSize).subscribe(({ shoes }) => {
                this.shoes = this.shoes.concat(shoes);
                this.loadingScroll = false;
            })
        );
    }

    arePagesLeft(): boolean {
        console.log(this.page, this.totalPages);
        return this.page < this.totalPages;
    }
}
