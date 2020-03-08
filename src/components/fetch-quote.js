import React, { useState, useEffect } from "react"
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState("")
  const [author, setAuthor] = useState("")

function getQuote() {
  axios.get("https://type.fit/api/quotes").then(res => {
    console.log(res.data)
    const data = res.data
    const quoteNum = Math.floor(Math.random() * data.length)
    const randomQuote = data[quoteNum]

    setQuotes(randomQuote.text)
    setAuthor(randomQuote.author)
  })
}

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div>
      <span>
        {quotes}
        <br /> 
        -{author}
      </span>
    </div>
  )
}
export default Quotes
