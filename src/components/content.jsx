import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Button} from 'reactstrap';


class MovieItem extends React.Component {
    render() {
        return (
            <Col sm="3" style={styles.movieItem}>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Sarkar</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button onClick={this.props.posterClickHandler}>Book Ticket</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default class Content extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Row>
                    <MovieItem posterClickHandler={this.props.posterClickHandler}></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                </Row>



            </div>
        );
    }
}

let styles = {
    container: {
        width: "100%",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: '15px'
    },
    movieItem : {
        paddingBottom: "10px"
    }
}