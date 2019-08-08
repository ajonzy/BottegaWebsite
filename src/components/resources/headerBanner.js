import React from 'react'

export default function headerBanner(props) {
    return (
        <div className="header-banner">
            <div className="banner-display-wrapper" style={{backgroundImage: props.banner ? `url(${props.banner})` : null}}>
                <div className="banner-display-text">
                    {props.superHeader ? props.superHeader : null}
                    {props.header ? props.header : null}
                    {props.subHeader ? props.subHeader : null}
                </div>          
            </div>
        </div>
    )
}