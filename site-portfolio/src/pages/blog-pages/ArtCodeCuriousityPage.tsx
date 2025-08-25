import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
// import { DISCORD_LINK } from "../../constants/mylinks";
import Thumbnail from "../../assets/SiteIcon.png";
import { useEffect } from "react";

export default function ArtCodeCuriousityPage() {
  useEffect(() => {
    document.title = "CJ Presley | Art, Code & Curiousity";
  });
  return (
    <>
      <MDBContainer className="my-4 px-3 text-light">
        <div className="thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <MDBRow>
          <MDBCol>
            <h1 className="text-center text-light fw-bold pb-2">
              Welcome to My World:
              <br />
              Blending Art, Code and Curiousity
            </h1>
            <div className="border-bottom border-secondary mb-3" />
          </MDBCol>
        </MDBRow>
        <div className="px-5">
          <MDBRow className="my-2">
            <MDBCol>
              <h6 className="text-light fw-light fw-italic">
                By{" "}
                <a className="text-light" href="#/about">
                  CJ PRESLEY
                </a>{" "}
                [ 24-05-2-24 - 22:51 ]
              </h6>
              <h3 className="fw-bold">Introduction</h3>
              <h5 className="px-5">
                Welcome to my first blog, as a bit of an explanation as to why I
                started this: I was bored. Anyways! My name is CJ, you can call
                me that or by my online pseudonym 'Cassi'. I am a chronically
                online individual, with experience in Web Development, Graphic
                Design, and Full Stack Development. Currently (as of writing
                this), I am 18 years old! I am the owner/creator of the discord
                bot Sgathach, who was named for the trainer of "the Hound of
                Ireland: Cu Chulainn"!
                <br />
                <br />
                My pseudonym, 'Cassi', was originally derived as the shortened
                version of the name for a constellation, namely; Cassiopeia! It
                was originally used as my Minecraft username "SkyGodCassiopeia"
                on a modded Minecraft server before people slowly started
                adopting the name and calling me by it. At the time, I was known
                as "Cypher", a name I had been known as since my early days on
                YouTube.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">The Artistic Journey</h3>
              <h5 className="px-5">
                Since my early days in primary school talking with my friends, I
                was enamored with art. At first, it was something I did to prove
                I was as good as others, a product of my insecurities after
                moving schools. I continued to draw and create different pieces
                of art all through my time in primary school and into secondary
                school. This continued until Year 8 (my second year in secondary
                school) when Covid-19 hit in the spring of that year.
                <br />
                <br />
                Throughout Covid-19, I had a benefit that no other student had;
                my mother was a key worker - an adult social care worker -
                meaning I was kept in school during the lockdown, where my
                siblings and I spent every day for the period of time that was
                the lockdown. During this time, I practiced and taught myself
                many different techniques and began the process of choosing my
                electives for my last 2 years.
                <br />
                <br />I ended up choosing primarily art tracks: 3D Design,
                Creative iMedia/Graphic Design, and Art, Craft and Design. In
                these courses, I thrived, building the base upon which my future
                would be built; learning from professionals and building
                portfolios for examinations.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">The Binary Pilgrimage</h3>
              <h5 className="px-5">
                I began my journey into the hell that is coding just a few short
                years ago, when I first started at my college on my T-Level
                Course: Digital Production, Design, and Development. I started
                out learning the basics and theory surrounding the world of
                coding as well as all the legislation, copyright law, and
                trademark problems - the issues that come with handling vast
                amounts of data; such as GDPR compliance.
                <br />
                <br />
                My first experience with programming was, funnily enough, HTML5
                during my time at secondary school - in the lead-up to my
                enrollment in college to prepare myself for what was to come. My
                second experience was with Python, the 1st language I was taught
                by a tutor. I became rather adept at the language, being able to
                work with databases and development environments at this point
                and now I even have a discord bot written with the help of the
                discord-py library.
                <br />
                <br />
                My next experience with a programming language was with C#, more
                specifically - OOP in .NET form applications through Visual
                Studio. The tutor for this also helped me to broaden my
                knowledge in HTML5 before they left for greener pastures.
                <br />
                <br />
                In my second year at college, I began the process of learning
                React/TypeScript paired with Full-Stack Development to create
                web applications on the fly. This was used in my final project
                for college; the 'Occupational Specialism' in which I was given
                70 hours of supervised access to the internet to create a
                Full-Stack web solution to a brief; we had sections where we
                only had limited time to complete each section; 20 hours in
                Planning, 30 hours in actual coding, 20 hours in Feedback and 2
                hours in Evaluation.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Beyond Powershells and Pencils</h3>
              <h5 className="px-5">
                Coding and Art aren't my only interests. Outside of them, I have
                a vested interest in video games and general content creation,
                especially when either are carried out with my friends. In my
                free time, I enjoy playing games such as Minecraft, Terraria,
                and Lethal Company with others and streaming them for the world
                to see. I also enjoy posting, creating, editing, and producing
                videos for online platforms like YouTube.
                <br />
                <br />
                Additionally, I enjoy spending time in nature with my family,
                especially in the local wilds around me. I also spend my time
                tinkering with computer parts and other pieces of technology or
                vehicles such as bikes.
                <br />
                <br />I volunteer some of my free time at my local community
                group helping to manage magazine creation, joining in on
                projects and events, and helping with the planning and/or
                function of events.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">The Path Ahead</h3>
              <h5 className="px-5">
                Going forward you can expect anything from critical reviews to
                promotional/accompanying video essays and blogs on anything from
                art to code and anything else that catches my interest.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Beyond Powershells and Pencils</h3>
              <h5 className="px-5">
                Coding and Art aren't my only interests. Outside of them, I have
                a vested interest in video games and general content creation,
                especially when either are carried out with my friends. In my
                free time, I enjoy playing games such as Minecraft, Terraria,
                and Lethal Company with others and streaming them for the world
                to see. I also enjoy posting, creating, editing, and producing
                videos for online platforms like YouTube.
                <br />
                <br />
                Additionally, I enjoy spending time in nature with my family,
                especially in the local wilds around me. I also spend my time
                tinkering with computer parts and other pieces of technology or
                vehicles such as bikes.
                <br />
                <br />I volunteer some of my free time at my local community
                group helping to manage magazine creation, joining in on
                projects and events, and helping with the planning and/or
                function of events.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Join the Discussion</h3>
              <h5 className="px-5">
                Want to join the conversation? Join the{" "}
                <a href="#">discord server</a>!
              </h5>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </>
  );
}
