import "../styles/AppButton.css"
import nextArrow from "../assets/next-arrow.svg"

interface AppButtonProps {
    isPrimary?: boolean,
    isBig?: boolean,
    hasArrow?: boolean,
    disabled?: boolean,
    onClick?: () => void
}

function AppButton({isPrimary = false, isBig = false, hasArrow = false, disabled = false, onClick: onClickCallback = undefined, children} : React.PropsWithChildren<AppButtonProps>) {
    const getClassName = () => {
        var result = "btn";

        if (isPrimary)
            result += " btn-primary";
        else
            result += " btn-secondary";

        if (isBig)
            result += " btn-big";
        else
            result += " btn-small";

        return result;
    }

    const displayArrow = () => {
        if (hasArrow) {
            return <img src={nextArrow} alt="Arrow" aria-hidden="true" className="btn-arrow" />
        }
        else {
            return <></>
        }
    }

    const executeOnClick = () => {
        if (disabled) {
            return;
        }
        if (onClickCallback) {
            onClickCallback();
        }
    }

    return <button onClick={() => executeOnClick()} disabled={disabled} className={getClassName()}>{children}{displayArrow()}</button>
}

export default AppButton;