export class Player {
    id: number;
    officialImageSrc: string;
    lastName: string;
    firstName: string;
    position: string;

    constructor(json: any) {
        this.id = json.ID;
        if (json.officialImageSrc) {
            this.officialImageSrc = json.officialImageSrc;
        }
        this.lastName = json.LastName;
        this.firstName = json.FirstName;
        this.position = json.Position;
    }

    get noImageUrl(): boolean {
        return (this.officialImageSrc == null);
    }
}
