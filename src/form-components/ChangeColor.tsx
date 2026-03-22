import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "yellow",
        "purple",
        "black",
        "pink",
    ];
    const [chosencolor, setChosenColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {}
            {colors.map((color: string) => (
                <label key={color} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={chosencolor === color}
                        onChange={(e) => {
                            setChosenColor(e.target.value);
                        }}
                    />
                </label>
            ))}
            {}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: chosencolor,
                    color: "white",
                }}
            >
                {chosencolor}
            </div>
        </div>
    );
}
