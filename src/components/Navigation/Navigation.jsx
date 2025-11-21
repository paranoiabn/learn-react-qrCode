import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">генерировать QR код</Link>
            <Link to="/scan">сканировать QR код</Link>
            <Link to="/generateHistory">история генерирования</Link>
            <Link to="/scanHistory">история сканирования</Link>
        </nav>
    );
};