import { Component } from '@angular/core';

import { EvaluatorService } from '../../services/evaluator.service';
import { ShoeAndConfidence } from '../../models/shoes';

@Component({
    selector: 'shoe-upload',
    templateUrl: './shoe-upload.component.html',
    styleUrls: ['./shoe-upload.component.scss']
})
export class ShoeUploadComponent {
    loading = false;

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
                //log the imagePreview type
                console.log(typeof this.imagePreview);
            };
            reader.readAsDataURL(this.selectedFile);
        }
    }

    onComputeShoeTypes(): void {
        this.loading = true;
        if (this.imagePreview && typeof this.imagePreview === 'string') {
            // Call the service to compute the shoe types
            this.evaluatorService.getShoeTypes(this.imagePreview).subscribe(shoeTypesDict => {
                this.currentShoeTypes = shoeTypesDict;
                this.loading = false;
            });
        } else {
            console.error('No image selected or incorrect imagePreview type.');
        }
    }

    onFindSimilarShoes(): void {
        this.loading = true;

        if (this.imagePreview && typeof this.imagePreview === 'string') {
            // Call the service to find similar shoes
            this.evaluatorService.findSimilarImages(this.imagePreview).subscribe(response => {
                console.log(response);
                this.similarShoes = response;
                this.loading = false;
            });
        } else {
            console.error('No image selected or incorrect imagePreview type.');
        }
    }
}
