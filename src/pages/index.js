import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const TaskContainer = styled.div`
  margin-bottom: 2rem;
`

const Sentence = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Annotations = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Annotation = styled.span`
  background: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`

const Controls = styled.div`
  margin-top: 2rem;
`

const Button = styled.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #005f99;
  }
`

const FileInput = styled.input`
  margin-bottom: 1rem;
`

const IndexPage = () => {
  const [annotations, setAnnotations] = useState([])
  const [sentence, setSentence] = useState('')

  const handleWordClick = (word) => {
    setAnnotations([...annotations, word])
  }

  const handleSubmit = () => {
    alert(`Annotations submitted: ${annotations.join(', ')}`)
    setAnnotations([])
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      setSentence(text)
    }
    reader.readAsText(file)
  }

  return (
    <Layout>
      <FileInput type="file" accept=".txt" onChange={handleFileUpload} />
      {sentence && (
        <TaskContainer>
          <Sentence>
            {sentence.split(' ').map((word, index) => (
              <Annotation key={index} onClick={() => handleWordClick(word)}>
                {word}
              </Annotation>
            ))}
          </Sentence>
          <Annotations>
            {annotations.map((annotation, index) => (
              <Annotation key={index}>{annotation}</Annotation>
            ))}
          </Annotations>
        </TaskContainer>
      )}
      <Controls>
        <Button onClick={handleSubmit}>Submit Annotations</Button>
      </Controls>
    </Layout>
  )
}

export default IndexPage
