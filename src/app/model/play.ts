import { LineOfScrimmage } from '../model/LineOfScrimmage';

export class Play {
    index: number;
    description: string;
    quarter: number;
    time: string;
    currentDown: number;
    yardsRemaining: number;
    lineOfScrimmage: LineOfScrimmage;

    constructor(json: any, i: number) {
        // console.log(JSON.stringify(json));
        this.index = i;
        this.description = json.description;
        this.quarter = json.quarter;
        this.time = json.time;
        this.currentDown = json.currentDown;
        this.yardsRemaining = json.yardsRemaining;
        if (json.lineOfScrimmage) {
            this.lineOfScrimmage = new LineOfScrimmage(json.lineOfScrimmage);
            console.log('play constructor');
            console.log(JSON.stringify(this.lineOfScrimmage));
        }
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

    get downAndDistance(): string {
        let dnd: string;
        // console.log('downAndDistance down ' + this.currentDown);
        switch (+this.currentDown) {
            case 1:
                // console.log('case 1');
                dnd = '1st and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;
                break;
            case 2:
                // console.log('case 2');
                dnd = '2nd and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;;
                break;
            case 3:
                // console.log('case 3');
                dnd = '3rd and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;;
                break;
            case 4:
                // console.log('case 4');
                dnd = '4th and ' + this.yardsRemaining + ' at ' + this.lineOfScrimmage.team + ' ' + this.lineOfScrimmage.yardLine;;
                break;
            default:
                // console.log('default case');
                dnd = '';
                break;
        }
        // console.log(dnd);
        return dnd;
    }
}
