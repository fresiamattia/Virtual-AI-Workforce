// app/page.tsx
import WelcomeScreen from './components/WelcomeScreen';
import aiAgents from './data/aiAgents';

export default function Home() {
  return (
    <main>
      <WelcomeScreen agents={aiAgents} />
    </main>
  );
}