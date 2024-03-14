import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const Div = styled.div`
  background-color: #f5f7f9;
  font-size: 2rem;
  padding: 5rem;
`;
const Wrapper = styled.div`
  background-color: #fff;
  margin-top: 7rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  margin: 3rem 0 2rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 1.5;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
const P = styled.p`
font-size: 1rem;
font-family: "Roboto", sans-serif;s
`;

const TermsCondition = () => {
  return (
    <>
      <Navbar />
      <Div>
        <Wrapper>
          <H1> Terms & Conditions</H1>

          <P>
            May 4, 2022
            <br />
            <br /> These terms and conditions (the “Terms”) govern your access
            to and use of Monoline’s website. By accessing or using the Site,
            you are agreeing to these Terms and entering into a legally binding
            contract with Monoline. It is important that you read carefully and
            understand the Terms. Do not access or use the Site if you are
            unwilling or unable to be bound by the Terms. Any references to
            “you” and “your” refer to you, as a user of the Site. References to
            “we” , “us” and “our” refer to Monoline.{" "}
            <li>
              <br />
              <br />
              CHANGES TO THE TERMS AND CONDITIONS
              <br />
              <br />
              We may modify the Terms from time to time. When changes are made,
              we will update the date at the top of this page. You should
              revisit these Terms on a regular basis as revised versions will be
              binding on you. Any such modification will be effective upon our
              posting of new Terms. You understand and agree that your continued
              access to or use of the Site after any posted modification to the
              Terms indicates your acceptance of the modification.
            </li>
            <br />
            <br />
            <li>
              {" "}
              USING THE SITE
              <br />
              <br />
              A. Permission to Use the Site : We grant you permission to use the
              Site subject to the restrictions in these Terms. We may terminate
              your permission to use the Site for any conduct that we consider
              to be inappropriate, or for your breach of these Terms, including
              the Restrictions listed in paragraph 4. Your use of the Site is at
              your own risk. B. Site Availability : The Site may be modified,
              updated at any time whenever we want. C. User Accounts : You need
              to register yourself to browse our website. You need to have a
              Phone Number, Email ID while registering.{" "}
            </li>
            <br />
            <br />
            <l1>
              CONTENT
              <br />
              <br />
              A. Responsibility for Your Content : You alone are responsible for
              the content of your messages, and you agree to indemnify and hold
              harmless Monoline and our agents with respect to any claim based
              upon the transmission of your message(s). We reserve the right to
              remove any messages for any or no reason whatsoever. B. Ownership
              : All material on the Site, including, but not limited to, text,
              data, graphics, logos, button icons, images, audio clips, video
              clips, links, digital downloads, data compilations, and software
              is owned, purchased or controlled by, or licensed to Monoline and
              is protected by copyright, trademark, and other intellectual
              property rights. Material on the Site is made available solely for
              your personal, non-commercial use and may not be copied,
              reproduced, republished, modified, uploaded, posted, transmitted,
              or distributed in any way, including by e-mail or other electronic
              means, without the express prior written consent of Monoline in
              each instance. You may download material intentionally made
              available for downloading from the Site for your personal,
              non-commercial use only, provided that you keep intact any and all
              copyright and other proprietary notices that may appear on such
              materials.{" "}
            </l1>
            <br />
            <br />
            <li>
              RESTRICTIONS
              <br />
              <br />
              A. You agree not to, and will not assist, encourage, or enable
              others to use the Site to : a. Send any message (via Contact Us)
              that is knowingly false and/or defamatory, inaccurate, abusive,
              vulgar, obscene, profane, hateful, harassing, sexually oriented,
              threatening, invasive of anyone’s privacy, or otherwise in
              violation of any law; b. Send any message in violation of a third
              party’s copyright or other intellectual property or proprietary
              rights; c. Send bulk emails, surveys, or other mass messaging
              whether commercial in nature or not; d. Solicit, request or
              collect personal information for commercial or unlawful purposes;
              B. You also agree not to, and will not assist, encourage, or
              enable others to : a. Restrict or inhibit any other user from
              using and enjoying the Site (for examples, by means of hacking or
              defacement); b. Utilize any robot, spider, site search/retrieval
              application, or other automated device, process or means to
              access, retrieve, scrape or index any portion of the Site; c.
              Remove or modify any copyright, trademark or other proprietary
              rights notice that appears on any portion of the Site or on any
              materials printed or copied from the Site; d. Reformat or frame
              any portion of the Site; e. Remove, circumvent, disable, damage or
              otherwise interfere with any security-related features of the
              Site, features that prevent or restrict the use or copying of Site
              content or features that enforce limitations on the use of the
              Site.
            </li>
            <br />
            <br />
            USE OF GOOGLE ANALYTICS
            <br />
            <br />
            The Site uses Google Analytics, a web analytics service provided by
            Google, Inc. (“Google”). Google Analytics uses “cookies”, which are
            text files placed on your computer, to help the website analyse how
            users use the site. The information generated by the cookie about
            your use of the Site (including your IP address) will be transmitted
            to and stored by Google on servers in the United States. Google will
            use this information for the purpose of evaluating your use of the
            Site, compiling reports on website activity for website operators
            and providing other services relating to website activity and
            Internet usage. Google may also transfer this information to third
            parties where required to do so by law, or where such third parties
            process the information on Google’s behalf. By using this website,
            you consent to the processing of data about you by Google in the
            manner and for the purposes set out above.
          </P>
        </Wrapper>
      </Div>
    </>
  );
};

export default TermsCondition;
