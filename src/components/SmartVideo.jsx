import React, { useRef, useEffect, useState } from "react";

const SmartVideo = ({ src, ...props }) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.6 } // Play only when 60% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isIntersecting) {
        videoRef.current.play().catch(() => {}); // Silent fail if autoplay blocked
      } else {
        videoRef.current.pause();
      }
    }
  }, [isIntersecting]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      controls
      className="w-full h-auto rounded-2xl"
      {...props}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default SmartVideo;
