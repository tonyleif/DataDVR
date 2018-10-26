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
        // console.log(JSON.stringify(this));
    }

    get noImageUrl(): boolean {
        // if (this.officialImageSrc == null) {
        //     console.log('no image for ' + this.lastName);
        // } else {
        //     console.log('got image for ' + this.lastName);
        // }
        return (this.officialImageSrc == null);
    }
}
