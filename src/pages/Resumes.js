import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Resume Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="My Skills" />
            <div class="mi-skills">
              <div class="row mt-30-reverse">
                <div class="col-6 col-md-4"><h5>Html/Css</h5></div>
                <div class="col-6 col-md-4"><h5>JavaScript</h5></div>
                <div class="col-6 col-md-4"><h5>TypeScript</h5></div>
                <div class="col-6 col-md-4"><h5>Bootstrap</h5></div>
                <div class="col-6 col-md-4"><h5>Material UI</h5></div>
                <div class="col-6 col-md-4"><h5>Scss</h5></div>
                <div class="col-6 col-md-4"><h5>jQuery</h5></div>
                <div class="col-6 col-md-4"><h5>React</h5></div>
                <div class="col-6 col-md-4"><h5>Angular</h5></div>
                <div class="col-6 col-md-4"><h5>Lit</h5></div>
                <div class="col-6 col-md-4"><h5>Node</h5></div>
                <div class="col-6 col-md-4"><h5>Express</h5></div>
                <div class="col-6 col-md-4"><h5>Ruby</h5></div>
                <div class="col-6 col-md-4"><h5>Ruby on Rails</h5></div>
                <div class="col-6 col-md-4"><h5>.NET</h5></div>
                <div class="col-6 col-md-4"><h5>Docker</h5></div>
                <div class="col-6 col-md-4"><h5>Postgresql</h5></div>
                <div class="col-6 col-md-4"><h5>Sqlite</h5></div>
                <div class="col-6 col-md-4"><h5>MongoDB</h5></div>
                <div class="col-6 col-md-4"><h5>Golang</h5></div>
                <div class="col-6 col-md-4"><h5>Figma</h5></div>
                <div class="col-6 col-md-4"><h5>Framer Motion</h5></div>
                <div class="col-6 col-md-4"><h5>Stripe</h5></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Resume" />
            <Smalltitle title="Work Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Resumes;
