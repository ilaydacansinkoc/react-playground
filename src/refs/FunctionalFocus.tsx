import * as React from 'react';
import FunctionalFocusInput from './FunctionalFocusInput';

function FunctionalFocus() {
    let myInput: HTMLInputElement | null = null;

    const onClick = () => {
        myInput.focus();
    };

    return (
        <>
            <div>
                <span> My Input: </span>
                <FunctionalFocusInput ref={(elem: HTMLInputElement) => { myInput = elem; }} />
                <input
                    type="submit"
                    onClick={onClick}
                />
            </div>
        </>
    );
}

export default FunctionalFocus;
