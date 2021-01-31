import React from "react"

export default function Job(props) {

  return (
      <div className="my-10 grid grid-cols-12">
        <div className="mr-10 col-span-12 md:col-span-3 flex">
            <img className="object-center object-contain h-auto w-full flex-1" src= {props.logo} />
        </div>
        <div className="col-span-12 md:col-span-9">
          <h3 className="text-2xl font-bold"><a target="_blank" href= {props.website} >{props.employer}</a> - {props.position}</h3>
          <p>{props.dates}</p>
          <p>{props.description}</p>
        </div>
      </div>
  )
}
