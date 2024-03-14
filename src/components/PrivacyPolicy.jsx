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
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Div>
        <Wrapper>
          <H1>Privacy Policy</H1>

          <P>
            Monoline and/or its affiliates (“Monoline,” the “Company,” “we,”
            “us,” and “our,”) respect your privacy and is committed to
            protecting it through its compliance with its privacy policies. This
            policy describes: a. The types of information that Monoline may
            collect from you when you access or use its Website and other online
            services (collectively, referred as “Services”); and b. Its
            practices for collecting, using, maintaining, protecting and
            disclosing that information.
            <br />
            <br />
            This policy applies only to the information Monoline collects
            through its Services, in email, text and other electronic
            communications sent through or in connection with its Services.
            <br />
            <br /> This policy DOES NOT apply to information that you provide
            to, or that is collected by, any third-party that you use in
            connection with its Services. Monoline encourages you to consult
            directly with such third-parties about their privacy practices.{" "}
            <br />
            <br />
            Please read this policy carefully to understand Monoline’s policies
            and practices regarding your information and how Monoline will treat
            it. By accessing or using its Services and/or registering for an
            account with Monoline, you agree to this privacy policy and you are
            consenting to Monoline’s collection, use, disclosure, retention, and
            protection of your personal information as described here. If you do
            not provide the information Monoline requires, Monoline may not be
            able to provide all of its Services to you.
            <br />
            <br /> If you reside in any part of the India, Monoline, 178,
            Sowlia, Boro Ravatary Part I, Dhubri, Assam – 783127, India will be
            the controller of your personal data provided to, or collected by or
            for, or processed in connection with our Services.
            <br />
            <br />
            NB. : We don’t store anything of your personal information except
            your Name, Phone Number, Email ID, Address, and Order Details; and
            your information will not be shared anywhere except our own
            databases.
            <br />
            <br />
            We will use Razorpay Payment Gateway when you pay online through our
            Website. Your information while paying online may be stored to
            Razorpay Databases.
            <br />
            <br /> This policy may change from time to time, your continued use
            of Monoline’s Services after it makes any change is deemed to be
            acceptance of those changes, so please check the policy periodically
            for updates.
          </P>
        </Wrapper>
      </Div>
    </>
  );
};

export default PrivacyPolicy;
