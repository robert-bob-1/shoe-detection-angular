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
    shoes: Shoe[] = [
        shoePlaceholder,
        shoePlaceholder,
    ]

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly shoesService: ShoesService
    ) {}

    ngOnInit() {
        this.subscription.add(
            this.shoesService.getShoes().subscribe((shoes) => {
                this.shoes = shoes;
            })
        );
    }

}
