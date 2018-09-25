export class DefenseSepecialTeamsStats {
    teamAbbreviation: string;
    sacks: number; // 1 pt
    fumblesRecovered: number;
    // DFR	Defensive/ST Fumble Recovered (ID/DT/DST)	2 points
    interceptions: number;
    // Int	Interceptions	2 pointsIntTD	Interception TD	6 points
    blockedKicks: number; // 2 points
    // BFG Blocked Field Goals 2 points
    // BP	Blocked Punts (ID/ST/DST)	2 points
    // BXP	Blocked Extra Points (ID/ST/DST)	2 points
    touchDowns: number;
    // BFTD	Blocked Field Goal Touchdown (ID/ST/DST)	6 points
    // BPTD	Blocked Punt Touchdown (ID/ST/DST)	6 points
    // DFRTD	Defensive Fumble Recovery TD (ID/DT/DST)	6 points
    // KRTD	Kick Return TD (ID/ST/DST)	6 points
    // PRTD	Punt Return TD (ID/ST/DST)	6 points
    // SFRTD	Special Team Fumble Recovery for TD	6 points
    twoPointConversionReturns: number;
    // ST2PT	Special Teams Conversion Return for Two-points (ID/ST/DST)	2 points
    safeties: number;
    // STY	Safety	2 points
    accruedStatsOnLastPlay: boolean;

    constructor(teamAbbr: string) {
        this.teamAbbreviation = teamAbbr;
        this.sacks = 0;
        this.fumblesRecovered = 0;
        this.interceptions = 0;
        this.blockedKicks = 0;
        this.touchDowns = 0;
        this.twoPointConversionReturns = 0;
        this.safeties = 0;
        this.accruedStatsOnLastPlay = false;
    }

    get sacksNoZero(): string {
        if (this.sacks !== 0) {
            return this.sacks.toString();
        }
        return '';
    }

    get fumblesRecoveredNoZero(): string {
        if (this.fumblesRecovered !== 0) {
            return this.fumblesRecovered.toString();
        }
        return '';
    }

    get interceptionsNoZero(): string {
        if (this.interceptions !== 0) {
            return this.interceptions.toString();
        }
        return '';
    }

    get blockedKicksNoZero(): string {
        if (this.blockedKicks !== 0) {
            return this.blockedKicks.toString();
        }
        return '';
    }

    get touchDownsNoZero(): string {
        if (this.touchDowns !== 0) {
            return this.touchDowns.toString();
        }
        return '';
    }

    get twoPointConversionReturnsNoZero(): string {
        if (this.twoPointConversionReturns !== 0) {
            return this.twoPointConversionReturns.toString();
        }
        return '';
    }

    get safetiesNoZero(): string {
        if (this.safeties !== 0) {
            return this.safeties.toString();
        }
        return '';
    }

    get fantasyPoints(): number {
        let total = 0;
        total += this.sacks;
        total += this.fumblesRecovered * 2;
        total += this.interceptions * 2;
        total += this.touchDowns * 6;
        total += this.blockedKicks * 2;
        total += this.safeties * 2;
        total += this.twoPointConversionReturns * 2;
        return total;
    }
}
