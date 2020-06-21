import { ArrayType } from '@angular/compiler';

export class Progress {
    constructor(id, time, performBy, progress){
        this.id = id
        this.time = time
        this.performBy = performBy
        this.progress = progress
    }

    "id": string;
    "time": null;
    "performBy": string;
    "progress": string;
    
}