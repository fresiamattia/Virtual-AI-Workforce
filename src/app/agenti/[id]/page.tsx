// app/agenti/[id]/page.tsx
import AgentProfile from '../../components/AgentProfile';
import aiAgents, { Agent } from '../../data/aiAgents';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return aiAgents.map((agent) => ({
    id: agent.id,
  }));
}

interface AgentPageProps {
  params: {
    id: string;
  };
}

export default function AgentPage({ params }: AgentPageProps) {
  const agent: Agent | undefined = aiAgents.find(a => a.id === params.id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8 font-sans">
      <AgentProfile agent={agent} />
    </main>
  );
}