import { Descricao } from "../components/descricao";
import { Imagem } from "../components/imagem";
import styles from '../styles/styles.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>A SUPER MAQUINA</h2>
            <Descricao />
            <Imagem />
        </div>
    );
}