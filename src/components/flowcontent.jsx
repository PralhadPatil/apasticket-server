import React from "react";
import { Button, Table } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import screenLayout from '../resources/screens/Scala-Cinema-Kino1.svg';

export default class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            showPeopleCount: true,
            showPlaces: false

        };
    }

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    handleSelect(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            showPeopleCount: true,
            showPlaces: false
        });
    }
    showPlacesScreen = () => {
        this.setState({
            showPeopleCount: false,
            showPlaces: true
        });
    }

    render() {
        var options = [
            { id: 1, label: 'Theatre 1' },
            { id: 2, label: 'APAS' },
            { id: 3, label: 'Vinayaka' },
            { id: 4, label: 'Theatre 4' },
        ];
        return (
            <div style={styles.container}>
                <div style={styles.carouselContent}>
                    <div className={this.props.currentScreen === 1 ? '' : 'hidden'}>
                        <div style={styles.label}>How many people?</div>
                        <div style={styles.buttonsContainer}>
                            <Button bsStyle="default">1</Button>{" "}
                            <Button bsStyle="default">2</Button>{" "}
                            <Button bsStyle="default">3</Button>{" "}
                            <Button bsStyle="default">4</Button>{" "}
                            <Button bsStyle="default">5</Button>{" "}
                            <Button bsStyle="default">6</Button>{" "}
                            <Button bsStyle="default">7</Button>{" "}
                            <Button bsStyle="default">8</Button>{" "}
                            <Button bsStyle="default">9</Button>{" "}
                            <Button bsStyle="default">10</Button>{" "}
                        </div>
                    </div>

                    <div className={this.props.currentScreen === 2 ? "" : 'hidden'}>
                        <div style={styles.label}>Where?</div>
                        <div>
                            <Typeahead
                                onChange={(selected) => {
                                    // Handle selections...
                                }}
                                options={options}
                            />
                        </div>
                    </div>

                    <div className={this.props.currentScreen === 3 ? "" : 'hidden'}>
                        <div style={styles.label}>Select Time</div>
                        <div>
                            <Button bsStyle="default">12.20 PM</Button>{" "}
                            <Button bsStyle="default">2.30 PM</Button>{" "}
                            <Button bsStyle="default">5 PM</Button>{" "}
                        </div>
                    </div>

                    <div className={this.props.currentScreen === 4 ? "" : 'hidden'}>
                        <div style={styles.label}>Select Seats</div>
                        <div>
                            <img src={screenLayout} alt="screen" width="100%" />
                        </div>
                    </div>

                    <div className={this.props.currentScreen === 5 ? "" : 'hidden'}>
                        <div style={styles.label}>Review and Pay</div>
                        <div style={styles.ticketReview}>
                            <div id="bill" style={styles.reviewScreen}>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td>Movie Name</td>
                                            <td>Sarkar</td>
                                        </tr>
                                        <tr>
                                            <td>No Of Tickets</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>APAS Films</td>
                                        </tr>
                                        <tr>
                                            <td>Seat Number</td>
                                            <td> L2, L3</td>
                                        </tr>

                                        <tr>
                                            <td>Ticket Cost</td>
                                            <td>500 X 2 = 1000 INR</td>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <td>120 INR</td>
                                        </tr>
                                        <tr>
                                            <td>Handling Charges</td>
                                            <td>120 INR</td>
                                        </tr>
                                        <tr>
                                            <td>Total Cost</td>
                                            <td>1240 INR</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button bsStyle="danger"> Pay </Button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

let styles = {
    container: {},
    carouselContent: {
        height: "380px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonsContainer: {},
    label: {
        justifyContent: "center",
        /* align-items: center; */
        display: "flex",
        paddingBottom: "10px"
    },

    hiddenDiv: {
        display: 'none'
    },
    ticketReview : {
        display:'flex',
    },
    reviewScreen : {
        display:'flex',
        flexDirection: 'column'
    }



};
