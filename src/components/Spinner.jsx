
import { ImSpinner } from "react-icons/im";
import styles from './Spinner.module.css'

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner className={styles.spinning}  size={60}/>
        </div>
    )
}
