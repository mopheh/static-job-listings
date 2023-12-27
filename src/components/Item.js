import React from "react"
function Item({ item, setFilter, addSearch }) {
  function handleUpdateRole(e) {
    // resetJob([])
    setFilter(true)
    addSearch((prevState) => [...new Set([...prevState, e.target.innerText])])
  }
  return (
    <div className={`item-container ${item.featured && "bl"}`}>
      <div className="item d-flex align-item-center w-100">
        <div className="item-img">
          <img src={item.logo} alt="photosnap" />
        </div>
        <div className="item-header d-flex flex-column">
          <div className="item-text align-item-center d-flex w-100">
            <div className="item-title mr-1">{item.company}</div>
            {item.new && <div className="tag green-tag mr-1">New!</div>}
            {item.featured && <div className="tag dark-tag">Featured</div>}
          </div>
          <div className="my-2">
            <h3>{item.position}</h3>
          </div>
          <div className="d-flex item-info align-item-center">
            <div>{item.postedAt}</div>
            <hr />
            <div>{item.contract}</div>
            <hr />
            <div>{item.location}</div>
          </div>
        </div>
        <hr className="hide" />
        <div className="roles d-flex">
          <div className="role mr-1" onClick={handleUpdateRole}>
            {item.role}
          </div>
          <div className="role mx-1" onClick={handleUpdateRole}>
            {item.level}
          </div>
          {item.languages.map((language, index) => (
            <div className="role mx-1" onClick={handleUpdateRole} key={index}>
              {language}
            </div>
          ))}
          {item.tools.map((tool, index) => (
            <div className="role mx-1" onClick={handleUpdateRole} key={index}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Item
