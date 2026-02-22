import { useState } from "react";
import "../styles/ToggleButtons.css"

interface ToggleButtonsProps {
    selectionChangedCallback: (option: string) => void,
    option1: string,
    option2: string,
    option3: string
}

function ToggleButtons({ selectionChangedCallback, option1, option2, option3 }: ToggleButtonsProps) {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const selectOption = (option: string) => {
        setSelectedOption(option);
        selectionChangedCallback(option);
    }

    const getOptionClassName = (option: string) => {
        if (selectedOption === option)
            return "toggle-btn toggle-btn-selected";
        else
            return "toggle-btn"
    }

    return (
        <div className='toggle-btn-container'>
            <div onClick={() => selectOption(option1)} className={getOptionClassName(option1)}>{option1}</div>
            <div onClick={() => selectOption(option2)} className={getOptionClassName(option2)}>{option2}</div>
            <div onClick={() => selectOption(option3)} className={getOptionClassName(option3)}>{option3}</div>
        </div>
    )
}

export default ToggleButtons;