import H1 from "../components/h1";
import H2 from "../components/h2";
import UL from "../components/ul";
import LI from "../components/li";
import P from "../components/p";
import Wrapper from "../components/wrapper";
import Strong from "../components/strong";
import Meta from "../components/meta";

export default () => (
  <div>
    <Meta />
    <Wrapper>
      <H1>Jhonny Jose Arana Nieves</H1>
      <UL>
        <LI>
          <P>
            Email:
            {" "}
            <a href="mailto:aranajhonny@outlook.com">aranajhonny@outlook.com</a>
          </P>
        </LI>
        <LI>
          <P>
            Twitter: <a target="_blank" href="https://twitter.com/aranajhonny">@aranajhonny</a>
          </P>
        </LI>
        <LI>
          <P>
            Github: <a target="_blank" href="https://github.com/aranajhonny">aranajhonny</a>
          </P>
        </LI>
        <LI>
          <P>
            Current Job: Intern in
            {" "}
            <a target="_blank" href="http://gandocam.com.ve">Gandocam C.A</a>
          </P>
        </LI>
      </UL>

      <H2>Projects</H2>
      <UL>
        <LI>
          <P>
            <a target="_blank" href="https://github.com/aranajhonny/ig-upload">
              <Strong>ig-upload</Strong>
            </a>
            A tiny command line tool for upload images to instagram
          </P>
          {" "}
          (2017)
        </LI>
      </UL>
      <H2>I'm interested</H2>
      <UL>
        <LI>
          <P>Machine Learning</P>
        </LI>
      </UL>
      <UL>
        <LI>
          <P>Psychology</P>
        </LI>
      </UL>

      <UL>
        <LI>
          <P>Web development</P>
        </LI>
      </UL>

      <UL>
        <LI>
          <P>Hackintosh</P>
        </LI>
      </UL>

      <UL>
        <LI>
          <P>Open source</P>
        </LI>
      </UL>
      <UL>
        <LI>
          <P>Containers and Gnu/Linux Distros</P>
        </LI>
      </UL>

      <H2>Thoughts</H2>
      <UL>
        <LI>
          //<P> Coming soon.</P>
        </LI>
      </UL>
    </Wrapper>
    <style jsx>{`
      a {
        color:#0366d6;
        text-decoration: none;
      }
      a:hover {
        background-color:#0366d6;
        color:#fff;
        text-decoration: none;
      }
    `}</style>
  </div>
);
