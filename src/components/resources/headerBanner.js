import React from 'react'

export default function headerBanner(props) {
    return (
        <div className="header-banner">
            <div className="banner-display-wrapper" style={{backgroundImage: `url(${props.banner})`}}>
                <div className="banner-display-text">
                    {props.superHeader ? props.superHeader : null}
                    {props.header}
                    {props.subHeader}
                </div>          
            </div>
        </div>
    )
}