import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function About() {

  return (
    <div className="container">
      <Header pageTitle="You're lost" />
      <section>
        <p className="lead">The page you're looking for doesn't exist.</p>

      </section>
      <Footer />

    </div>
  )
}
