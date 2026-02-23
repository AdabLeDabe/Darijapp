import "../styles/AppButton.css"

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

    return <button className={getClassName()}>{children}</button>
}

export default AppButton;