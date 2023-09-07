import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
             articles: [],
             loading: false
        }
    }
    async componentDidMount(){
      let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8980cf51455e4582b463d4929aef2d95";
      let data = await fetch(url);
      let parseData = await data.json();
      //console.log(parseData);
      this.setState({articles: parseData.articles});

    }
  render() {
    return (
      <div className='container my-4'>
        <h2 className='my-4'> Daily- News</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,40):""}  description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
          
        </div>
      </div>
    )
  }
}

export default News
