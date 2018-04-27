export class Team {
    ID: number;
    City: string;
    Name: string;
    officialImageSrc: string;

    constructor(json: any) {
        this.ID = json.id;
        this.City = json.City;
        this.Name = json.Name;
        this.officialImageSrc = json.officialImageSrc;
    }
}
