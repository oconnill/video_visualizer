import React from "react";
import {Player} from "video-react";
import StatVisualizer from "../StatVisualizer/StatVisualizer";
import './LiveChart.scss'
import stats from "../../Data/stats";

class LiveChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: 0,
            currentTime: 0
        };
    }

    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {
        this.setState({
            player: state,
            currentTime: state.currentTime,
            duration: state.duration
        });
    }

    logDuration = () => {
        console.log(this.state.currentTime);
    }

    // TODO SCRUB HANDLING TO CHANGE DATA

    displayCurrentGame = (currentTime) => {
        return stats[Math.round(currentTime)]['MATCH UP']
    }

    render() {
        const {logDuration, displayCurrentGame} = this;
        const {duration, currentTime} = this.state;

        return (
            <div className=''>
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    ref={(player) => {
                        this.player = player
                    }}
                />
                <div>
                    <div className={"stat-visualizer-container"}>
                        <StatVisualizer
                            duration={duration}
                            currentTime={currentTime}
                        />
                    </div>
                    <div>
                        {displayCurrentGame(currentTime)}
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveChart;



