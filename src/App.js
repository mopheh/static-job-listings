import { useEffect, useState } from "react"
import "./App.css"
import Item from "./components/Item"
import data from "./data.json"

function App() {
  const [filter, setFilter] = useState(false)
  const [search, setSearch] = useState([])
  const [info, setInfo] = useState(data)

  const filterJob = () => {
    let foundJob = []
    let values = []
    info.map((item) => {
      return values.push([
        ...Object.values(item),
        ...item.languages,
        ...item.tools,
      ])
    })
    values.map((value) => {
      let isTrue = search.every((i) => value.includes(i))
      return isTrue && foundJob.push(info.find((i) => i.id === value[0]))
    })
    setInfo(foundJob)
  }

  useEffect(() => {
    if (search.length === 0) {
      setInfo(data)
    } else if (search.length !== 0) {
      filterJob()
    }
    // eslint-disable-next-line
  }, [search, filter])

  return (
    <>
      <header></header>
      <div className="App">
        {filter && (
          <div className="search-input">
            <div className="key-words d-flex w-80">
              {search.map((item, index) => (
                <div key={index} className="search-keyword-div d-flex">
                  <div className="search-keyword">{item}</div>
                  <span
                    id={item}
                    className="cancel"
                    onClick={(e) => {
                      let list = []
                      search.map((keyword) => {
                        if (keyword !== e.target.id) {
                          list.push(keyword)
                        }
                        return ""
                      })
                      setSearch(list)
                      setInfo(data)
                    }}
                  >
                    <img src="images/icon-remove.svg" alt="remove" />
                  </span>
                </div>
              ))}
            </div>
            <div
              className="clear w-20"
              onClick={() => {
                setSearch([])
                setInfo(data)
                setFilter(false)
              }}
            >
              Clear
            </div>
          </div>
        )}
        <div className="pb-3">
          {info.map((item, index) => (
            <Item
              key={index}
              setFilter={setFilter}
              addSearch={setSearch}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
