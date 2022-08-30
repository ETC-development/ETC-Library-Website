import { useEffect, useRef, useState } from "react";

function useThrottle(value: any, delay: number) {
    // State and setters for throttled value
    const [throttledValue, setThrottledValue] = useState(value);

    // a boolean which will indicate if the call is throttled or not
    // we use "useRef" so that it will be preserved on all calls
    let isThrottled = useRef(false);

    useEffect(
        () => {
            if (!isThrottled.current) {
                //if the call is not throttled, we set isThrottled to true to prevent future setState calls
                isThrottled.current = true;

                setTimeout(() => {
                    // after "delay" ms have passed, we set the throttledValue and set isThrottled to false
                    setThrottledValue(value);
                    isThrottled.current = false;
                }, delay);
            }
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return [throttledValue, setThrottledValue];
}

export default useThrottle;
