import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            {/* ✅ MOVE className HERE */}
            <label className="form-switch">
                Edit Mode:
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={(e) => {
                        setIsEditMode(e.target.checked);
                    }}
                />
            </label>

            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
