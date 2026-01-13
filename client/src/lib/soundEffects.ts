// Sound effects utility for casino games
// Using Web Audio API to generate sounds dynamically

export const playSound = (type: 'win' | 'spin' | 'click' | 'lose' | 'deal') => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    switch (type) {
      case 'win':
        playWinSound(audioContext);
        break;
      case 'spin':
        playSpinSound(audioContext);
        break;
      case 'click':
        playClickSound(audioContext);
        break;
      case 'lose':
        playLoseSound(audioContext);
        break;
      case 'deal':
        playDealSound(audioContext);
        break;
    }
  } catch (error) {
    console.log('Audio not available:', error);
  }
};

const playWinSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Celebratory ascending tones
  oscillator.frequency.setValueAtTime(523.25, now); // C5
  oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
  oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
  
  gainNode.gain.setValueAtTime(0.3, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
  
  oscillator.start(now);
  oscillator.stop(now + 0.5);
};

const playSpinSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Descending tone for spinning
  oscillator.frequency.setValueAtTime(400, now);
  oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.3);
  
  gainNode.gain.setValueAtTime(0.2, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
  
  oscillator.start(now);
  oscillator.stop(now + 0.3);
};

const playClickSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Short click sound
  oscillator.frequency.setValueAtTime(800, now);
  
  gainNode.gain.setValueAtTime(0.1, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
  
  oscillator.start(now);
  oscillator.stop(now + 0.05);
};

const playLoseSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Descending sad tone
  oscillator.frequency.setValueAtTime(400, now);
  oscillator.frequency.setValueAtTime(200, now + 0.3);
  
  gainNode.gain.setValueAtTime(0.2, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
  
  oscillator.start(now);
  oscillator.stop(now + 0.3);
};

const playDealSound = (audioContext: AudioContext) => {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Quick beep for dealing cards
  oscillator.frequency.setValueAtTime(600, now);
  
  gainNode.gain.setValueAtTime(0.15, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
  
  oscillator.start(now);
  oscillator.stop(now + 0.1);
};
