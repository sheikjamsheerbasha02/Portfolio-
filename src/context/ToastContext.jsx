import { useState, useCallback } from 'react';
import { ToastContext } from './createToastContext';

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Floating Toast Notification Container */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        pointerEvents: 'none'
      }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            style={{
              pointerEvents: 'auto',
              cursor: 'pointer',
              backgroundColor: toast.type === 'success' ? '#064e3b' : toast.type === 'error' ? '#7f1d1d' : '#0f172a',
              color: toast.type === 'success' ? '#6ee7b7' : toast.type === 'error' ? '#fca5a5' : '#38bdf8',
              border: `1px solid ${toast.type === 'success' ? '#10b981' : toast.type === 'error' ? '#ef4444' : '#38bdf8'}`,
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              animation: 'fadeIn 0.3s ease-out forwards',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span>{toast.type === 'success' ? '✓' : toast.type === 'error' ? '✕' : 'ℹ'}</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
