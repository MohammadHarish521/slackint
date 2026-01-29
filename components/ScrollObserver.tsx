"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Select all elements with class .scroll-item
    const elements = document.querySelectorAll('.scroll-item');
    elements.forEach(el => observer.observe(el));
    
    // Also observe elements that need to trigger "in-view" class for loops
    const loopObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.2 });

    const grid = document.getElementById('dashboard-grid');
    if(grid) loopObserver.observe(grid);

    return () => {
      observer.disconnect();
      loopObserver.disconnect();
    };
  }, []);
  
  return null;
}
