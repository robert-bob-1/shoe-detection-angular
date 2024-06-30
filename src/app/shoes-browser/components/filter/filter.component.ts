import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Website } from 'src/app/home/models/website';

import { ShoeType, shoeTypesBackendMap } from 'src/app/shared/models/shoe-types';
import { WebsiteService } from 'src/app/shared/services/website.service';
import { Filters } from '../../models/filters';
import { ShoesMetadataService } from '../../services/shoes-metadata.service';

@Component({
    selector: 'filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    minPrice = 0;
    maxPrice = 1000;

    shoeTypes = Object.values(ShoeType);
    selectedShoeTypes: string[] = [];

    websites: Website[] = [];
    selectedWebsite: string | undefined = undefined;

    selectedBrand: string | undefined = undefined;

    selectedColor: string | undefined = undefined;

    constructor(
        private readonly shoeMetadataService: ShoesMetadataService,
        private websiteService: WebsiteService
    ) { }

    ngOnInit(): void {
        this.websiteService.getWebsites().subscribe(websites =>
            this.websites = websites
        );
    }

    onShoeTypeChange(event: MatCheckboxChange): void {
        const shoeType = shoeTypesBackendMap.get(event.source.value as ShoeType);
        if (!shoeType) {
            console.error('Invalid shoe type. This can\'t happen. Programmer error.');
            return;
        }
        if (event.checked) {
            this.selectedShoeTypes.push(shoeType);
        } else {
            this.selectedShoeTypes = this.selectedShoeTypes.filter(type => type !== shoeType);
        }
        console.log(this.selectedShoeTypes)
    }

    onWebsiteChange(event: MatSelectChange): void {
        console.log(event)
        this.selectedWebsite = event.value;
        console.log(this.selectedWebsite)
    }

    onBrandChange(brand: string): void {
        this.selectedBrand = brand;
        console.log(this.selectedBrand)
    }

    onColorChange(colorCode: string): void {
        this.selectedColor = colorCode;
        console.log(this.selectedColor)
    }

    onApplyFilters(): void {
        const filters: Filters = {
            minPrice: this.minPrice,
            maxPrice: this.maxPrice,
            shoeTypes: this.selectedShoeTypes,
            website: this.selectedWebsite,
            brand: this.selectedBrand,
            color: this.selectedColor
        };

        this.shoeMetadataService.applyFilters(filters);
    }
}
