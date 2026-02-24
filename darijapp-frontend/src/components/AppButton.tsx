import "../styles/AppButton.css"
import nextArrow from "../assets/next-arrow.svg"

interface AppButtonProps {
    isPrimary?: boolean,
    isBig?: boolean,
    hasArrow?: boolean
}

function AppButton({isPrimary = false, isBig = false, hasArrow = false, children} : React.PropsWithChildren<AppButtonProps>) {
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

    return <button className={getClassName()}>{children}{displayArrow()}</button>
}

export default AppButton;