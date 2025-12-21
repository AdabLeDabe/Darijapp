interface EditionBarProps {
    isEditMode: boolean
    addCallback: () => void,
    returnCallBack: () => void
}

function EditionBar({isEditMode: isEditMode, addCallback: addCallback, returnCallBack: returnCallback}: EditionBarProps) {
    return (<>
        <div className="edition-bar-container">
            {isEditMode
            ? (<button onClick={() => returnCallback()}>Back</button>)
            : (<button onClick={() => addCallback()}>Add</button>)}
        </div>
    </>);
}

export default EditionBar;