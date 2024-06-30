import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteResponse } from '../../home/models/responses';
import { Observable, map, shareReplay } from 'rxjs';
import { Website } from '../../home/models/website';

@Injectable({
    providedIn: 'root'
})
export class WebsiteService {
    url = 'http://localhost:8082/api/website';

    private cachedWebsites$: Observable<Website[]> | null = null;

    constructor(
        private httpClient: HttpClient
    ) { }

    getWebsites(): Observable<Website[]> {
        if (this.cachedWebsites$) {
            return this.cachedWebsites$;
        }

        this.cachedWebsites$ = this.httpClient.get<WebsiteResponse[]>(this.url).pipe(
            map((response: WebsiteResponse[]) => {
                return response.map((website: WebsiteResponse) => {
                    return {
                        name: website.name,
                        url: website.url,
                        logo: website.logo
                    };
                });
            }),
            shareReplay(1)
        );

        return this.cachedWebsites$;
    }
}
