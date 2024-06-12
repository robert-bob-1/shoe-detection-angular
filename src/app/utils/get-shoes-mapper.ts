import { GetShoesResponse, GetShoesWithImageResponse } from '../models/responses/get-shoes-response';
import { Shoe } from '../models/shoe-model';

const imagePrefix = 'data:image/jpeg;base64,';

export function mapGetShoesResponse(response: GetShoesResponse): Shoe[] {
    return response.shoes.map(shoe => {
        return {
            name: shoe.name,
            brand: shoe.brand,
            price: shoe.price,
            url: shoe.url,
            photos: shoe.images.map(image => imagePrefix + image.image)
        };
    });
}

export function mapGetShoesWithImageResponse(response: GetShoesWithImageResponse): Shoe[] {
    return response.shoes.map(shoe => {
        return {
            name: shoe.name,
            brand: shoe.brand,
            price: shoe.price,
            url: shoe.url,
            photos: [imagePrefix + shoe.image]
        };
    });
}
