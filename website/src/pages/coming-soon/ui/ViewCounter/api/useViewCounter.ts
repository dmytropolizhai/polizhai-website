import { useState } from "react";
export function useViewCounter(): number {
    const [viewsCount, ] = useState<number>(-1)

    return viewsCount;
}