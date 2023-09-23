import  { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#abb8c3",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 2,
  barRadius: 2,
  responsive: true,
  height: 50,
  normalize: true,
  partialRender: true
});

export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function() {
     
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div  className="flex-2">
      <div id="waveform" ref={waveformRef} />
      <div className="controls mt-4">
        <button
                onClick={handlePlayPause}
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  md:w-auto"
                 >
               {!playing ? "Play" : "Pause"}
              </button>
      </div>
    </div>
  );
}
