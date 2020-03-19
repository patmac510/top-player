/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MediaImage from './MediaImage.jsx';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      artistClass: 'TP-artistNameDefault',
    };
    this.audio = new Audio(props.mediaFile);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.playButtonClick = this.playButtonClick.bind(this);
    this.nameMouseover = this.nameMouseover.bind(this);
    this.nameMouseleave = this.nameMouseleave.bind(this);
  }

  playSong(song) {
    song.play();
    this.setState({ paused: song.paused });
    // console.log(song.paused);
  }

  pauseSong(song) {
    song.pause();
    this.setState({ paused: song.paused });
    // console.log(song.paused);
  }

  playButtonClick() {
    if (this.state.paused) {
      this.playSong(this.audio);
    } else if (!this.state.paused) {
      this.pauseSong(this.audio);
    }
  }

  nameMouseover() {
    this.setState({ artistClass: 'TP-artistNameHover' });
  }

  nameMouseleave() {
    this.setState({ artistClass: 'TP-artistNameDefault' });
  }


  render() {
    return (
      <div>
        <MediaImage
          mediaFile={this.props.mediaFile}
          currentTime={this.audio.currentTime}
          duration={this.audio.duration}
          comments={this.props.comments}
        />
        <div className="TP-playComponent">
          <div className="TP-buttonContainer">
            <button
              type="button"
              id="TP-playButton"
              className="TP-playButton"
              onClick={this.playButtonClick}
            >
              {}
            </button>
          </div>
          <div className="TP-playSongInfo">
            <div
              className="TP-nameContainer"
              onMouseEnter={this.nameMouseover}
              onMouseLeave={this.nameMouseleave}
            >
              <div className={this.state.artistClass}>{this.props.artistName}</div>
            </div>
            <div className="TP-songTitle">{this.props.songTitle}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayButton;
