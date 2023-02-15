import React, { useEffect, useRef } from 'react';
import './OverlayScrollbar.css';

function OverlayScrollbar({ children }) {
  const containerRef = useRef();
  const contentRef = useRef();
  const scrollbarRef = useRef();
  const scrollIndicatorRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const scrollbar = scrollbarRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    scrollbar.style.height =
      (container.clientHeight / content.scrollHeight) * container.clientHeight +
      'px';

    container.addEventListener('scroll', function () {
      scrollbar.style.top =
        (container.scrollTop / content.scrollHeight) * container.clientHeight +
        'px';

      const scrollPos = window.scrollY;
      const pageHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = (scrollPos / (pageHeight - windowHeight)) * 100;

      scrollIndicator.style.opacity = 1;
      scrollIndicator.style.top = `${scrollPercent}%`;
    });
  }, []);

  return (
    <div className='scroll-container' ref={containerRef}>
      <div className='scroll-content' ref={contentRef}>
        {children}
      </div>
      <div className='scrollbar' ref={scrollbarRef}></div>
      <div className='scrollIndicator' ref={scrollIndicatorRef}></div>
    </div>
  );
}

export default OverlayScrollbar;
