import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Resume from "../../static/resume2021.pdf"

export default function Home() {

  return (
    <div className="container">
      <Header pageTitle="Hi, I'm Milly 👋" />
      <section>
        <p className="lead">I'm a product leader, creative technologist and UX designer based in Melbourne, Australia.</p>
        <p>My goal is to create, train and support high-performing, empowered, cross-functional teams as they amazing products that make the world a better place.</p>
        <p>This website collects my experience, projects, community work, and testimonials if you wish to go beyond my <a target="_blank" href={Resume}>CV</a>.</p>
      </section>
      <section>
        <h2>Get in touch</h2>
        <ul className="list-disc">
          <li><a target="_blank" href="https://medium.com/@meeli">My writing (at Medium)</a></li>
          <li><a target="_blank" href="https://slides.com/ameliaschmidt">My slides (at Slides)</a></li>
          <li><a target="_blank" href="https://www.slideshare.net/AmeliaSchmidt">More slides (at SlideShare)</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/ameliaschmidt/">My resume (at LinkedIn)</a></li>
          <li><a target="_blank" href="https://twitter.com/meelijane">My sense of humour (at Twitter)</a></li>
          <li><a target="_blank" href="https://github.com/meelijane">My code (at Github)</a></li>
          <li><a target="_blank" href="mailto:meeli.jane@gmail.com">My email (at Gmail)</a></li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}
