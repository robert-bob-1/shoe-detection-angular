import { GetShoesResponse } from '../models/responses/get-shoes-response';
import { Shoe } from '../models/shoe-model';


export function mapGetShoesResponse(response: GetShoesResponse): Shoe[] {
    return response.shoes.map(shoe => {
        return {
            name: shoe.name,
            brand: shoe.brand,
            price: shoe.price,
            url: shoe.url,
            photos: shoe.images.map(image => 'data:image/jpeg;base64,' + image.image)
        };
    });
}
