import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Section1 } from '../../themes/theme';
import { FormWrapper, SectionHeader, Header, TextFieldStyle } from './ContactForm.styled';

const ContactForm = () => (
  <>
    <SectionHeader>
      <Header style={{ textAlign: 'right' }}>Get In Touch!</Header>
    </SectionHeader>
    <Section1>
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
