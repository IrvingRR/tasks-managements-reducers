/* eslint-disable react/prop-types */
import { BiCheck } from "react-icons/bi";
import { CheckboxContainer } from "../../styled/components/common/checkbox";
import { useState } from "react";

export const Checkbox = ({ checked, handleClick }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const onClickCheckbox = () => {
        setIsChecked(!isChecked);
        handleClick();
    };

    return (
        <>
            <CheckboxContainer onClick={onClickCheckbox}>
                {isChecked && <BiCheck className="checkbox-icon"/>}
            </CheckboxContainer>
        </>
    );
};