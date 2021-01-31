import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Job from "../components/job"
import UHlogo from "../../static/usabilityhub-logo.svg"
import RMITlogo from "../../static/rmit-logo.png"
import RATEITlogo from "../../static/rateit-logo.svg"
import CIRCLEINlogo from "../../static/circlein-logo.png"
import ESTIMATEONElogo from "../../static/estimateone-logo.svg"
import CLOVERlogo from "../../static/clover-logo.svg"
import EQUIEMlogo from "../../static/equiem-logo.svg"
import GODELlogo from "../../static/godel-logo.png"
import BEATlogo from "../../static/beat-logo.png"
import ITSlogo from "../../static/itstrategic-logo.png"
import EWlogo from "../../static/ew-logo.png"
import QUARTZlogo from "../../static/quartz-logo.svg"
import WEAVElogo from "../../static/weave-logo.svg"


export default function Career() {
  return (
    <div className="container">
      <Header pageTitle="Career" />
      <section>
      <div className=" ">
        <Job
          employer="UsabilityHub"
          position="Director of product"
          dates="2019-2020"
          logo={UHlogo}
          listOfTags={["leadership","management","product management","strategy","ux design", "ux research"]}
          website="https://www.usabilityhub.com"
          description="At UsabilityHub I am building a product that legitimately makes design better by democratizing research. If you haven't tried it, go and run a test now. It really changes the game. I'm a T-shaped person in a T-shaped role here, working closely with CX, leadership, developers and support to collaboratively build new product ideas based on customer feedback. In the time I've been here, I've formalised the product team, developed a compelling product strategy, taken over Scrum Master duties, started hiring product team members and designed and delivered multiple headline features."
        />

        <Job
          employer="RMIT Online"
          position="Senior UX designer"
          dates="2018"
          logo={RMITlogo}
          website="https://online.rmit.edu.au/"
          listOfTags={["ux research", "management", "ux design"]}
          description="As a Senior UX Designer at RMIT Online I established multiple UX processes and feedback loops to help the course buidling and support teams learn from student and teacher feedback. I developed design ops templates and processes around end of first run depth interviews, usability testing for learning activity design, led the design guild, and also developed a component-driven approach and refactor for the HTML/CSS front-end of online courses in the edX LMS, including moving their existing code to Sass and Git. I advised on and campaigned successfully for a platform migration and helping to develop resources and tools to increase engagement through a series of measurable Lean experiments. I also increased their survey response rates through survey design improvements and have developed a centralised feedback repository where insights from interviews, surveys and emails are collected, collated and labelled in a transparent way so teams can draw on them in their sprint planning or instantly solve problems as hotfixes."
        />

        <Job
          employer="RateIt"
          position="Director of product and design"
          dates="2018"
          logo={RATEITlogo}
          website="https://www.rateitapp.com"
          listOfTags={["leadership","management","product management","strategy","ux design", "ux research"]}
          description="I was Director of product and design at a rapidly evolving CX startup RateIt where I managed a team of software engineers, a junior product manager and a graphic designer. I hired a senior UXer, started their component library and design system, shifted a team into a productive agile process, created a practice of human-centred design and was a damn good manager. I was part of the senior leadership team and helped shape strategy, OKRs and culture."
        />

        <Job
          employer="EstimateOne"
          position="UX/product designer"
          dates="2017-2018"
          logo={ESTIMATEONElogo}
          website="https://www.estimateone.com"
          listOfTags={["leadership","ux design", "ux research"]}
          description="I kickstarted a culture of design, research, testing and lean product development as acting head of design at EstimateOne. I worked closely with their head of product and product team leaders to engage in various qualitative research initiatives, and I mentored their UI designer to develop his UX skills and take his designs to users as prototypes to get feedback through usability testing. I also helped the team here understand UX methods and tools that they hadn't encountered before, including a particular deep dive into usability testing."
        />

        <Job
          employer="Clover"
          position="UX engineer"
          dates="2016-2017"
          logo={CLOVERlogo}
          website="https://www.clover.com.au/"
          listOfTags={["front-end development","react","strategy","ux design", "ux research"]}
          description="I refactored a huge amount of code into a robust React component system (deleting more code than I added!) and helped refine and improve the onboarding flow (through some deep and thorough user research and testing) at fin-tech startup Clover. I also worked closely with an inspirational cross-functional team of experts to run an amazing Design Sprint (chatbots!) and conduct various rigorous and effective research and design projects around complex financial products and data visualisation. We increased their acquisition rate by around 40% through optimisation and UI/UX improvements, and I designed their dashboard and iOS app concepts."
        />

        <Job
          employer="Weave"
          position="UX designer"
          dates="2016"
          logo={WEAVElogo}
          website="https://www.weaveweb.com.au/"
          listOfTags={["content strategy","information architecture design","drupal","ux design","ux research"]}
          description="I worked briefly for Weave, a content strategy and Drupal site development agency, where I created the content strategy, information architecture and UX design for the Victorian Government State of the Bays report as well as other key customers, including Nandos."
        />

        <Job
          employer="Equiem"
          position="UX Lead and front-end engineer"
          dates="2015-2016"
          logo={EQUIEMlogo}
          website="https://www.getequiem.com/"
          listOfTags={["leadership","management","front-end development","drupal","ux design","ux research"]}
          description="I designed and built a pluggable, customisable, scalable and re-usable multi-site theme system architecture and grew a team of UX designers at Equiem. I also led Design Sprints and an in-depth research and Lean product validation process around a Click and Collect product, including user flows, depth interviews, wireframes, prototypes and data analysis."
        />

        <Job
          employer="Godel"
          position="UX Lead and front-end engineer"
          dates="2011-2015"
          logo={GODELlogo}
          listOfTags={["management","front-end development","drupal"]}
          description="I led a team of developers building Drupal-based CMS solutions at Godel. Some highlight projects included building an online e-commerce store for Pavement Brands, creating an interactive creative onboarding quiz for high-end fashion brand 2-Times, working with mental health organisations Neami National and MHFA, collaborating with larger Drupal agencies Technocrat and PreviousNext to develop the front-end code for government sites for AIFS and DHS, as well as Carey Baptist Grammar School, The Wilderness Society, Fred Hollows Foundation and more."
        />

        <Job
          employer="Beat"
          position="UX Lead and front-end engineer"
          dates="2010-2011"
          logo={BEATlogo}
          website="https://www.beat.com.au/"
          listOfTags={["editing","strategy","writing"]}
          description="I worked at Beat magazine to build an online version of their magazine that helped streamline their editorial workflow. I redesigned their website as well as developed tech solutions to take their whole submission and publication process online-first, with automated exports to their print magazine."
        />

        <h2>Selected freelance projects</h2>

        <Job
          employer="CircleIn"
          position="Freelance UX consultant"
          dates="2018"
          logo={CIRCLEINlogo}
          listOfTags={["consulting","ux design","content strategy"]}
          website="https://circlein.com.au"
          description="I worked with Circle In to help them re-think their UI to consolidate their two different career advice portals for parents into a unified experience with research and co-design workshops."
        />

        <Job
          employer="ITStrategic"
          position="Freelance UX consultant"
          dates="2018"
          logo={ITSlogo}
          website="https://www.itstrategic.com.au/"
          listOfTags={["consulting","ux design","ux research","content strategy"]}
          description="I built a content strategy and relaunched a killer website for ItStrategic. This included depth interviews with various staff members and exploration and analysis of their current customer base and their needs, a site audit and analysis, ideation, card sorting and prototyping, through to a site build and brand development with the help of Rosie Ren."
        />

        <Job
          employer="EstimateWork"
          position="Co-founder"
          dates="2014-2016"
          logo={EWlogo}
          website="https://estimatework.com/"
          listOfTags={["business venture","ux design","front-end development","clojurescript"]}
          description="I co-founded and built much of SaaS project management app Estimate Work. I created a Lean business plan and product roadmap based on customer research, plus various rounds of evaluative testing on mockups and prototypes. I built the front-end in Clojurescript."
        />

        <Job
          employer="Various"
          position="Freelance journalist"
          dates="Various"
          logo={QUARTZlogo}
          website="https://qz.com/author/ameliaschmidt/"
          listOfTags={["freelance","writing"]}
          description="I've written multiple articles for international business news and culture publication Quartz about mindfulness, pop culture and more."
        />


      </div>



      </section>
      <Footer />
    </div>
  )
}
