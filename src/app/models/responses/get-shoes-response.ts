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
    page: number;
    pages: number;
    total: number;
    shoes: ShoeResponse[];
}
