export interface ShoeImage {
    id: number;
    image: string;
}

export interface ShoeResponse {
    id: number;
    name: string;
    brand: string;
    price: number;
    url: string;
    images: ShoeImage[];
}

export interface GetShoesResponse {
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    size: number;

    first: boolean;
    last: boolean;
    empty: boolean;

    content: ShoeResponse[];

}

export interface ShoeWithImageResponse {
    id: number;
    name: string;
    brand: string;
    price: number;
    url: string;
    image: string;
}

export interface GetShoesWithImageResponse {
    page: number;
    pages: number;
    total: number;
    shoes: ShoeWithImageResponse[];
}
