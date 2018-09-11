export class Team {
    ID: number;
    City: string;
    Name: string;
    Abbreviation: string;
    officialImageSrc: string;

    constructor(json: any) {
        this.ID = json.id;
        this.City = json.City;
        this.Name = json.Name;
        this.Abbreviation = json.Abbreviation;
        this.officialImageSrc = json.officialImageSrc;
    }
}
