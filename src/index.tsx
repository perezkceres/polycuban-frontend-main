import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
      <a href="https://rugdoc.io/project/polycuban/" target="_blank" rel="noreferrer">
        <img src="https://rugdoc.io/assets/2021/06/rugdoc-review-badge-with-glow.png" alt="Rug Dr Approval Badge" style={{ position: 'fixed', bottom: 120, left: 0, height: '100px', width: 'auto', zIndex: 100000 }} />
      </a>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
