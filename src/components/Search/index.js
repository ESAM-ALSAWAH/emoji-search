import React, { useState, Suspense } from 'react'
import './Search.css'

const Result = React.lazy(() => import('../result'))
const Search = () => {
  const [textsearch, settextsearch] = useState(null)

  return (
    <div className="search-area">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => settextsearch(e.target.value)}
        placeholder="Search for a keyword..."
      />
      <Suspense fallback={<p>loading please !</p>}>
        {textsearch ? (
          <Result textsearch={textsearch} />
        ) : (
          <p style={{ marginTop: '2rem', fontSize: '13px' }}>
            Type Keywords to Search
          </p>
        )}
      </Suspense>
    </div>
  )
}

export default Search
