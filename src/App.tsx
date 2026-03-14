/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { generateChallenges, ChallengeData } from './data';

const ChallengeCard: React.FC<{ data: ChallengeData }> = ({ data }) => {
  return (
    <div className="page">
      <div className={`card ${data.colorClass}`}>
        <div className="header">
          <div className="badge-dia">
            <span style={{ fontSize: '16px' }}>DIA</span>
            <br />
            {data.day}
          </div>
          <div className="nivel-nome">{data.levelName}</div>
        </div>

        <div className="ilustracao-container">{data.image}</div>

        <div className="conteudo">
          <div className="instrucao">{data.instruction}</div>
          <div className="leitura-box">
            <div 
              className={data.type} 
              dangerouslySetInnerHTML={{ __html: data.content }} 
            />
          </div>
        </div>

        <div className="footer">
          <div style={{ color: '#aaa', fontWeight: 'bold' }}>DESAFIO CONCLUÍDO?</div>
          <div className="estrelas">☆ ☆ ☆</div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const challenges = generateChallenges();

  return (
    <div id="container-geral">
      {/* CAPA */}
      <div className="page">
        <div className="card" style={{ borderColor: '#FFBE0B', justifyContent: 'center' }}>
          <div className="capa-content">
            <div style={{ fontSize: '150px' }}>📚</div>
            <h1>Aventuras na<br />Leitura</h1>
            <div className="sub">365 desafios para ler e brilhar!</div>
            <div style={{ marginTop: '50px', fontSize: '22px', color: '#aaa' }}>
              NOME: _____________________________________
            </div>
          </div>
        </div>
      </div>

      {/* DESAFIOS */}
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.day} data={challenge} />
      ))}
    </div>
  );
}
