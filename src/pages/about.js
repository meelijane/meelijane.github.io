import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function About() {

  return (
    <div className="container">
      <Header pageTitle="More about me" />
      <section>
        <p className="lead">I help growing product companies plan for the future using design thinking, human centred design, systems thinking and Lean methodologies. I love research and validating ideas with users to decrease risk and solve real problems, but I also love seeing ideas through and working closely with implementation teams to build robust solutions that scale.</p>
        <p>My background is technical (I was a front-end engineer) so I'm well-versed in various Javascript frameworks like React, Hoplon (Clojurescript), Angular and Vue, as well as PHP, HTML/CSS, and CMS/LMS frameworks like Drupal, edX, Canvas, etc.</p>
        <p>I am an Agile advocate and have many years of experience in Agile teams, mainly Scrum. I have taught Agile/Scrum courses and am an experienced facilitator of Scrum rituals (though not an official Scrum Master).</p>
        <p>I believe in the power of design systems and design ops and have been advocating for component-driven front-ends everywhere I work.</p>
        <p>I've run my own business (both product and consulting) as an entrepreneur, and I've managed teams of designers, developers and other collaborators. I'm passionate about progressive, modern leadership, diversity, inclusion and frictionless productivity.</p>
        <p>Also, I teach, speak and write about design and am an active member of my local design community. I'm based in Melbourne but am dreaming of moving to the Northern Hemisphere.</p>
        <p>You may notice a conspicuous lack of financial institutions, Big 4 consultancies and famous multinationals on my CV. That's by design; I'm careful about where I work and I'm looking for purpose-driven product organisations working to make the world better. Sustainability and diversity in particular are meaningful for me, and I am working on moving my career towards more meaningful and impactful work.</p>
      </section>

      <section>
        <h2>Currently</h2>
        <p>I'm currently the Director of product at <a target="_blank" href="https://www.usabilityhub.com">UsabilityHub</a>.</p>
        <p>UsabilityHub is a tool that helps UX designers test their ideas with a scalable remote panel. As Director of product, I work with the leadership team and the product (development) team on product strategy and execution. We're a small team based in Collingwood. We have some impressive customers, product-market fit and a wonderful culture.</p>
        <p>I am also the organiser of <a target="_blank" href="https://www.meetup.com/en-AU/IxDA-Melbourne">IxDA Melbourne</a>. We are building a community of learning and for designers of different disciplines, beyond pixels and screens. We hear from service designers, architects, learning designers and all other kinds of people practicing human-centred design principles in their day to day work. We run the meetup every two months in Melbourne CBD.</p>
        <h2>Future</h2>
        <p>I'm looking impactful, meaningful and ethical work. I'm keen to work with small organisations, particularly those with a commitment to sustainability, diversity and inclusion, and especially those led by women.</p>
        <p>I'm interested in leadership roles and advisory opportunities, and am keen to chat to you if your organisation is led by human-centred design principles.</p>
        <p>My day rate starts at $1000 AUD (+GST). For full-time roles I'm interested in salaries of $140K and above. (I believe that being transparent about pay makes it <a href=
          "https://pubsonline.informs.org/doi/abs/10.1287/orsc.2014.0950?journalCode=orsc&" target="_blank">fairer for everyone</a>). I'm keen to work in Melbourne, Australia and potentially beyond - remote and flexible commitments are appealing.</p>
        <p>I'm usually doing something important with my time, but I'm always keen to chat.</p>

      </section>

      <section>
      <h2>Values</h2>
        <ul className="list-disc">
          <li>Do one thing at a time</li>
          <li>No secret work</li>
          <li>If you talk about it, then do it</li>
          <li>You can only succeed if you try</li>
          <li>Be relentlessly competent</li>
          <li>Design makes power explicit; implicit power creates inequality</li>
          <li>Diversity only exists when you consciously design for it</li>
          <li>Sentence case > title case, no Oxford commas. </li>
        </ul>
      </section>

      <section>
        <h2>Outside of capitalism</h2>
        <p>When I'm not on the clock I prefer to not be at a screen, unless it's a film or excellent TV show. I enjoy cycling, reading books, running, yoga, gardening and being in nature. Keeping this website up to date is not my favourite hobby.</p>
      </section>


      <Footer />

    </div>
  )
}
