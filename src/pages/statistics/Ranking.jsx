import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { PlayArrow } from "@mui/icons-material";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#abb8c3",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 2,
  barRadius: 2,
  responsive: true,
  height: 20,
  normalize: true,
  partialRender: true,
});

const HistoryPage = () => {
  const url =
    "https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3";

  const cardCount = 10;
  const waveforms = Array.from({ length: cardCount }).map(() => useRef(null));
  const wavesurfers = Array.from({ length: cardCount }).map(() => null);

  const handlePlayPause = (index) => {
    const wavesurfer = wavesurfers[index];

    if (wavesurfer) {
      const playing = wavesurfer.isPlaying();
      if (playing) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
    }
  };

  useEffect(() => {
    waveforms.forEach((waveformRef, index) => {
      if (!wavesurfers[index]) {
        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfers[index] = WaveSurfer.create(options);
        wavesurfers[index].load(url);
      }
    });

    return () => {
      wavesurfers.forEach((wavesurfer) => {
        if (wavesurfer) {
          wavesurfer.destroy();
        }
      });
    };
  }, [url, waveforms]);

  return (
    <>
    <div class="text-center">
   
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">History</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">This page contains all the contributions you have so far done</p>
    
  </div>
      <div className="relative flex min-h-screen overflow-hidden bg-gray-50">
        
        <div className="p-6 w-full">
          <>
            <ul className="space-y-4">
              {[...Array(cardCount)].map((_, index) => (
                <div class="flex items-start p-4 rounded-xl shadow-lg bg-white "  key={index}>
                  <div className="pr-4"> <div class="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100 ">
                    <PlayArrow onClick={() => handlePlayPause(index)} />
                    
                  </div>
               </div>
                  <div class="pl-6 w-full">
                    <div id={`waveform-${index}`} ref={waveforms[index]} />
                    <p class="text-sm text-gray-500">Your transcript:</p>
                    <h2 class="font-semibold">This is my Transcript</h2>
                  </div>
                </div>
              ))}
            </ul>
          </>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
