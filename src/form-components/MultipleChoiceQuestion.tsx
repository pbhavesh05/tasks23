import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    const isCorrect = selected === expectedAnswer;
    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <select
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                }}
            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
