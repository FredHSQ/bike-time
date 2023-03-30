import { Dropdown } from 'primereact/dropdown';
import React from 'react';

import styles from "./styles.module.css";

export type tiposIntensidade = 'Muito leve' | 'Leve'  | 'Moderada' | 'Intenso' | 'Muito Intenso'

export interface selectIntensidadeProps {
  setIntensidade: React.Dispatch<React.SetStateAction<tiposIntensidade>>,
  intensidade: tiposIntensidade,
}

export const SelectIntensidade = ({ setIntensidade, intensidade }: selectIntensidadeProps) => {

  const intensidadeOptions = [
    {
      nome: 'Muito leve',
      value: 'Muito leve'
    },
    {
      nome: 'Leve',
      value: 'Leve',
    },
    {
      nome: 'Moderada',
      value: 'Moderada',
    },
    {
      nome: 'Intenso',
      value: 'Intenso',
    },
    {
      nome: 'Muito Intenso',
      value: 'Muito Intenso',
    }
  ]


  return (
    <div className={styles.conteudoSelectStatus}>
      <Dropdown
        id="select-intensidade"
        value={intensidade}
        options={intensidadeOptions}
        onChange={(e) => setIntensidade(e.target.value)}
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