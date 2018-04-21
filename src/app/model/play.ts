export class Play {
    index: number;
    description: string;
    quarter: number;
    time: string;
    currentDown: number;
    yardsRemaining: number;

    constructor(json: any, i: number) {
        console.log(json);
        this.index = i;
        this.description = json.description;
        this.quarter = json.quarter;
        this.time = json.time;
        this.currentDown = json.currentDown;
        this.yardsRemaining = json.yardsRemaining;
    }

    private get minutes(): number {
        const minuteNumber: number = parseInt(this.time.split(':')[0], 10);
        return minuteNumber;
    }

    private get seconds(): number {
        return parseInt(this.time.split(':')[1], 10);
    }

    // The time property in the json was how much time had run off the clock but football fans
    // are used to see how much time is left on the clock which what this property shows
    get clock(): string {
        let clockString = '';
        let clockMinutes: number = 15 - this.minutes - 1;
        const clockSeconds: number = 60 - this.seconds;
        if (this.seconds === 0) {
            clockMinutes++;
        }
        if (clockMinutes < 10) {
            clockString = '0';
        }
        clockString += clockMinutes.toString() + ':';
        if (clockSeconds === 60) {
            clockString += '00';
        } else if (clockSeconds < 10) {
            clockString += '0' + clockSeconds.toString();
        } else {
            clockString += clockSeconds.toString();
        }
        return clockString;
    }
}
