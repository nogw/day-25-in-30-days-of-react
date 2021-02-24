import React, { useState } from 'react';
import { Container, Markdown, View } from './styles';
import ReactMarkdown from 'react-markdown'

function MarkdownToHtml() {
  const [mark, setMark] = useState('')
  return (
    <Container>
      <Markdown>
        <textarea onChange={e => setMark(e.target.value)} spellCheck="false"></textarea>
      </Markdown>
      <View>
        <ReactMarkdown>
          {mark}
        </ReactMarkdown>
      </View>
    </Container>
  );
}

export default MarkdownToHtml;