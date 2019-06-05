import React from 'react';
import {PlayTrackById} from "../actions/tracklist";
import {connect} from "react-redux";

class TrackListItem extends React.Component{
    render() {
        return (
            <div className="track-list-item row">
                <audio src={this.props.item.audio} id={`audio-${this.props.item.id}`}></audio>
                <div className="col-lg-1 col-md-2 col-3">
                    <button className="btn" onClick={() => this.props.PlayTrackById(this.props.item.id)}>
                        <i className="fas fa-play"></i>
                    </button>
                </div>
                <div className="col-lg-10 col-md-8 col-6">
                    <h4>{this.props.item.title}</h4>
                </div>
                <div className="col-lg-1 col-md-2 col-3">

                </div>
            </div>
        )
    }
}

export default connect(null, {PlayTrackById})(TrackListItem);