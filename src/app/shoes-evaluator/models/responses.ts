import { ShoeResponse } from "src/app/shoes-browser/models/responses/get-shoes-response"

export interface ShoeAndConfidenceResponse {
    shoe: ShoeResponse;
    confidence: number;
}

export interface GetSimilarShoesResponse {
    message: string;
    shoe_confidence_pairs: ShoeAndConfidenceResponse[];
}


