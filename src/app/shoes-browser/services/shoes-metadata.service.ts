import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Shoe } from '../models/shoe-model';
import { GetShoesResponse } from '../models/responses/get-shoes-response';
import { mapGetShoesResponse } from '../utils/get-shoes-mapper';

@Injectable({
    providedIn: 'root'
})
export class ShoesMetadataService {
    url = 'http://localhost:8082/api/';

    constructor(
        private httpClient: HttpClient
    ) { }

    getShoes(page = 1, page_size = 5): Observable<{ shoes: Shoe[], totalPages: number }> {
        return this.httpClient.get<GetShoesResponse>(`${this.url}shoe-metadata?page=${page}&size=${page_size}`).pipe(
            map((response: GetShoesResponse) => {
                const shoes = mapGetShoesResponse(response);
                const totalPages = response.totalPages;
                return { shoes, totalPages };
            })
        );
    }
}
