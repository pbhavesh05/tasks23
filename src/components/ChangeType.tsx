import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const QUESTIONTYPE: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question",
    ];
    const [type, setType] = useState<QuestionType>(QUESTIONTYPE[0]);

    function changeType() {
        if (type === QUESTIONTYPE[0]) {
            setType(QUESTIONTYPE[1]);
        } else {
            setType(QUESTIONTYPE[0]);
        }
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === QUESTIONTYPE[1] && <p>Multiple Choice</p>}
            {type === QUESTIONTYPE[0] && <p>Short Answer</p>}
        </div>
    );
}
