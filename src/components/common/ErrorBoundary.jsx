import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught runtime error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#020617',
          color: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '24px',
            padding: '40px',
            maxWidth: '700px',
            width: '100%',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 12px 0', color: '#ffffff' }}>
              Runtime Application Error
            </h2>
            
            {/* Display exact Error Message */}
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '12px',
              padding: '16px',
              color: '#fca5a5',
              fontFamily: 'monospace',
              fontSize: '13px',
              textAlign: 'left',
              overflowX: 'auto',
              marginBottom: '24px',
              whiteSpace: 'pre-wrap'
            }}>
              {this.state.error?.toString() || 'Unknown Error'}
              {this.state.error?.stack ? `\n\nStack:\n${this.state.error.stack}` : ''}
            </div>

            <button
              onClick={this.handleReload}
              style={{
                backgroundColor: '#38bdf8',
                color: '#020617',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
