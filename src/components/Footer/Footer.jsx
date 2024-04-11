import styles from './Footer.module.css';

export function Footer(){
    const nome = 'Luiz Flores';
    return (

        <div className={styles.footer}>
            <p>Projeto desenvolvido por {nome}</p>
        </div>
    )
}