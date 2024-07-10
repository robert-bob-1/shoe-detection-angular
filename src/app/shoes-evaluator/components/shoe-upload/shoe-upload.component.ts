import { Component } from '@angular/core';

import { EvaluatorService } from '../../services/evaluator.service';
import { MessageShoesAndConfidence, ShoeAndConfidence } from '../../models/shoes';
import { catchError, of } from 'rxjs';

@Component({
    selector: 'shoe-upload',
    templateUrl: './shoe-upload.component.html',
    styleUrls: ['./shoe-upload.component.scss']
})
export class ShoeUploadComponent {
    loading = false;

    processingMessage = '';
    errorMessage  = '';

    selectedFile: File | null = null;
    imagePreview: string | ArrayBuffer | null = '';

    currentShoeTypes: { [key: string]: number; } = {};
    similarShoes: ShoeAndConfidence[] = [];

    constructor(
        private evaluatorService: EvaluatorService
    ) { }

    onFileSelected(event: Event): void {
        const fileInput = event.target as HTMLInputElement;
        if (fileInput.files && fileInput.files.length > 0) {
            this.selectedFile = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
                this.errorMessage = '';
                //log the imagePreview type
                console.log(typeof this.imagePreview);
            };
            reader.readAsDataURL(this.selectedFile);
        }
    }

    onFindSimilarShoes(): void {
        this.errorMessage = '';
        this.loading = true;

        if (this.imagePreview && typeof this.imagePreview === 'string') {
            // Call the service to find similar shoes
            this.evaluatorService.findSimilarImages(this.imagePreview).pipe(
                catchError(error => {
                    console.error(error);
                    this.loading = false;
                    this.errorMessage = 'Error encountered: ' + error.error.error;
                    return of({
                        message: 'Error encountered: ' + error.error.error,
                        shoeAndConfidenceList: []
                    });
                }),
            ).subscribe((response: MessageShoesAndConfidence) => {
                console.log(response);
                this.processingMessage = response.message;
                this.similarShoes = response.shoeAndConfidenceList;
                this.loading = false;
            });
        } else {
            console.error('No image selected or incorrect imagePreview type.');
        }
    }
}
