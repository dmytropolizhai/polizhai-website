export type Color = string;
export type Date = {
    displayTime?: string;
    date: {
        day: number;
        month: number;
        year: number;
    }
};

export type DateDifference = "years" | "months" | "days" | "hours" | "minutes" | "seconds";
export type FontFamily = "Poppins" | "Georgia" | "JetBrains Mono"
