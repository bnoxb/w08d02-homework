import React from 'react';
import { Container, Grid, Image, Header, Segment } from 'semantic-ui-react';
import '../../App.css';

const NewsArticle = (props) => {
    return (
        <div>
            <Container style={{ padding: '2em 0em' }}>
            <Segment inverted color='green'>
                <Grid>
                    <Grid.Row>
                        <Header as='h2' style={{ padding: '0em 1em'}} dividing>{props.article.title}</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as='h3' style={{ padding: '0em 1em'}}>By: {props.article.author}</Header>

                    </Grid.Row>
                    <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src={props.article.urlToImage} width='300px'/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <p>{props.article.content}</p>
                            </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ padding: '0em 1em'}}>
                            <a href="https://newsapi.org">Powered by News API</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            </Container>

            
        </div>
    )
}

export default NewsArticle;
