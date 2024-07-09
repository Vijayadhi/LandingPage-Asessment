import React from 'react'

function Testimonials() {
    let data = [
        {
            name: "Sundar Pichai",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdoerlife.com%2Fwp-content%2Fuploads%2F2020%2F03%2FSP.png&f=1&nofb=1&ipt=3bbb1d3cd2a64aea8eeaabd81b2d94404cf519bdae63123949a8f8c19d8b2b1f&ipo=images",
            quote: "It turns out we'll be able to serve well over 99% of the queries [that people make]"
        },
        {
            name: "Eric Schmidt ",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.com.au%2Fen%2Ffull%2F1734123%2Fformer-google-ceo-eric-schmidt.jpg%3Fw%3D736%26f%3D6ce36818f7028ed706cc7af464f39297&f=1&nofb=1&ipt=370847a6208866620536400de6a3a1ee0d42ebe41446e8b37efbb170d56e731f&ipo=images",
            quote: "There are no words to describe the feeling. This is space travel. This is a dream turned reality"
        },
        {
            name: "Larry Page",
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wired.com%2Fimages_blogs%2Fbusiness%2F2012%2F04%2Flarrypage.jpg&f=1&nofb=1&ipt=6160917421cb22cf399469871557ee4f48bc11c901493e910ae5dec7fe653c28&ipo=images",
            quote: "The ultimate search engine would basically understand everything in the world, and it would always give you the right thing. And we’re a long, long way from that."
        },
    ]
    return (
        <>
            <section className="testimonials text-center bg-light">
                <div className="container">
                    <h2 className="mb-5">What people are saying...</h2>
                    <div className="row">
                        {data.map((e, i) => {

                            return <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" src={e.image} alt="..." />
                                    <h5>{e.name}</h5>
                                    <p className="font-weight-light mb-0">"{e.quote}"</p>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials