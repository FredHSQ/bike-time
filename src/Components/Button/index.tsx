
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    onClick?: (e: any) => void;
    importancia?: "primario" | "secundario" | "terciario"
    icon?: any;
    iconLeft?: any;
    tooltip?: any;
}

export const Button = ({ onClick, title, importancia, icon, iconLeft, className, tooltip, children, ...rest }: ButtonProps) => (

        <button className={`${styles.botaoBase} ${styles[importancia!]}`} title={tooltip ? tooltip : title} onClick={onClick} {...rest} ><span className={styles.conteudoBotao}>{iconLeft}{title}{icon}{children}</span> </button>
)