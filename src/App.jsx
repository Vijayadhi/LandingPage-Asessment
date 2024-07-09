import React from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Section from './components/NewsTopics'
import Testimonials from './components/Testimonials'
import GetstartedSection from './components/GetstartedSection'
import Footer from './components/Footer'
function App() {
  let data = [
    {
      count: 0,
      topic: "Helping you search outside the box",
      img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/PRAssets_Multisearch.gif",
      description: "With Lens, you can search the world around you with your camera or an image. (People now use it to answer more than 8 billion questions every month!) Earlier this year, we made visual search even more natural with the introduction of multisearch, a major milestone in how you can search for information. With multisearch, you can take a picture or use a screenshot and then add text to it — similar to the way you might naturally point at something and ask a question about it. Multisearch is available in English globally, and will be coming to over 70 languages in the next few months."
    },
    {
      count: 1,
      topic: "New ways to explore information",
      img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/PRAssets_Search_RichSuggest_FortFunston.gif",
      description: "As we redefine how people search for and interact with information, we’re working to make it so you’ll be able to ask questions with fewer words — or even none at all — and we’ll still understand exactly what you mean, or surface things you might find helpful. And you can explore information organized in a way that makes sense to you — whether that’s going deeper on a topic as it unfolds, or discovering new points of view that expand your perspective.\n An important part of this is being able to quickly find the results you’re looking for. So in the coming months, we’re rolling out an even faster way to find what you need. When you begin to type in a question, we can provide relevant content straight away, before you’ve even finished typing."
    },
    {
      count: 2,
      topic: "New shortcut suggestions",
      img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Chrome_Mobile_Search_Blog_Person.width-1000.format-webp.webp",
      description: "Our new shortcut suggestions feature for both Chrome on Android and iOS brings a personalized touch to your address bar, helping you navigate to a website based on what you normally type to get there. For instance, maybe you usually type in “schedules” to see times for the City Metro because that word is a part of the site’s description. Thanks to this new feature, City Metro will now appear higher up in your search suggestions whenever you search “schedules.”"
    },
  ]
  return (
    <>

      <TopBar />
      <Header />

      {
        data.map((e, i) => {
          return <Section data={e} key={i} />

        })
      }
      <Testimonials />
      <GetstartedSection />
      <Footer />
    </>
  )
}

export default App