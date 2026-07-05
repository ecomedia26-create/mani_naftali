import React, { useState, useEffect } from 'react';
import { Accessibility, X, Type, Contrast, Link as LinkIcon, Palette, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    largeText: false,
    highContrast: false,
    highlightLinks: false,
    grayscale: false,
  });

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (settings.largeText) {
      html.style.fontSize = '120%';
    } else {
      html.style.fontSize = '100%';
    }

    if (settings.highContrast) {
      html.classList.add('high-contrast-mode');
    } else {
      html.classList.remove('high-contrast-mode');
    }

    if (settings.grayscale) {
      html.style.filter = 'grayscale(100%)';
    } else {
      html.style.filter = '';
    }

    if (settings.highlightLinks) {
      body.classList.add('highlight-links-mode');
    } else {
      body.classList.remove('highlight-links-mode');
    }

  }, [settings]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetSettings = () => {
    setSettings({
      largeText: false,
      highContrast: false,
      highlightLinks: false,
      grayscale: false,
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center hover:scale-110 active:scale-95 duration-200"
        aria-label="פתח תפריט נגישות"
        title="הצהרת נגישות ואפשרויות"
      >
        <Accessibility size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-40 left-6 z-50 bg-white shadow-2xl rounded-xl w-72 overflow-hidden border border-neutral-200"
            dir="rtl"
          >
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2">
                <Accessibility size={20} />
                תפריט נגישות
              </h3>
              <button onClick={() => setIsOpen(false)} aria-label="סגור תפריט נגישות" className="hover:text-blue-200">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto text-neutral-900">
              <button 
                onClick={() => toggleSetting('largeText')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${settings.largeText ? 'bg-blue-50 border-blue-200 text-blue-700' : 'hover:bg-neutral-50 border-neutral-100'}`}
                aria-pressed={settings.largeText}
              >
                <Type size={18} />
                טקסט גדול
              </button>
              
              <button 
                onClick={() => toggleSetting('highContrast')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${settings.highContrast ? 'bg-blue-50 border-blue-200 text-blue-700' : 'hover:bg-neutral-50 border-neutral-100'}`}
                aria-pressed={settings.highContrast}
              >
                <Contrast size={18} />
                ניגודיות גבוהה
              </button>
              
              <button 
                onClick={() => toggleSetting('highlightLinks')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${settings.highlightLinks ? 'bg-blue-50 border-blue-200 text-blue-700' : 'hover:bg-neutral-50 border-neutral-100'}`}
                aria-pressed={settings.highlightLinks}
              >
                <LinkIcon size={18} />
                הדגשת קישורים
              </button>

              <button 
                onClick={() => toggleSetting('grayscale')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${settings.grayscale ? 'bg-blue-50 border-blue-200 text-blue-700' : 'hover:bg-neutral-50 border-neutral-100'}`}
                aria-pressed={settings.grayscale}
              >
                <Palette size={18} />
                גווני אפור
              </button>

              <div className="pt-3 border-t mt-3">
                <button 
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center gap-2 p-2 text-neutral-500 hover:text-neutral-800 transition-colors"
                >
                  <RotateCcw size={16} />
                  איפוס כל ההגדרות
                </button>
              </div>
              <div className="pt-2 text-xs text-neutral-400 text-center">
                האתר מותאם לתקנות הנגישות WCAG 2.1 ברמה AA. 
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
