import React from 'react'

export default function headerVideo(props) {
    return (
        <div className="header-video">
            <div className="video-display-wrapper">
                <video width="100%" height="100%" src={props.video} preload="auto" loop autoPlay muted></video>          
                <div className="video-display-text">
                    {props.superHeader ? props.superHeader : null}
                    {props.header}
                    {props.subHeader}
                </div>          
            </div>
        </div>
    )
}