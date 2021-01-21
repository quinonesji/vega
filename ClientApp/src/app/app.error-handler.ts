import * as Raven from 'raven-js'; 
import { ToastrService } from 'ngx-toastr';
import { ErrorHandler, Inject, NgZone, isDevMode } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  constructor(
    private ngZone: NgZone,
    @Inject(ToastrService) private toastrService: ToastrService) {
  }

  handleError(error: any): void {
    if(!isDevMode())
        Raven.captureException(error.error || error);
    
    else
        throw error;
    
    this.ngZone.run(() => {
        this.toastrService.error("An error occured.", "Error");
    });
  }
} 