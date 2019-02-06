import React, { Component } from 'react';
import NewsArticle from './NewsArticle/NewsArticle';
import { Header } from 'semantic-ui-react';

class NewsContainer extends Component {
    constructor () {
        super();

        this.state = {
            error: null,
            newsLoaded: false,
            news: [],
        }
    }

    componentDidMount = () => {
        this.getNews();
    }

    getNews = async () => {
        const apiResponse = await fetch('https://newsapi.org/v2/everything?q=Moose&sortBy=popularity&apiKey=58f8d617bae54b4f894f6492e303ebd1');
        const news = await apiResponse.json();
        this.setState({
            news: news.articles,
            newsLoaded: true,
        })
    }

    render() {
        const mooseNews = this.state.news.map((article, i) => {
            return(
                <NewsArticle key={i} article={article}/>
            )
        });
        return(
            <div>
                <Header as='h1' 
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '3em',
                        }}
                >
                Moose News Today!
                </Header>
                { this.state.newsLoaded ? mooseNews : <p>Gathering Moose Intel</p>}
            </div>
        )
    }
}

export default NewsContainer;