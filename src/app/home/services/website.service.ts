import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteResponse } from '../models/responses';
import { Observable, map } from 'rxjs';
import { Website } from '../models/website';

@Injectable({
    providedIn: 'root'
})
export class WebsiteService {
    url = 'http://localhost:8082/api/website';

    constructor(
        private httpClient: HttpClient
    ) { }

    getWebsites(): Observable<Website[]> {
        return this.httpClient.get<WebsiteResponse[]>(this.url).pipe(
            map((response: WebsiteResponse[]) => {
                return response.map((website: WebsiteResponse) => {
                    return {
                        name: website.name,
                        url: website.url,
                        logo: website.logo
                    };
                });
            })
        );
    }
}
