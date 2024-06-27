import { Component } from '@angular/core';

import { EvaluatorService } from '../../services/evaluator.service';

@Component({
    selector: 'shoe-upload',
    templateUrl: './shoe-upload.component.html',
    styleUrls: ['./shoe-upload.component.scss']
})
export class ShoeUploadComponent {
    selectedFile: File | null = null;
    imagePreview: string | ArrayBuffer | null = '';

    currentShoeTypes: { [key: string]: number; } = {};

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

    onComputeColorSimilarity(): void {
        if (this.imagePreview && typeof this.imagePreview === 'string') {
            // Call the service to compute the color similarity
            // this.evaluatorService.computeColorSimilarity(this.imagePreview).subscribe(response => {
            //     console.log(response);
            // });
        } else {
            console.error('No image selected or incorrect imagePreview type.');
        }
    }

    onComputeShoeTypes(): void {
        if (this.imagePreview && typeof this.imagePreview === 'string') {
            // Call the service to compute the shoe types
            this.evaluatorService.getShoeTypes(this.imagePreview).subscribe(shoeTypesDict => {
                this.currentShoeTypes = shoeTypesDict;
            });
        } else {
            console.error('No image selected or incorrect imagePreview type.');
        }
    }
}
