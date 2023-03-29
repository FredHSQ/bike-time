import { useState } from 'react'
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.min.css';

import styles from './styles.module.css';

import { InputText, InputTextProps } from 'primereact/inputtext';

interface inputProps extends InputTextProps {
    placeholder?: string;
    type?: string;
    id?: string;
    ref?: any;
    icon?: any;
    senha?: boolean;
    cadastro?: boolean;
    maxLength?: number
}


export const InputTexts = ({
    placeholder,
    type,
    id,
    required,
    icon,
    senha,
    cadastro,
    maxLength,
    ...outros 
}: inputProps) => {

    const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

    const handleMostrarSenha = () => {
        mostrarSenha ? setMostrarSenha(false) : setMostrarSenha(true);
    }

    return (

        <div className={styles.containerInput}>
            <span 
            className={`p-float-label ${icon || senha && 'p-input-icon-right'}`}>
                {icon && icon}
                {senha && <i className={!mostrarSenha ? "pi pi-eye" : "pi pi-eye-slash"} style={{ fontSize: '1.8rem', marginBottom: '1rem' }} onClick={handleMostrarSenha}></i>}
                <InputText
                    id={id}
                    className={styles.customInput}
                    maxLength={maxLength ? maxLength : 50}
                    style={cadastro ? {
                        outline: 'none',
                        boxShadow: 'none',
                        background: 'none',
                        fontSize: '1.4rem',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        color: 'var(--branco)',
                        fontWeight: '300',
                        height: '3rem',
                        marginTop: '0.5rem',
                    }
                        :
                        {
                            outline: 'none',
                            boxShadow: 'none',
                            background: 'none',
                            fontSize: '1.4rem',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            color: 'var(--cinza-500)',
                            fontWeight: '500',
                            height: '3rem',
                            marginTop: '0.5rem',
                        }
                    }
                    type={!mostrarSenha ? type : 'text'}
                    required={required}
                    {...outros} 
                    />
                <label className={cadastro ? styles.inputLabelCadastro : styles.inputLabel} htmlFor={id} style={{ background: 'none' }}><p>{placeholder}</p></label>
            </span>
        </div>
    )
}

