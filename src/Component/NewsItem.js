import React from 'react'

const NewsItem =(props)=> {

    let {title, description, image, url, author, date, source} = props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
              <span className="badge rounded-pill bg-danger" style={{right:'-23%', zIndex:1}}>
                {source}
              </span>
          </div>
        
          <img src={image} className="card-img-top" alt="img"/>
          <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"No author":author} on {new Date(date).toGMTString()}</small></p>
          <a href= {url} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}


export default NewsItem