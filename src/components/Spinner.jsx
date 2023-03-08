import styles from "./Spinner.module.css";
import { FaSpinner } from 'react-icons/fa';
//import Image from '../assets/images/loading.gif';

export function Spinner(){
    return (<div className={styles.isLoading}>
        <FaSpinner className={styles.spinning} size={80}/></div>);
}