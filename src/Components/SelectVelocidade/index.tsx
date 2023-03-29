import { Dropdown } from 'primereact/dropdown';
import React from 'react';

import styles from "./styles.module.css";

export type tiposVelocidade = 'Muito devagar' | 'Devagar'  | 'Moderada' | 'Rápido' | 'Muito Rápido'

export interface selectVelocidadeProps {
  setVelocidade: React.Dispatch<React.SetStateAction<tiposVelocidade>>,
  velocidade: tiposVelocidade,
}

export const SelectVelocidade = ({ setVelocidade, velocidade }: selectVelocidadeProps) => {

  const velocidadeOptions = [
    {
      nome: 'Muito devagar',
      value: 'Muito devagar'
    },
    {
      nome: 'Devagar',
      value: 'Devagar',
    },
    {
      nome: 'Moderada',
      value: 'Moderada',
    },
    {
      nome: 'Rápido',
      value: 'Rápido',
    },
    {
      nome: 'Muito rápido',
      value: 'Muito rápido',
    }
  ]


  return (
    <div className={styles.conteudoSelectStatus}>
      <Dropdown
        placeholder={"Não"}
        id="select-velocidade"
        value={velocidade}
        options={velocidadeOptions}
        onChange={(e) => setVelocidade(e.target.value)}
        optionValue="value"
        optionLabel="nome"
        filterPlaceholder='Encontre um status'
        emptyFilterMessage={'Nenhum Status com esses termos encontrado.'}
        showClear
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