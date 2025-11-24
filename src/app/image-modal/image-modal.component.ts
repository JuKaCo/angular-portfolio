import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
    @Input() imageSrc: string | null = null;
    @Input() title: string | null = null;
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }
}
