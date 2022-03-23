import React from "react";

export default function Page(props) {
    return (
        <section className="container">
            <div className="lists">
                <div className="left">
                    <img src={`../images/${props.item.imageUrl}`} className="images" />
                </div>
                <div className="right">
                    <div className="top">
                        <h4>{props.item.location}</h4>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2>{props.item.title}</h2>
                    <div className="date">
                        <span>{props.item.startDate} - </span>
                        <span>{props.item.endDate}</span>
                    </div>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}