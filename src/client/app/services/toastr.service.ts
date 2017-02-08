import { Injectable } from '@angular/core';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';
import { AppSettings } from '../shared/config/app.setting';

@Injectable()
export class ToastrService {
    constructor(public toastr: ToastsManager) {

    }

    showToastr(type: string, title: string, message: string): void {
        switch (type) {
            case AppSettings.SUCCESS:
                this.toastr.success(message, title)
                    .then((toast: Toast) => {
                        setTimeout(() => {
                            this.toastr.dismissToast(toast);
                        }, AppSettings.TIMEOUT);
                    });
                break;
            case AppSettings.FAIL:
                this.toastr.error(message, title)
                    .then((toast: Toast) => {
                        setTimeout(() => {
                            this.toastr.dismissToast(toast);
                        }, AppSettings.TIMEOUT);
                    });
                break;
            case AppSettings.INFO:
                this.toastr.info(message, title)
                    .then((toast: Toast) => {
                        setTimeout(() => {
                            this.toastr.dismissToast(toast);
                        }, AppSettings.TIMEOUT);
                    });
                break;
            case AppSettings.WARNING:
                this.toastr.warning(message, title)
                    .then((toast: Toast) => {
                        setTimeout(() => {
                            this.toastr.dismissToast(toast);
                        }, 10000);
                    });
                break;
        }
    }
}