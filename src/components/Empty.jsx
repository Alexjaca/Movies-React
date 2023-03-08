import noResoults from "../assets/images/no-resoults.png"
import Styles from "./Empty.module.css";

export function Empty() {
    return (
        <div className={Styles.noResoults}>
            <img src={noResoults} alt="No Resoults"/>
        </div>
    )
}
