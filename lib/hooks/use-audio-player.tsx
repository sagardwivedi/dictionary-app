import { useState } from 'react';

// Define types for the audio player hook
interface AudioPlayer {
  playAudio: (audioUrl: string) => void;
  stopAudio: () => void;
}

// Custom hook for playing audio
export const useAudioPlayer = (): AudioPlayer => {
  // State to store the current audio object
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Function to play audio
  const playAudio = (audioUrl: string) => {
    // Create a new audio element
    const newAudio = new Audio(audioUrl);
    // Play the audio
    newAudio.play();
    // Set the new audio object to the state
    setAudio(newAudio);
  };

  // Function to stop audio
  const stopAudio = () => {
    // If there's an audio object
    if (audio) {
      // Pause the audio
      audio.pause();
      // Reset the time to the beginning
      audio.currentTime = 0;
      // Clear the audio object from the state
      setAudio(null);
    }
  };

  // Return the functions for external use
  return { playAudio, stopAudio };
};
