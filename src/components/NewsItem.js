import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title, description, imageUrl, newsUrl} =  this.props;
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/10/01/1600x900/capricorn_1690876442304_1696183967556.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn btn-primary ">Read more</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem
