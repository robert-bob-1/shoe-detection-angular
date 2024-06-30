export interface WebsiteResponse {
    id: number;
    name: string;
    url: string;
    logo: string;
}

export interface GetWebsitesResponse {
    websites: WebsiteResponse[];
}