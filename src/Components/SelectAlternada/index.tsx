import { Dropdown } from 'primereact/dropdown';
import React from 'react';

import styles from "./styles.module.css";


export interface selectAlternadaProps {
  setAlternada: React.Dispatch<React.SetStateAction<boolean>>,
  alternada: boolean,
}

export const SelectAlternada = ({ setAlternada, alternada }: selectAlternadaProps) => {

  const alternadaOptions = [
    {
      nome: 'Sim',
      value: true
    },
    {
      nome: 'Não',
      value: false
    }
  ]


  return (
    <div className={styles.conteudoSelectStatus}>
      <Dropdown
        id="select-alternada"
        value={alternada}
        options={alternadaOptions}
        onChange={(e) => setAlternada(e.target.value)}
        optionValue="value"
        optionLabel="nome"
        style={{
          width: "100%",
          color: '#fff',
          outline: 'none',
          boxShadow: 'none',
          fontFamily: 'Exo 2',
          height: '3.5rem',
        }}
        panelStyle={{
          fontSize: '1.2rem',
        }}
      />
    </div>
  )
}