import React from "react";
interface PropType {
  ref: any;
}
const Video: React.FC<PropType> = ({ ref }) => {
  return (
    <>
      <video
        ref={ref}
        src="https://675ade5e.tt.x.scdnx.com/xdispatch734cb7d1675ade52/v9.byteicdn.com/b7c0e6d7a9289d8d7139a9de35b192ad/61b66586/video/tos/alisg/tos-alisg-pve-0037/d96d3264878f4925a25a8c49d9059c0b/?a=1180&br=1938&bt=969&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZmo9Fpckag3-I&l=202112121511260102450550641BA90BC1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2pmOjo6Zjs6OTMzODgzNEApZWg5O2lkN2Q4N2Q1ZGk7OGc0MXNqcjRfNmZgLS1kLy1zc14yNDZjXzUzYC4wXy8zYS86Yw%3D%3D&vl=&vr=&bsxdisp=in"
        width={300}
      />
    </>
  );
};

export default Video;
