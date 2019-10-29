export class Player {
    id: number;
    officialImageSrc: string;
    lastName: string;
    firstName: string;
    position: string;
    height: string;
    weight: number;
    age: number;
    jerseyNumber: number;

    constructor(json: any) {
        this.id = json.ID;
        if (json.officialImageSrc) {
            this.officialImageSrc = json.officialImageSrc;
        } else {
            this.officialImageSrc = null;
        }
        this.lastName = json.LastName;
        this.firstName = json.FirstName;
        this.position = json.Position;
        this.height = json.Height;
        this.weight = json.Weight;
        this.age = json.Age;
        this.jerseyNumber = json.JerseyNumber;
    }

    get noImageUrl(): boolean {
        return (this.officialImageSrc == null);
    }

    get fullName(): string {
        return this.firstName + ' ' + this.lastName + ' (' + this.position + ')';
    }
}
