import { Descricao } from "../receita1/components/descricao";
import { Imagem } from "../receita1/components/imagem";
import styles from './styles.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>A SUPER MAQUINA</h2>
            <Descricao />
            <Imagem />
        </div>
    );
}