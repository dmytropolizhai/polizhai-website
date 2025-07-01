
import type { Date, DateDifference } from "@shared/types";


export class TimeManager {
    private readonly currentTime: Date

    constructor() {
        const now = new Date();
        const day = String(now.getUTCDate()).padStart(2, '0');
        const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = now.getUTCFullYear();

        this.currentTime = {
            displayTime: `${day}.${month}.${year}`,
            date: {
                day: parseInt(day),
                month: parseInt(month),
                year: year
            }
        }
    }

    getDifferenceInDisplayTime(targetData: Date, type: DateDifference): number {
        const toJSDate = (date: Date): globalThis.Date =>
            new globalThis.Date(date.date.year, date.date.month - 1, date.date.day);

        const current = new Date();
        const target = toJSDate(targetData);
        const diffMs = target.getTime() - current.getTime();

        const diffCalculators: Record<DateDifference, () => number> = {
            years: () => targetData.date.year - this.currentTime.date.year,
            months: () =>
                (targetData.date.year - this.currentTime.date.year) * 12 +
                (targetData.date.month - this.currentTime.date.month),
            days: () => Math.floor(diffMs / (1000 * 60 * 60 * 24)),
            hours: () => Math.floor(diffMs / (1000 * 60 * 60)),
            minutes: () => Math.floor(diffMs / (1000 * 60)),
            seconds: () => Math.floor(diffMs / 1000),
        };
        return diffCalculators[type]();
    }
}