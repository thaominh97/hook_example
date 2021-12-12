import { useRef } from "react";
import Video from "./Video";

const UseImperativeHandleEx = () => {
  const videoRef = useRef<HTMLVideoElement>();

  // console.log(videoRef.current)
  const handlePlay = () => {
    videoRef?.current?.play();
  };
  const handlePause = () => {
    videoRef?.current?.pause();
  };
  return (
    <>
      <h3>6. useImperativeHandle</h3>
      <Video ref={videoRef} />
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
};

export default UseImperativeHandleEx;
