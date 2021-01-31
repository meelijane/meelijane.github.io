import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <header className="my-12">
      <nav className="my-10">
        <Link activeStyle={{ color: "black", textDecoration: "none" }} className="font-semibold mr-2" to="/">Home</Link>
        <Link activeStyle={{ color: "black", textDecoration: "none" }}  className="font-semibold m-2" to="/about/">About</Link>
        <Link activeStyle={{ color: "black", textDecoration: "none" }}  className="font-semibold m-2" to="/career/">Career</Link>
        <Link activeStyle={{ color: "black", textDecoration: "none" }}  className="font-semibold m-2" to="/community/">Community</Link>
        <Link activeStyle={{ color: "black", textDecoration: "none" }}  className="font-semibold m-2" to="/testimonials/">Praise</Link>
      </nav>
      <h1 className="text-3xl font-bold">{props.pageTitle}</h1>
    </header>
  )
}
