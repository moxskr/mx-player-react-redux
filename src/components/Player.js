import React from 'react';
import {connect} from "react-redux";
import {Play, Pause, TimeUpdate, OnTimeClick, OnVolumeClick} from "../actions/player";
import {NextTrack, PrevTrack} from "../actions/tracklist";

class Player extends React.Component{
    componentDidMount() {
        this.media = document.getElementById('player-audio');
        this.media.addEventListener('timeupdate', this.onTimeUpdate);
        this.media.volume = 0.5;
    }

    componentWillUnmount() {
        this.media.removeEventListener('timeupdate', this.onTimeUpdate);
    }

    onTimeUpdate = () => {
        if(this.media.currentTime !== this.media.duration){
            this.props.TimeUpdate(this.media);
        }
        else{
            this.props.NextTrack(this.props.tracks.currentTrack.id, this.media);
        }
    };

    onLineClick = (e) => {
        e.preventDefault();
        let part = (e.screenX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.clientWidth;
        this.props.OnTimeClick(part, this.media);
    };

    onVolumeLineClick = (e) => {
        e.preventDefault();
        let part = (e.screenX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.clientWidth;
        this.props.OnVolumeClick(part, this.media);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.tracks.currentTrack !== prevProps.tracks.currentTrack){
            this.props.Play(this.media);
        }
    }

    render(){
        const {currentTrack} = this.props.tracks;
        return(
            <>
                <audio src={currentTrack.audio} id="player-audio"></audio>
                <img src={currentTrack.image} alt=""/>
                <div className="player-controls d-flex flex-column">
                    <div className="player-progress-line" onClick={(e) => this.onLineClick(e)}>
                        <div className="line" style={{width : `${this.props.player.progressLine}%`}}></div>
                    </div>
                    <div className="player-btns d-flex justify-content-center align-items-center">
                        <ul className="controls">
                            <li>
                                {this.props.player.isPlaying && true ?
                                    <button className="btn" onClick={() => this.props.Pause(this.media)}><i className="fas fa-pause"></i></button> :
                                    <button className="btn" onClick={() => this.props.Play(this.media)}><i className="fas fa-play"></i></button>}

                            </li>
                            <li>
                                <button className="btn" onClick={() => this.props.PrevTrack(currentTrack.id, this.media)}>
                                    <i className="fas fa-step-backward"></i>
                                </button>
                            </li>
                            <li>
                                <button className="btn" onClick={() => this.props.NextTrack(currentTrack.id, this.media)}>
                                    <i className="fas fa-step-forward"></i>
                                </button>
                            </li>
                            <li>
                                <div className="volume-line" onClick={(e) => this.onVolumeLineClick(e)}>
                                    <div className="line" style={{width : `${this.props.player.volume}%`}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    tracks : state.tracks,
    player : state.player
});

export default connect(mapStateToProps, {Play, Pause, TimeUpdate, OnTimeClick, OnVolumeClick, NextTrack, PrevTrack})(Player);