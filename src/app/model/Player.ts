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

    constructor(json?: any) {
        if (json) {
            if (json.ID) {
                this.id = json.ID;
            } else {
                this.id = json.id;
            }
            if (json.officialImageSrc) {
                this.officialImageSrc = json.officialImageSrc;
            } else {
                this.officialImageSrc = null;
            }
            if (json.LastName !== undefined) {
                this.lastName = json.LastName;
            } else {
                this.lastName = json.lastName;
            }
            if (json.FirstName !== undefined) {
                this.firstName = json.FirstName;
            } else {
                this.firstName = json.firstName;
            }
            if (json.Position !== undefined) {
                this.position = json.Position;
            } else {
                this.position = json.position;
            }
            if (json.Height !== undefined) {
                this.height = json.Height;
            } else {
                this.height = json.height;
            }
            if (json.Weight !== undefined) {
                this.weight = json.Weight;
            } else {
                this.weight = json.weight;
            }
            if (json.Age !== undefined) {
                this.age = json.Age;
            } else {
                this.age = json.age;
            }
            if (json.JerseyNumber !== undefined) {
                this.jerseyNumber = json.JerseyNumber;
            } else {
                this.jerseyNumber = json.jerseyNumber;
            }
        }
    }

    get noImageUrl(): boolean {
        return (this.officialImageSrc == null);
    }

    get fullName(): string {
        return this.firstName + ' ' + this.lastName + ' (' + this.position + ')';
    }
}
