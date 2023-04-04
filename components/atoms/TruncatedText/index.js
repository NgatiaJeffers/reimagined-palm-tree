import React from 'react'

const TruncatedParagraph = ({ text, limit }) => {
    const truncatedText = text.slice(0, limit) + "...";
  return (
    <p>{truncatedText}</p>
  )
}

export default TruncatedParagraph
