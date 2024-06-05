import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { DISCORD_LINK } from "../../constants/mylinks";
import { useEffect } from "react";

export default function HunderedsOfBeavers() {
  useEffect(() => {
    document.title = "CJ Presley | Hundreds of Beavers Review";
  });
  return (
    <>
      <MDBContainer className="my-4 px-3">
        <MDBRow className="my-2">
          <MDBCol>
            <h3 className="fw-bold">Introduction</h3>
            <h5 className="px-5">
              The 2022 film <em>Hundreds of Beavers</em>, directed by Mike
              Cheslik, is a black-and-white slapstick comedy inspired by the
              1920s-1930s movies of the same genre. Starring Ryland Brickson
              Cole Tews as Jean Kayak, an applejack who, after a series of wild
              and wacky events, must become a legendary fur trapper and kill
              ‘Hundreds of Beavers.’ This film’s unique approach, embracing
              outdated and niche filmmaking techniques, offers a refreshing
              perspective on modern cinema, rejecting the notion that it must
              always be forward-facing.
            </h5>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-2">
          <MDBCol>
            <h3 className="fw-bold">Summary</h3>
            <h5 className="px-5">
              Set in the 1800s, <em>Hundreds of Beavers</em> chronicles the
              journey of an apple cider salesman’s rise to becoming the greatest
              fur trapper in the American Northwest. This tale of beavers,
              chaos, and triumph is truly fantastical, blending humor and
              adventure in a way that harkens back to the silent film era.
            </h5>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-2">
          <MDBCol>
            <h3 className="fw-bold">Analysis</h3>
            <h5 className="px-5">
              Mike Cheslik, though not widely renowned, demonstrates masterful
              direction in <em>Hundreds of Beavers</em>. Collaborating with
              Ryland Brickson Cole Tews, Cheslik has crafted a fever dream of a
              film that stands as a testament to the silent slapstick genre of
              the 1920s and 30s. The story maintains a lively pace with a strong
              comedic emphasis, but true to its genre roots, it lacks dialogue.
              This absence of spoken words is skillfully compensated by the
              physical humor and expressive performances of the cast.
              <br />
              <br />
              Among the interesting characters, the 'Master Fur Trapper' (played
              by Wes Tank) stands out, his arc profoundly impacting the main
              character, serving as a mentor and catalyst for Jean Kayak’s
              personal growth. The musical coordination by Chris Ryan is
              exceptional, creating both tension and hilarity through a
              soundtrack that blends various themes, reminiscent of silent films
              and old cartoons.
            </h5>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-2">
          <MDBCol>
            <h3 className="fw-bold">Themes and Messages</h3>
            <h5 className="px-5">
              Analyzing <em>Hundreds of Beavers</em> can be challenging due to
              its humor and action-packed narrative. The film’s message revolves
              around adversity, self-improvement, and victory, aiming to bring
              laughter to its audience. Unlike many contemporary films that
              obscure their messages with hidden plot lines and imagery,{" "}
              <em>Hundreds of Beavers</em> opts for a more honest and open
              approach. This blatant and clear storytelling sacrifices subtlety
              but stands out in its intent to entertain and amuse.
            </h5>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-2">
          <MDBCol>
            <h3 className="fw-bold">Personal Response</h3>
            <h5 className="px-5">
              While the film had little emotional impact on me, I became
              attached to two characters: the Master Trapper and Jean Kayak. A
              genuine emotional reaction was elicited during a pivotal scene in
              the third act, where the death of a character provides Jean with
              the impetus to achieve his goals. Despite this, the film remains
              highly entertaining, packed with comedic value and action. Jean’s
              journey, learning to adapt to various situations, is a truly
              entertaining ordeal.
            </h5>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-2">
          <MDBCol>
            <h3 className="fw-bold">Conclusion</h3>
            <h5 className="px-5">
              Overall, <em>Hundreds of Beavers</em> is a compelling narrative
              about personal growth that embodies the American dream of
              self-improvement and success. I would recommend this film to
              anyone who enjoys a good laugh and is open to trying something
              new—or rather, old. However, this film is likely best enjoyed
              once. The simplicity of the story, while a strength in its ability
              to hook the audience, may not lend itself to repeated viewings.
              Despite this, <em>Hundreds of Beavers</em> serves as an excellent
              gateway into the genre of silent films, showcasing the charm and
              humor of a bygone era in a way that is both nostalgic and
              refreshing.
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
      </MDBContainer>
    </>
  );
}
