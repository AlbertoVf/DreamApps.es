import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
    transform(images: any): string {
        if (!images) {
            return 'assets/img/banner/no-image.png';
        } else if (images.length > 0) {
            return images.url;
        } else {
            return 'assets/img/banner/no-image.png';
        }
    }
}
