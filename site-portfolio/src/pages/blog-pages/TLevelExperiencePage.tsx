import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Thumbnail from "../../assets/SiteIcon.png";
import { useEffect } from "react";
import {
  DISCORD_LINK,
  TLEVELREF1,
  TLEVELREF2,
  TLEVELREF3,
  TLEVELREF4,
  TLEVELREF5,
  TLEVELREF6,
  TLEVELREF7,
  TLEVELREF8,
  TLEVELREF9,
} from "../../constants/mylinks";
import TLevelImage1 from "../../assets/T-Levels.jpg";

export default function TLevelExperiencePage() {
  useEffect(() => {
    document.title = "CJ Presley | The T-Level Experience";
  });
  return (
    <>
      <MDBContainer className="my-4 px-3">
        <div className="thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <MDBRow>
          <MDBCol>
            <h1 className="text-center text-dark fw-bold pb-2">
              England's Gem: The T-Level Course
              <br />
              My Experience
            </h1>
            <div className="border-bottom border-secondary mb-3" />
          </MDBCol>
        </MDBRow>
        <div className="px-5">
          <MDBRow className="my-2">
            <MDBCol>
              <h6 className="text-muted fw-light fw-italic">
                By{" "}
                <a className="text-muted" href="#/about">
                  CJ PRESLEY
                </a>{" "}
                [ 28-05-2-24 - 14:20 ]
              </h6>
              <h3 className="fw-bold">Introduction</h3>
              <MDBRow className="px-5">
                <MDBCol className="">
                  <figure className="figure">
                    <img
                      src={TLevelImage1}
                      className="img-fluid rounded shadow-1 mb-1"
                      style={{ width: "20rem" }}
                      alt="image from T-level learner campaign"
                    />
                    <figcaption className="figure-caption">
                      An image from the T-level learner campaign.
                    </figcaption>
                  </figure>
                </MDBCol>
                <MDBCol lg={8} className="">
                  <h5 className="">
                    The T-Level course was meant to be Britain's solution to an
                    all-encompassing qualification that would help people get
                    into work straight out of college. It was originally backed
                    by many major companies, such as: NHS trust, Nestle, Lloyds
                    Banking Group and the BBC.
                    <br />
                    <br />
                    The course is a "two-year qualification for 16-19 year olds
                    designed in collaboration with employers
                    <a href={TLEVELREF1}>
                      <sup>[1]</sup>
                    </a>
                    {'". '}
                    The course was designed to be equivalent to 3 A-Levels
                    <a href={TLEVELREF2}>
                      <sup>[2]</sup>
                    </a>
                    {", "}
                    and aimed to support the youth into the work place with
                    developed skills. The course's aim was to offer a mixed
                    learning experience; classroom learning, on the job learning
                    and examinations.
                  </h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="px-5">
                <h5>
                  In this blog I will detail my personal experience with this
                  course, each of its aspects—as they relate to the Digital
                  Production, Design, and Development Course
                  <a href={TLEVELREF3}>
                    <sup>[3]</sup>
                  </a>
                  {". "}
                  —and the guidance given by staff at the educational
                  institution I attended.
                </h5>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">
                The Prologue: How the Course Lures you in!
              </h3>
              <h5 className="px-5">
                The primary problem with the T Level course, or more
                specifically, its practices, lies in how they attract new
                learners. Promising top-tier education and a pathway into the
                professional world, the course fails to provide essential
                information. Researching course content is nearly impossible due
                to paywalls, poorly presented information, and the absence of a
                clear, reliable source.
                <br />
                <br />
                I discovered the T-Level course while in secondary school, where
                several teachers and career advisors strongly recommended it.
                However, they couldn't provide any information beyond what was
                available on the course's website. This, in retrospect, should
                have been the first sign that not everything was as it seems.
                <br />
                <br />
                After completing my GCSEs and submitting my grades to my
                respective colleges, I felt pressured to join the T-Level
                course. Note: this pressure was due to my timidity at the time;
                it was more like typical recruitment tactics. I ended up being
                one of seven students in the course.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">The Core Exams</h3>
              <h5 className="px-5">
                As is typical for any course, the first year was dedicated to
                lessons, covering the basics and outlining expectations for
                learners. This was in preparation for the first of four sections
                the course is divided into. During the first year, we learned
                Python, C#, HTML, and CSS, and we were also taught about the
                legislative and legal aspects of the field, including GDPR
                regulation, copyright law, trademark law, and various other
                relevant laws and regulations.
                <br />
                <br />
                These classes were ideal for preparing us for the Core
                Examinations, enabling us to prepare thoroughly and complete
                them with relative ease.
                <br />
                <br />I did end out taking this exam twice as the course allowed
                us to take the highest grade from the lot.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">"Employer Set" Project - The ESP</h3>
              <h5 className="px-5">
                This is where the course starts to become confusing. During my
                first year, my class had to complete the Employer Set Project
                (ESP)
                <a href={TLEVELREF4}>
                  <sup>[4]</sup>
                </a>
                {". "}Contrary to its name, the project was not set by any
                employer. Instead, it was a Pearson-regulated section consisting
                of five tasks: Research, Plan, Do, Present, and Review.
                <br />
                <br />
                The ESP was not as well-prepared for as the previous Core exams.
                In fact, we had less than two weeks to prepare before we were
                required to complete it. During this time, we had to learn new
                Python functionality, including an entirely new library, Pandas
                <a href={TLEVELREF5}>
                  <sup>[5]</sup>
                </a>
                {", "} for using and sorting CSV files. This was not optional;
                it was mandatory for progressing in the project, and we were
                penalised if we did not use it.
                <br />
                <br />
                We were, of course, given the opportunity to retake these as a
                mean to a higher grade, something I took, it operated similarly
                to the Core aspect with us being granted the higher of the 2
                grades.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Occupational Specialism - OccSpec</h3>
              <h5 className="px-5">
                For those familiar with me from my GitHub projects or the
                various programming Discord communities I'm part of, you may
                know that in 2024, I requested help on a project. This project
                was set by Pearson—as I will discuss more later—as a kind of
                final project for the course. The issue, as noted by my teacher
                and others who had attended university at my college, was that
                the project exceeded the expectations of a university
                dissertation. You might think, “that's great, you get more
                experience,” but it's important to remember that we were college
                students with less than two years of programming experience, and
                our qualification is worth significantly less than a university
                dissertation.
                <br />
                <br />
                The Occupational Specialism
                <a href={TLEVELREF6}>
                  <sup>[6]</sup>
                </a>
                {". "} consisted of four main sections, which were to be
                completed over approximately 70 hours: Planning (20 hours),
                Creation of Solution (30 hours), Feedback Gathering (15 hours),
                and finally, 2 hours to compile the feedback into an evaluation
                of the entire project.
                <br />
                <br />
                This structure resulted in stressful exam conditions and a
                distinct lack of effort from students, many of whom saw no point
                in trying. There was also a clear bias toward more educated
                members of the community, such as those from higher
                socio-economic standings, for example, politicians.
                <br />
                <br />
                The very same people who pushed for the course in the first
                place - benefited from it the most.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Work Experience - Hell on Earth</h3>
              <h5 className="px-5">
                <span className="fw-bold text-danger fs-4">
                  DISCLAIMER: My experience here is not reflective of other
                  people's experience!
                </span>
                <br />
                The hell that is work experience began from my very first year.
                This period was exceptionally challenging for me as I was
                grappling with the emotional rollercoaster of having a family
                member—my grandmother—battling cancer, ultimately leading to her
                passing. As a result of this, I declined a placement recommended
                by the college's careers advisor, which was within the NHS—a
                work environment I didn't feel comfortable in at the time.
                <br />
                <br />
                The career advisor didn't give up easily. They even tried to
                pressure me into accepting the placement through my parent, but
                thankfully, my mother filled me in on what was happening.
                Unfortunately, that was the last offer I received for well over
                a year. I found myself stuck in what I call “Placement
                Purgatory.” Every time a possible placement came up, it would
                fall through, and then the cycle would repeat itself.
                <br />
                <br />
                My hell didn't end here, once I found a placement, it was less
                than ideal—especially since it was almost entirely irrelevant to
                my course, my first task being to redesign their logo—I worked
                out of a café and only ever saw the person I was to work with
                once, for 10 minutes.
                <br />
                <br />
                Luckily, I was saved from this by the placement I am on
                currently, I am working with The Training Brokers Ltd as a Data,
                CRM and Site Administrator.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Pearson: The Controversial Exam Board</h3>
              <h5 className="px-5">
                Pearson, the education company that runs many of the course in
                Britain and around the world, from GCSE's to A-Levels and even
                the T-Levels. It is the centre of a lot of controversy, namely
                concerns about the amount of influence they have on the UK and
                Global public's education
                <a href={TLEVELREF7}>
                  <sup>[7]</sup>
                </a>
                . Concerns that are partially validated when you realise that
                the Pearson PLC owns the UK GCSE examination board, Edexcel
                <a href={TLEVELREF8}>
                  <sup>[8]</sup>
                </a>{" "}
                (acquired in 2003) and various other examination boards,
                including Knowledge Technologies (acquired in 2004)
                <a href={TLEVELREF9}>
                  <sup>[9]</sup>
                </a>
                .
                <br />
                <br />
                Pearson's problem with the T-Level course stems from their
                ongoing failure to furnish students with vital information in a
                clear and accessible way. Occasionally, this information even
                contradicts itself, or worse, it's scarce, relying solely on
                dubious sources. I reached a breaking point when I had to resort
                to contacting the Department of Education just to gather basic
                details about my course, particularly regarding Work Experience
                and end dates.
                <br />
                <br />
                The problem of contradictory information became particularly
                troubling when a tutor explicitly informed me that the
                information I was using was outdated. However, they couldn't
                provide a source for the updated version or any guidance on
                where to find it. Interestingly, the Department of Education
                confirmed that the guidance was still valid and not outdated,
                contradicting the tutor's claim. This lack of clarity and
                support only heightened the frustration of navigating the course
                requirements.
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2">
            <MDBCol>
              <h3 className="fw-bold">Join the Discussion</h3>
              <h5 className="px-5">
                Want to join the conversation? Join the{" "}
                <a href={DISCORD_LINK}>discord server</a>!
              </h5>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </>
  );
}
