import React from 'react'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#070a14',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#00ff88'}}>QuantBot Terminal</h1>
      <p style={{opacity: 0.7, marginTop: '10px'}}>Build Successful! APK Ready</p>
      <div style={{
        marginTop: '20px',
        border: '1px solid #00ff88',
        padding: '15px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '350px'
      }}>
        <p>BTC/USD: $67,432.10</p>
        <p style={{color: '#00ff88'}}>Status: ACTIVE</p>
      </div>
    </div>
  )
}
