interface VoiceflowChat {
  load(config: any): void;
  open(): void;
  hide(): void;
}

interface Window {
  voiceflow: {
    chat: VoiceflowChat;
  };
}