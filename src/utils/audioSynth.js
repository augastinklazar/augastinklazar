// High-End Web Audio API Sound Synthesizer (Zero External File Dependencies)
let audioCtx = null;
let isAudioEnabled = false;
let ambientOsc = null;
let ambientGain = null;

function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const soundSynth = {
  isEnabled: () => isAudioEnabled,

  toggle: () => {
    isAudioEnabled = !isAudioEnabled;
    const ctx = getAudioContext();
    if (!ctx) return false;

    if (isAudioEnabled) {
      // Start subtle generative ambient warmth (55Hz / 110Hz sub-harmonic)
      try {
        ambientOsc = ctx.createOscillator();
        ambientGain = ctx.createGain();
        ambientOsc.type = 'sine';
        ambientOsc.frequency.setValueAtTime(55, ctx.currentTime);
        ambientGain.gain.setValueAtTime(0.015, ctx.currentTime);
        ambientOsc.connect(ambientGain);
        ambientGain.connect(ctx.destination);
        ambientOsc.start();
      } catch (e) {
        console.warn('Audio startup', e);
      }
    } else {
      if (ambientOsc) {
        try {
          ambientGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
          setTimeout(() => {
            ambientOsc.stop();
            ambientOsc.disconnect();
            ambientOsc = null;
          }, 350);
        } catch (e) {}
      }
    }
    return isAudioEnabled;
  },

  // Crisp micro click for buttons / links
  click: () => {
    if (!isAudioEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  },

  // Subtle airy hover chime
  hover: () => {
    if (!isAudioEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {}
  }
};
