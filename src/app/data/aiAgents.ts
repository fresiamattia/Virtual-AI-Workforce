// data/aiAgents.ts

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: string;
  image: string;
  description: string;
  skills: string[];
  testResults: {
    efficiency: string;
    adaptability: string;
  };
  voiceflowId: string;
  instructions: string;
}

const aiAgents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Sophia Bennet',
    role: 'Data Analyst',
    status: 'Available',
    image: '/pics/2.png',
    description: 'Extracts insights from your website and analytics data to optimize decision making and business performance.',
    skills: ['WebTracking', 'DataMining', 'FunnelAnalysis'],
    testResults: { efficiency: '95%', adaptability: '92%' },
    voiceflowId: '68618519de64374aed270773',
    instructions: `Sophia is your personal Data Analyst, constantly monitoring your eCommerce and campaign performance.\n\nShe transforms analytics into clarity — delivering real-time insights, strategic interpretations, and action-ready suggestions to grow your business.\n\nLeave her your website address, and she'll instantly generate a 4-month performance report with highlights, trends, and smart recommendations.`,
  },
  {
    id: 'agent-2',
    name: 'Jason Martinez',
    role: 'Content Search Assistant',
    status: 'Available',
    image: '/pics/3.png',
    description: "Instantly sifts through our webzine's entire archive to find and summarize the exact information you need, saving you time and effort.",
    skills: ['Article Summarization', 'Keyword Search', 'Data Extraction'],
    testResults: { efficiency: '93%', adaptability: '89%' },
    voiceflowId: '68b6e3a22ffd5a085b77a654',
    instructions: 'Jason is your personal assistant for navigating our webzine\'s content. Just tell him what you\'re looking for, and he\'ll provide a concise summary of all relevant articles.\n\nHe can answer specific questions or give you a quick overview of any topic covered in our archives.\n\nSimply ask him for a summary of an article or for information on a particular topic.',
  },
  {
    id: 'agent-3',
    name: 'Noah Patel',
    role: 'Ghost Writer AI.',
    status: 'Available',
    image: '/pics/4.png',
    description: "Generates engaging and tailored content for your social media channels and blog posts based on specific topics and keywords.",
    skills: ['Content Generation', 'SEO Optimization', 'Social Media Copy'],
    testResults: { efficiency: '91%', adaptability: '88%' },
    voiceflowId: '68b8aea3364dfd4299fb9bd5',
    instructions: 'Noah is an expert content creator specializing in marketing and communications. Just give him a topic, and he will provide a well-structured blog post draft or a series of engaging social media posts.\n\nHe can research current trends and integrate relevant keywords to ensure your content is both compelling and discoverable.\n\nStart by giving him a topic or a keyword to begin crafting your content.',
  },
  {
    id: 'agent-4',
    name: 'Emily Carter',
    role: 'Lead Acquisition',
    status: 'Available',
    image: '/pics/1.png',
    description: 'Specializes in generating qualified leads through landing pages and product starter kits.',
    skills: ['LandingPages', 'StarterKitPromo', 'ConversionBooster'],
    testResults: { efficiency: '90%', adaptability: '85%' },
    voiceflowId: '68ba18198b54a201cd9f9beb',
    instructions: 'Emily is your personal Lead Acquisition specialist. She crafts compelling copy for landing pages and social media to capture high-quality leads.\n\nShe can help you design a \'starter kit\' promotion or a specific offer that drives traffic and boosts conversion rates.\n\nJust tell her about your product or service and your target audience, and she\'ll generate strategic campaign ideas tailored to your goals.',
  },
];

export default aiAgents;