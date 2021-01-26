import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { XhrFactory } from "@angular/common/http";

@Injectable()
export class ProgressService {
  private uploadProgress: Subject<any>;

  startTracking() { 
    this.uploadProgress = new Subject();
    return this.uploadProgress;
  }

  notify(progress) {
    this.uploadProgress.next(progress);
  }

  endTracking() {
    this.uploadProgress.complete();
  }
}

@Injectable()
export class XhrFactoryWithProgress extends XhrFactory {

  constructor(private service: ProgressService) { super(); }

  build(): XMLHttpRequest {
    var xhr: XMLHttpRequest = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      this.service.notify(this.createProgress(event));
    };

    return xhr; 
  }

  private createProgress(event) {
    return {
        total: event.total,
        percentage: Math.round(event.loaded / event.total * 100)
    };
  }
} 