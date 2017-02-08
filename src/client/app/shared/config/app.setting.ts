import {Config} from './env.config';

export class AppSettings {
    // Error message
    public static INTERNAL_ERROR: string = 'Internal server error';
    public static LOGIN_WRONG: string = 'Username or password is incorrect';
    public static SAVED_DATA: string = 'Your data was saved!';
    public static UPDATED_DATA: string = 'Your data was updated!';
    public static PAYMENT_SUCCESS: string = 'Thanks for your payment.';
    public static CHECK_YOUR_PERMISSION: string = 'Please check your permission!';
    public static LONG_TIME_TO_COMPLETE: string = 'This process can take a long time to complete!.';
    public static CREATE_GOAL_FAIL: string = 'Create failed, Please check your permission on Salesforce!';
    // Constant
    public static TIMEOUT: number = 10000;
    public static SUCCESS: string = 'success';
    public static FAIL: string = 'fail';
    public static INFO: string = 'info';
    public static WARNING: string = 'warning';

}
