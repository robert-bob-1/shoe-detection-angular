import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[appShoeScroll]'
})
export class ShoeScrollDirective {
    @Output() reachedBottom = new EventEmitter<void>();

    private observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            this.reachedBottom.emit();
        }
    });

    constructor(private element: ElementRef) {}

    ngAfterViewInit() {
        this.observer.observe(this.element.nativeElement);
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

}
