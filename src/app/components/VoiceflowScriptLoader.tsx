'use client';

import Script from 'next/script';
import React from 'react';

export default function VoiceflowScriptLoader() {
  return (
    <Script
      id="voiceflow-widget-script"
      strategy="afterInteractive"
      onLoad={() => {
        // Log per verificare che lo script si sia caricato correttamente
        console.log("Voiceflow script caricato con successo!");
      }}
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
    />
  );
}
