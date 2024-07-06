import { GetSimilarShoesResponse } from "../models/responses";
import { ShoeAndConfidence } from "../models/shoes";

const imagePrefix = 'data:image/jpeg;base64,';

export function mapGetSimilarShoesResponse(response: GetSimilarShoesResponse): ShoeAndConfidence[] {
    return response.shoe_confidence_pairs.map(shoeAndConfidence => {
        return {
            shoe: {
                name: shoeAndConfidence.shoe.name,
                brand: shoeAndConfidence.shoe.brand,
                price: shoeAndConfidence.shoe.price,
                url: shoeAndConfidence.shoe.url,
                photos: shoeAndConfidence.shoe.images.map(image => imagePrefix + image.image)
            },
            confidence: shoeAndConfidence.confidence
        };
    });
}