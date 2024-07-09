import React from 'react'

function Section({ data }) {
    return (
        <>
            <section className="showcase">
                <div className="container-fluid p-0">
                    {data.count % 2 === 0 ? <div className="row g-0">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${data.img})` }}></div>
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>{data.topic}</h2>
                            <p className="lead mb-0">{data.description}</p>
                        </div>
                    </div> :
                        <div class="row g-0">
                            <div class="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(${data.img})` }}></div>
                            <div class="col-lg-6 my-auto showcase-text">
                                <h2>{data.topic}</h2>
                                <p class="lead mb-0">{data.description}</p>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Section