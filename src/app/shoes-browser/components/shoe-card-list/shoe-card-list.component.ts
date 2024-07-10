import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, combineLatest, switchMap, tap } from 'rxjs';

import { Shoe } from '../../../shared/models/shoe-model';
import { ShoesMetadataService } from '../../services/shoes-metadata.service';

@Component({
    selector: 'shoe-card-list',
    templateUrl: './shoe-card-list.component.html',
    styleUrls: ['./shoe-card-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoeCardListComponent implements OnInit, OnDestroy {
    // @Input() shoeList: Shoe[] = [];

    shoes: Shoe[] = [];
    loadingInitial = true;
    loadingScroll = false;

    private pageSubject = new BehaviorSubject<number>(0);
    private pageSize = 5;
    totalPages = 0;

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly shoesMetadataService: ShoesMetadataService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscription.add(
            this.shoesMetadataService.filters$.subscribe(() => {
                this.pageSubject.next(0);
                this.totalPages = 1;
                this.shoes = [];
                this.loadingInitial = true;
            })
        );

        this.subscription.add(
            combineLatest([this.shoesMetadataService.filters$, this.pageSubject])
                .pipe(
                    switchMap(([filters, page]) => {
                        this.loadingScroll = true;
                        return this.shoesMetadataService.getShoes(filters, page, this.pageSize);
                    })
                )
                .subscribe(({ shoes, totalPages }) => {
                    this.totalPages = totalPages;
                    this.shoes = this.shoes.concat(shoes);
                    this.loadingInitial = false;
                    this.loadingScroll = false;
                    this.changeDetectorRef.markForCheck();
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onReachingBottom() {
        if (this.loadingInitial || this.loadingScroll || this.pageSubject.getValue() >= this.totalPages - 1) {
            return;
        }

        this.pageSubject.next(this.pageSubject.getValue() + 1);
    }

    arePagesLeft(): boolean {
        return this.pageSubject.getValue() < this.totalPages - 1;
    }

    // ngOnInit() {
    //     this.subscription.add(
    //         this.shoesMetadataService.filters$.subscribe(() => {
    //             this.pageSubject.next(0);
    //             this.totalPages = 1;
    //             this.shoes = [];
    //             this.loadingInitial = true;
    //         })
    //     );

    //     this.subscription.add(
    //         combineLatest([this.shoesMetadataService.filters$, this.pageSubject])
    //             .pipe(
    //                 switchMap(([_, page]) =>
    //                     this.shoesMetadataService.getShoes(page, this.pageSize)
    //                 )
    //             )
    //             .subscribe(({ shoes, totalPages }) => {
    //                 this.totalPages = totalPages;
    //                 this.shoes = this.shoes.concat(shoes);
    //                 this.loadingInitial = false;
    //                 this.loadingScroll = false;
    //                 this.changeDetectorRef.markForCheck();
    //             })
    //     );
    // }

    // ngOnDestroy(): void {
    //     this.subscription.unsubscribe();
    // }

    // onReachingBottom() {
    //     if (this.loadingInitial || this.loadingScroll) {
    //         return;
    //     }

    //     if (this.pageSubject.getValue() >= this.totalPages - 1) {
    //         this.loadingScroll = false;
    //         return;
    //     }

    //     this.loadingScroll = true;
    //     this.pageSubject.next(this.pageSubject.getValue() + 1);
    // }

    // arePagesLeft(): boolean {
    //     return this.pageSubject.getValue() < this.totalPages - 1;
    // }

    // page = 0;
    // pageSize = 5;
    // totalPages = 0;

    // private subscription: Subscription = new Subscription();

    // constructor(
    //     private readonly shoesMetadataService: ShoesMetadataService,
    //     private changeDetectorRef: ChangeDetectorRef
    // ) {}

    // ngOnInit() {
    //     this.subscription.add(
    //         this.shoesMetadataService.filters$.subscribe(() => {
    //             this.page = 0;
    //             this.totalPages = 1;

    //             this.loadShoes(true);
    //         })
    //     );

    //     // this.loadShoes(true);
    // }

    // ngOnDestroy(): void {
    //     this.subscription.unsubscribe();
    // }

    // loadShoes(initial = false) {
    //     if (initial) {
    //         this.loadingInitial = true;
    //         this.shoes = [];
    //         this.page = 0;
    //     } else {
    //         this.loadingScroll = true;
    //         this.page++;
    //     }

    //     if (this.page >= this.totalPages) {
    //         this.loadingScroll = false;
    //         return;
    //     }

    //     this.subscription.add(
    //         this.shoesMetadataService.getShoes(this.page, this.pageSize).subscribe(({ shoes, totalPages }) => {
    //             this.totalPages = totalPages;
    //             this.shoes = initial ? shoes : this.shoes.concat(shoes);
    //             this.loadingInitial = false;
    //             this.loadingScroll = false;
    //             this.changeDetectorRef.markForCheck();
    //         })
    //     );
    // }

    // onReachingBottom() {
    //     if (this.loadingInitial || this.loadingScroll) {
    //         return;
    //     }

    //     this.loadShoes();
    // }

    // arePagesLeft(): boolean {
    //     return this.page < this.totalPages - 1;
    // }
}
