import { Shoe } from "src/app/shared/models/shoe-model";


export interface ShoeAndConfidence {
    shoe: Shoe;
    confidence: number;
}

export interface MessageShoesAndConfidence {
    shoeAndConfidenceList: ShoeAndConfidence[];
    message: string;
}
