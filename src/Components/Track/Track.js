import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.renderAction = this.renderAction.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    onAdd() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.onAdd}>+</button>
        };
    }

    render() {
        return(
            <div class="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
};

export default Track;