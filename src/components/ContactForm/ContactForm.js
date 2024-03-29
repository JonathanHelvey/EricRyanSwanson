import React from 'react';

import Button from '@material-ui/core/Button';

import { Section1, Header2, SectionHeader, Header1 } from '../../themes/theme';
import { FormWrapper, TextFieldStyle } from './ContactForm.styled';

const ContactForm = () => (
  <>
    <SectionHeader Secondary>
      <Header1 Right lg>Get in Touch!</Header1>
    </SectionHeader>
    <Section1>
      <Header2 Center md>Lets Work Together!</Header2>
      <FormWrapper>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <p>
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />
          </p>
          <p>
            <TextFieldStyle required id="standard-required" label="Name" />
          </p>
          <p>
            <TextFieldStyle required id="standard-required" label="Email" />
          </p>
          <p>
            <TextFieldStyle required id="standard-required" label="Company" />
          </p>
          <p>
            <TextFieldStyle
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows="8"
              variant="outlined"
            />
          </p>
          <p>
            <Button variant="outlined" type="submit">
              Send
            </Button>
          </p>
        </form>
      </FormWrapper>
    </Section1>
  </>
);

export default ContactForm;
