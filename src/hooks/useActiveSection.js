import { useState, useEffect } from 'react';

/**
 * Custom hook tracking current active section on scroll
 */
export function useActiveSection(sectionIds = [], offset = 120) {
  const [activeSection, setActiveSection] = useState('hero');
  const idsKey = Array.isArray(sectionIds) ? sectionIds.join(',') : '';

  useEffect(() => {
    if (!idsKey) return;
    const ids = idsKey.split(',');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        if (!id) continue;
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [idsKey, offset]);

  return activeSection;
}
