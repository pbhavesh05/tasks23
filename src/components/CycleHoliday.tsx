import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holiday = ["🎄", "🎃", "🪔", "🎏", "🧧"];

const holidaybyalphabet: Record<string, string> = {
    "🎄": "🎃",
    "🎃": "🧧",
    "🪔": "🎄",
    "🎏": "🪔",
    "🧧": "🎏",
};

const nextHolidaybyYear: Record<string, string> = {
    "🎏": "🪔",
    "🪔": "🎃",
    "🎃": "🎄",
    "🎄": "🧧",
    "🧧": "🎏",
};

export function CycleHoliday(): React.JSX.Element {
    const [current, setcurrent] = useState<string>(holiday[0]);

    function advancebyAlphabet() {
        setcurrent(holidaybyalphabet[current]);
    }
    function advancebyYear() {
        setcurrent(nextHolidaybyYear[current]);
    }

    return (
        <div>
            <p>Holiday: {current}</p>

            <Button onClick={advancebyAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advancebyYear}>Advance by Year</Button>
        </div>
    );
}
