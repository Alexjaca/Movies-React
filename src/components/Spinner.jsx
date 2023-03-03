import styles from "./Spinner.module.css";
import { FaSpinner } from 'react-icons/fa';
//import Image from '../assets/images/loading.gif';

export function Spinner(){
    return (<div className={styles.isLoading}>
        <FaSpinner size={120}/></div>);
}