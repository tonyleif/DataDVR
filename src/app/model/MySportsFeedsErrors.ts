import { MySportsFeedsError } from './MySportsFeedsError';

export class MySportsFeedsErrors {
    mySportsFeedsErrors: Array<MySportsFeedsError>;
    errorListType: ErrorListType;

    constructor(json: any, errorListType: ErrorListType) {
        this.errorListType = errorListType;
        this.mySportsFeedsErrors = new Array<MySportsFeedsError>();
        // const jsonObject = JSON.parse(json);
        if (json) {
            json.mySportsFeedsErrors.forEach(errJson => {
                const err = new MySportsFeedsError(errJson);
                this.mySportsFeedsErrors.push(err);
            });
        }
    }

    addError(err: MySportsFeedsError) {
        this.mySportsFeedsErrors.push(err);
        this.saveToLocalStorage();
    }

    // Save to localStorage
    saveToLocalStorage() {
        localStorage.setItem(this.errorListType, JSON.stringify(this));
    }

}

export enum ErrorListType {
    MySportsFeedsErrors = 'MySportsFeedsErrors',
    MyBugs = 'MyBugs'
}
