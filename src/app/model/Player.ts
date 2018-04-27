export class Player {
    id: number;
    officialImageSrc: string;
    lastName: string;
    firstName: string;

    constructor(json: any) {
        this.id = json.ID;
        if (json.officialImageSrc) {
            this.officialImageSrc = json.officialImageSrc;
        }
        this.lastName = json.LastName;
        this.firstName = json.FirstName;
    }

    get noImageUrl(): boolean {
        return (this.officialImageSrc == null);
    }
}
