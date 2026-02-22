import { useState } from "react";
import "../styles/ToggleButtonsDialect.css"

interface ToggleButtonsDialectProps {
    selectionChangedCallback: (option: string) => void,
    option1: string,
    option2: string,
    option3: string
}

function ToggleButtonsDialect({ selectionChangedCallback, option1, option2, option3 }: ToggleButtonsDialectProps) {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const selectOption = (option: string) => {
        setSelectedOption(option);
        selectionChangedCallback(option);
    }

    const getOptionClassName = (option: string) => {
        if (selectedOption === option)
            return "toggle-btn-dialect toggle-btn-dialect-enabled";
        else
            return "toggle-btn-dialect"
    }

    return (
        <div className='toggle-btn-dialect-container'>
            <div onClick={() => selectOption(option1)} className={getOptionClassName(option1)}>{option1}</div>
            <div onClick={() => selectOption(option2)} className={getOptionClassName(option2)}>{option2}</div>
            <div onClick={() => selectOption(option3)} className={getOptionClassName(option3)}>{option3}</div>
        </div>
    )
}

export default ToggleButtonsDialect;