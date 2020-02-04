import React from 'react';
import Button from '@material-ui/core/Button';
import ericrResume from '../../data/assets/EricResume.pdf';

import { Header1, SectionHeaderLeftGreen } from '../../themes/theme';
import { ResumeWrapper, buttonWrapper } from './ResumeFile.styled';

const ResumeFile = () => (
  <>
    <SectionHeaderLeftGreen>
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
    </SectionHeaderLeftGreen>
    <ResumeWrapper>
      <object type="application/pdf" data={ericrResume} title="resume">
        This browser does not support PDFs.
        <iframe title="Eric-Swanson-Resume" />
      </object>
    </ResumeWrapper>
  </>
);

export default ResumeFile;
