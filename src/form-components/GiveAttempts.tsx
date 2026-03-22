import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setattempts] = useState<number>(3);
    const [requests, setrequests] = useState<string>("");

    const handleUse = () => {
        if (attempts > 0) {
            setattempts(attempts - 1);
        }
    };

    const handleGain = () => {
        if (requests !== "") {
            const parsed = parseInt(requests);
            setattempts(attempts + parsed);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <input
                type="number"
                value={requests}
                onChange={(e) => {
                    setrequests(e.target.value);
                }}
            />
            <div>
                <button onClick={handleUse} disabled={attempts === 0}>
                    use
                </button>
                <button onClick={handleGain}>gain</button>
            </div>
        </div>
    );
}
