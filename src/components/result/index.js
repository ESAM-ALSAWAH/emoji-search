import React, { useEffect, useState } from 'react'
import emojiData from '../../json/data.json'
import './Result.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Result = (props) => {
  const [emoji, setemoji] = useState([])
  const { textsearch } = props

  useEffect(() => {
    const filter = emojiData.filter((emojieItem) =>
      emojieItem.keywords.includes(textsearch),
    )
    setemoji(filter)
  }, [textsearch])

  if (emoji.length === 0)
    return (
      <p style={{ marginTop: '2rem', fontSize: '13px' }}>No Results Found</p>
    )
  return (
    <div className="emoji-container">
      {emoji?.map((emojiItem, index) => {
        return <Clipoboard emojiItem={emojiItem} key={index} />
      })}
    </div>
  )
}

export default Result

const Clipoboard = ({ emojiItem }) => {
  const [copy, setcopy] = useState('')

  const copyEvent = (e) => {
    setcopy('Copied!')
    setTimeout(() => {
      setcopy('')
    }, 1500)
  }
  return (
    <CopyToClipboard text={emojiItem.symbol} onCopy={copyEvent}>
      <div className="emoji-block">
        {emojiItem.symbol}
        {copy !== '' && <span className="copied">{copy}</span>}
      </div>
    </CopyToClipboard>
  )
}
