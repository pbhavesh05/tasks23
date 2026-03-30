import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function ontheClick() {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={ontheClick}>Reveal Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
}
