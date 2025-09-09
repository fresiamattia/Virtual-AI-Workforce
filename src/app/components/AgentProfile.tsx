// components/AgentProfile.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaHeadphones } from 'react-icons/fa';
import { Agent } from '../data/aiAgents';

// Dichiarazione globale per la finestra
declare global {
  interface Window {
    voiceflow: {
      chat: {
        load(config: any): void;
        open(): void;
        hide(): void;
      };
    };
  }
}

interface AgentProfileProps {
  agent: Agent;
}

export default function AgentProfile({ agent }: AgentProfileProps) {

  // La logica di avvio della chat è stata semplificata
  const startVoiceChat = () => {
    // Controlla se l'oggetto Voiceflow è disponibile
    if (agent.voiceflowId && window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.load({
        verify: { projectID: agent.voiceflowId },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: 'https://runtime-api.voiceflow.com',
        },
      });
      window.voiceflow.chat.open();
    }
  };

  // Nascondi la chat quando l'utente lascia la pagina dell'agente
  useEffect(() => {
    return () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.hide();
      }
    };
  }, []);

  return (
    <div className="max-w-4xl w-full mx-auto bg-gray-800 rounded-xl p-8 shadow-2xl border-glow relative">
      <Link href="/" passHref>
        <button
          className="absolute top-6 left-6 text-cyan-400 hover:text-cyan-300 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Agents
        </button>
      </Link>
      <div className="text-center mb-8">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-56 h-56 rounded-full border-4 border-cyan-500 mx-auto mb-4"
        />
        <h2 className="text-4xl font-bold text-white">{agent.name}</h2>
        <p className="text-cyan-400 text-xl">{agent.role}</p>
        <span className="mt-2 inline-block bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
          Status: {agent.status}
        </span>
      </div>
      <div className="mb-8 text-gray-300">
        <h3 className="text-xl font-semibold text-white mb-2 flex justify-center items-center">
          Agent Description
        </h3>
        <p className="text-center max-w-2xl mx-auto leading-relaxed">{agent.description}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2 flex justify-center items-center">
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {agent.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-cyan-700 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
          <FaHeadphones className="mr-2" /> Voice Chat
        </h3>
        {agent.instructions && (
          <div className="mb-4 text-sm text-gray-300 bg-gray-800 p-4 rounded-md border border-cyan-700">
            <h4 className="text-white font-semibold mb-2">What can {agent.name} do for you?</h4>
            <p className="whitespace-pre-line">{agent.instructions}</p>
          </div>
        )}
        <button
          onClick={startVoiceChat}
          disabled={!agent.voiceflowId}
          className={`w-full py-3 rounded-md text-white font-bold flex justify-center items-center gap-2 transition ${
            agent.voiceflowId
              ? 'bg-green-600 hover:bg-green-500'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          {agent.voiceflowId ? 'Start Voice Chat' : 'Voice Chat Not Configured'}
        </button>
      </div>
    </div>
  );
}