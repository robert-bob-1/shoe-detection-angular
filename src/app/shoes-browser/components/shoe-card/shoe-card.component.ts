import { Component, Input } from '@angular/core';
import { shoePlaceholder } from '../../constants/shoe-placeholder';

import { Shoe } from '../../models/shoe-model';

@Component({
    selector: 'shoe-card',
    templateUrl: './shoe-card.component.html',
    styleUrls: ['./shoe-card.component.scss']
})
export class ShoeCardComponent {
    @Input() shoe: Shoe = shoePlaceholder;

    currentPhotoIndex = 0;

    isNextPhotoAvailable() {
        return this.currentPhotoIndex < this.shoe.photos.length - 1;
    }

    isPreviousPhotoAvailable() {
        return this.currentPhotoIndex > 0;
    }

    nextPhoto() {
        this.currentPhotoIndex += 1;
    }

    previousPhoto() {
        this.currentPhotoIndex -= 1;
    }
}
