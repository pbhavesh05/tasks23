import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

function initialDice(): [number, number] {
    let left = d6();
    let right = d6();
    while (left === right) {
        right = d6();
    }
    return [left, right];
}

export function TwoDice(): React.JSX.Element {
    const [initLeft, initRight] = initialDice();

    const [leftDie, setLeftDie] = useState(initLeft);
    const [rightDie, setRightDie] = useState(initRight);

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>

            <div>
                <Button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>

            {leftDie === rightDie && leftDie === 1 && <p>Lose</p>}
            {leftDie === rightDie && leftDie !== 1 && <p>Win</p>}
        </div>
    );
}
