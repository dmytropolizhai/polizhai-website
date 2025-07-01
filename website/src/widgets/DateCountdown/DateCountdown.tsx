import { type ComponentType, type ReactNode, useState } from "react";
import { TimeManager } from "@shared/lib/helpers/TimeManager.ts";
import { useRepeater } from "@shared/lib/hooks/useRepeater.ts";
import type { Date, DateDifference } from "@shared/types";

type Props = {
    targetDate: Date;
    type?: DateDifference;
    targetComponent: ComponentType<{ children: ReactNode }>;
};

export const DateCountdown = ({
                                  targetDate,
                                  targetComponent: TargetComponent,
                                  type = 'seconds'
                              }: Props) => {
    const [timeLeft, setTimeLeft] = useState<number>(-1);

    const typeToDelay: Record<DateDifference, number> = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 0,
        months: 0,
        years: 0
    };

    useRepeater(() => {
        const timeManager = new TimeManager();
        const difference = timeManager.getDifferenceInDisplayTime(targetDate, type);
        setTimeLeft(difference);
    }, typeToDelay[type]);

    return (
        <TargetComponent>
            {timeLeft} {type} left
        </TargetComponent>
    );
};