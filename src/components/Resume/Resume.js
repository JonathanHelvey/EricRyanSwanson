import React from 'react';
import Button from '@material-ui/core/Button';
import resume from '../../data/assets/EricResume.pdf';

import { Header1 } from '../../themes/theme';
import { ResumeWrapper, SectionHeader, buttonWrapper } from './Resume.styled';

const Resume = () => (
  <>
    <SectionHeader>
      <buttonWrapper>
        <div>
          <Header1>Resume</Header1>
        </div>
        <Button variant="outlined" component="span" type="button" className="resume-button">
          <a href={require('../../data/assets/EricResume.pdf')} download>
          Download Resume PDF
          </a>
        </Button>
      </buttonWrapper>
    </SectionHeader>
    <ResumeWrapper>
      <object type="application/pdf" data={resume} title="resume">
        This browser does not support PDFs.
        <iframe title="Eric-Swanson-Resume" />
      </object>
    </ResumeWrapper>
  </>
);

export default Resume;
