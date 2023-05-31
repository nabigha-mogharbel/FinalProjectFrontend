import "./index.css"
import {Button} from "../Styled"
function Popup({children, closeHandler}) {
    return (<div className="popup">
        <Button onClick={closeHandler}>X</Button>
        {children}</div>  );
}

export default Popup;