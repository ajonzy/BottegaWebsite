import React from 'react'

import BannerImage from "../../../../static/assets/images/partnerships/top-banner.jpg"

export default function topBanner(props) {
    const bannerContent = {
        university: (
            <div className="top-banner-content-wrapper">
                <div className="top-banner-content">
                    <h3>University Partnerships</h3>
                    <a href="#UniversityPartners">Partner with Bottega</a>
                </div>
            </div>
        )
    }
    return (
        <div className="top-banner" style={{backgroundImage: `url(${BannerImage})`}}>
            {bannerContent[props.partner]}
        </div>
    )
}