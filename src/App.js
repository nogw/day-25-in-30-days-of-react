import React from 'react'
import GlobalStyle from './styles'
import MarkdownToHtml from './components/MarkdownToHtml'

function App() {
  return (
    <>
      <MarkdownToHtml/>
      <GlobalStyle />
    </>
  );
}

export default App;
