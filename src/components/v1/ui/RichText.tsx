import React from 'react'

interface RichTextProps {
  content: string
}

export default function RichText({ content }: RichTextProps) {
  // Diviser le contenu en lignes
  const lines = content.trim().split('\n')
  const elements: React.ReactElement[] = []
  let listItems: string[] = []
  let key = 0

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="space-y-2 pl-5">
          {listItems.map((item, idx) => (
            <li key={idx} className="list-disc">
              <span dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
            </li>
          ))}
        </ul>
      )
      listItems = []
    }
  }

  const parseBold = (text: string): string => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }

  lines.forEach((line) => {
    const trimmedLine = line.trim()

    // Ligne vide
    if (trimmedLine === '') {
      flushList()
      return
    }

    // Liste (ligne commence par -)
    if (trimmedLine.startsWith('-')) {
      const itemText = trimmedLine.substring(1).trim()
      listItems.push(itemText)
      return
    }

    // Paragraphe normal
    flushList()
    elements.push(
      <p
        key={`p-${key++}`}
        className="leading-relaxed"
        dangerouslySetInnerHTML={{ __html: parseBold(trimmedLine) }}
      />
    )
  })

  // Flush remaining list items
  flushList()

  return <div className="space-y-4">{elements}</div>
}
