import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, shareReplay, switchMap, tap } from 'rxjs';

import { Shoe } from '../models/shoe-model';
import { GetShoesResponse } from '../models/responses/get-shoes-response';
import { mapGetShoesResponse } from '../utils/get-shoes-mapper';
import { Filters } from '../models/filters';

@Injectable({
    providedIn: 'root'
})
export class ShoesMetadataService {
    url = 'http://localhost:8082/api/';

    filters$: Observable<Filters>;

    private filtersSubject = new BehaviorSubject<Filters>({});

    constructor(
        private httpClient: HttpClient
    ) {
        this.filters$ = this.filtersSubject.asObservable();
    }

    applyFilters(filters: Filters): void {
        this.filtersSubject.next(filters);
    }

    getShoes(filters: Filters, page = 1, page_size = 5): Observable<{ shoes: Shoe[], totalPages: number }> {
        const urlParams = new URLSearchParams({
            page: page.toString(),
            size: page_size.toString()
        });

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== '') {
                urlParams.set(key, value);
            }
        });

        return this.httpClient.get<GetShoesResponse>(`${this.url}shoe-metadata?${urlParams.toString()}`).pipe(
            map((response: GetShoesResponse) => {
                const shoes = mapGetShoesResponse(response);
                const totalPages = response.totalPages;
                return { shoes, totalPages };
            })
        );
    }
}
