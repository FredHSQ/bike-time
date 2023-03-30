import React, { useState } from 'react';
import styles from './styles.module.css';
import { InputNumbers } from '../../Components/InputNumbers';
import { InputTexts } from '../../Components/InputTexts';
import { SelectAlternada } from '../../Components/SelectAlternada';
import { SelectIntensidade, tiposIntensidade } from '../../Components/SelectIntesidade';
import "../../Utils/CSSGlobal/global.css";
import 'primeicons/primeicons.css';
import { Button } from '../../Components/Button';

export const Home = () => {

  const [alternada, setAlternada] = useState<boolean>(false);
  const [intensidade, setIntensidade] = useState<tiposIntensidade>("Moderada");

  return (
    <div className={styles.App}>
      <div className={styles.containerFormulario}>
        <div className={styles.labelTempo}>Insira o nome da sessão:</div>
      </div>
      <div className={styles.containerFormulario}>

        <div className={styles.labelTempo}>Insira o nome da sessão:</div>
        <InputTexts
          placeholder='Nome da sessão'
        />
        <div className={styles.labelTempo}>Tempo total da sessão:</div>
        <div className={styles.tempoInputGroup}>
          <div className={styles.tempoInput}>
            <InputNumbers
              min={0}
              required
              placeholder="Horas"
            />
          </div>
          <div className={styles.tempoInput}>
            <InputNumbers
              min={0}
              required
              placeholder="Minutos"
            />
          </div>
          <div className={styles.tempoInput}>
            <InputNumbers
              min={0}
              required
              placeholder="Segundos"
            />
          </div>

        </div>
        <div className={styles.labelTempo}>Existem alternações de ritmo nessa sessão de treino:</div>

        <SelectAlternada
          alternada={alternada}
          setAlternada={setAlternada}
        />
        {alternada ? (
          <div>
            <div className={styles.labelTempo}>Tempo do pedaço da sessão:</div>
            <div className={styles.tempoInputGroup}>
              <div className={styles.tempoInput}>
                <InputNumbers
                  min={0}
                  required
                  placeholder="Horas"
                />
              </div>
              <div className={styles.tempoInput}>
                <InputNumbers
                  min={0}
                  required
                  placeholder="Minutos"
                />
              </div>
              <div className={styles.tempoInput}>
                <InputNumbers
                  min={0}
                  required
                  placeholder="Segundos"
                />
              </div>

            </div>
            <div className={styles.intensidadeEVelocidadeGroup}>
              <div>
                <div className={styles.labelTempo}>Intensidade:</div>
                <SelectIntensidade
                  intensidade={intensidade}
                  setIntensidade={setIntensidade}
                />
              </div>
              <div>
                <div className={styles.labelTempo}>Velocidade:</div>
                <SelectIntensidade
                  intensidade={intensidade}
                  setIntensidade={setIntensidade}
                />
              </div>
            </div>
            <div className={styles.containerButtonPlus}>
              <Button
                title='Adicionar intervalo'
                importancia='primario'
                iconLeft={<i className="pi pi-plus" style={{ fontSize: "1.5rem" }} title="Imprimir" />}
              />
            </div>
          </div>
        ) : (
          <div className={styles.intensidadeEVelocidadeGroup}>
            <div>
              <div className={styles.labelTempo}>Intensidade:</div>
              <SelectIntensidade
                intensidade={intensidade}
                setIntensidade={setIntensidade}
              />
            </div>
            <div>
              <div className={styles.labelTempo}>Velocidade:</div>
              <SelectIntensidade
                intensidade={intensidade}
                setIntensidade={setIntensidade}
              />
            </div>
          </div>
        )
        }
      </div>
    </div>
  );
}

