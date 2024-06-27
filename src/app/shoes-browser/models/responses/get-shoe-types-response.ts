export interface GetShoeTypesResponse {
    // the returned shoe types in dictionary format {string, float}
    shoeTypes: { [key: string]: number };
}