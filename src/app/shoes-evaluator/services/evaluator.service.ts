import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { GetShoeTypesResponse } from '../../shoes-browser/models/responses/get-shoe-types-response';
import { GetSimilarShoesResponse } from '../models/responses';
import { MessageShoesAndConfidence, ShoeAndConfidence } from '../models/shoes';
import { mapGetSimilarShoesResponse } from '../utils/mappers';

@Injectable({
    providedIn: 'root'
})
export class EvaluatorService {
    url = 'http://localhost:8080/evaluate/';

    constructor(
        private httpClient: HttpClient
    ) { }

    findSimilarImages(imageBase64: string): Observable<MessageShoesAndConfidence> {
        const imageBlob = this.dataURItoBlob(imageBase64);
        const formData = new FormData();
        formData.append('image', imageBlob);

        return this.httpClient.post<GetSimilarShoesResponse>(`${this.url}all_properties_no_classification/`, formData).pipe(
            map((response: GetSimilarShoesResponse) => {
                console.log(response);
                const shoeAndConfidenceList = mapGetSimilarShoesResponse(response);
                console.log('converted response:', shoeAndConfidenceList)
                const responseMessage = response.message;
                return {
                    'message': responseMessage,
                    'shoeAndConfidenceList': shoeAndConfidenceList
                };
            }),
            catchError(error => {
                return of({
                    'message': 'Error encountered: ' + error.error.error,
                    'shoeAndConfidenceList': []
                });
            })
        )  as Observable<MessageShoesAndConfidence>;
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
