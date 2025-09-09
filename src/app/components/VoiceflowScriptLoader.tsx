// src/app/components/VoiceflowScriptLoader.tsx
'use client';

import Script from 'next/script';
import React from 'react';

export default function VoiceflowScriptLoader() {
  return (
    <Script
      id="voiceflow-widget-script"
      strategy="afterInteractive"
      onLoad={() => {
        // La logica che gestiva lo script, se ce n'era, va qui.
        // Ad esempio, un console.log() per verificare il caricamento.
        console.log("Voiceflow script caricato con successo!");
      }}
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
    />
  );
}