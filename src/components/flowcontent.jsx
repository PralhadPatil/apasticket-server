import React from "react";
import { Button } from "react-bootstrap";

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

        return (
            <div style={styles.container}>
                <div style={styles.carouselContent}>
                    <div className={this.props.currentScreen === 1 ? '' : 'hidden'}>
                        <div style={styles.label}>How many people?</div>
                        <div style={styles.buttonsContainer}>
                            <Button bsStyle="primary">1</Button>{" "}
                            <Button bsStyle="primary">2</Button>{" "}
                            <Button bsStyle="primary">3</Button>{" "}
                            <Button bsStyle="primary">4</Button>{" "}
                            <Button bsStyle="primary">5</Button>{" "}
                            <Button bsStyle="primary">6</Button>{" "}
                            <Button bsStyle="primary">7</Button>{" "}
                            <Button bsStyle="primary">8</Button>{" "}
                            <Button bsStyle="primary">9</Button>{" "}
                            <Button bsStyle="primary">10</Button>{" "}
                        </div>
                    </div>

                    <div className={this.props.currentScreen === 2 ? "" : 'hidden'}>
                        <div style={styles.label}>Where?</div>
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
    }


};
