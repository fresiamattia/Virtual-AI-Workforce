// components/WelcomeScreen.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Agent } from '../data/aiAgents';

// Definiamo il tipo per le props del componente
interface WelcomeScreenProps {
  agents: Agent[];
}

export default function WelcomeScreen({ agents }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-wide text-cyan-400">
          VIRTUAL AI WORKFORCE
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Instantly deploy specialized AI agents to your digital operations. Choose the role you need and boost your productivity with precision.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 border border-gray-700"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-72 h-72 rounded-full object-cover mb-4 border-4 border-cyan-500 shadow-md"
              />
              <h3 className="text-2xl font-semibold text-white">{agent.name}</h3>
              <p className="text-cyan-400 mb-2 uppercase tracking-wide text-sm">{agent.role}</p>
              <div className="text-sm text-gray-300 mb-4">
                {agent.skills.map((skill, i) => (
                  <span key={i} className="mr-2">#{skill}</span>
                ))}
              </div>
              <Link href={`/agenti/${agent.id}`} passHref>
                <button
                  className="mt-4 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
                >
                  HIRE <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}