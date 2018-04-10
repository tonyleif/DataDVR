export class Play {
    index: number;
    description: string;
    quarter: number;
    time: string;
    currentDown: number;

    constructor(json: any, i: number) {
        // const jsonObject = JSON.parse(json);
        this.index = i;
        this.description = json.description;
        this.quarter = json.quarter;
        this.time = json.time;
        this.currentDown = json.currentDown;
    }

    private get minutes(): number {
        const minuteNumber: number = parseInt(this.time.split(':')[0], 10);
        return minuteNumber;
    }

    private get seconds(): number {
        return parseInt(this.time.split(':')[1], 10);
    }

    get clock(): string {
        console.log('time: ' + this.time + ' minutes: ' + this.minutes + ' seconds: ' + this.seconds);
        let clockString = '';
        let clockMinutes: number = 15 - this.minutes - 1;
        const clockSeconds: number = 60 - this.seconds;
        if (this.seconds === 0) {
            clockMinutes++;
        }
        console.log('clockString (empty): ' + clockString);
        if (clockMinutes < 10) {
            clockString = '0';
        }
        console.log('clockString (0): ' + clockString);
        clockString += clockMinutes.toString() + ':';
        console.log('clockString (minutes): ' + clockString);
        if (clockSeconds === 60) {
            clockString += '00';
        } else if (clockSeconds < 10) {
            clockString += '0' + clockSeconds.toString();
        } else {
            clockString += clockSeconds.toString();
        }
        console.log('clockString (final): ' + clockString);
        return clockString;
    }
}
