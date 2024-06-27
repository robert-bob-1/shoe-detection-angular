import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Shoe } from '../models/shoe-model';
import { GetShoesWithImageResponse } from '../models/responses/get-shoes-response';
import { mapGetShoesWithImageResponse } from '../utils/get-shoes-mapper';
import { GetShoeTypesResponse } from '../models/responses/get-shoe-types-response';

@Injectable({
    providedIn: 'root'
})
export class EvaluatorService {
    url = 'http://localhost:8080/evaluate/';

    constructor(
        private httpClient: HttpClient
    ) { }

    findSimilarImages(imageBase64: string): Observable<{ shoes: Shoe[], totalPages: number }> {
        const imageBlob = this.dataURItoBlob(imageBase64);
        const formData = new FormData();
        formData.append('image', imageBlob);

        return this.httpClient.post<GetShoesWithImageResponse>(`${this.url}color-similarity/`, formData).pipe(
            map((response: GetShoesWithImageResponse) => {
                console.log(response);
                const shoes = mapGetShoesWithImageResponse(response);
                const totalPages = response.pages;
                return { shoes, totalPages };
            })
        );
    }

    getShoeTypes(imageBase64: string): Observable<{ [key: string]: number }> {
        const imageBlob = this.dataURItoBlob(imageBase64);
        const formData = new FormData();
        formData.append('image', imageBlob);

        return this.httpClient.post<GetShoeTypesResponse>(`${this.url}shoe-types/`, formData).pipe(
            tap(response => console.log(response)),
            map(response => {
                const shoeTypesDict = response.shoeTypes;

                return shoeTypesDict;
            })
        );
    }

    private dataURItoBlob(dataURI: string): Blob {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
}
