import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Section1, Header1, SectionHeaderCenter } from '../../themes/theme';
import { FormWrapper } from './ContactForm.styled';

const ContactForm = () => (
  <>
    <SectionHeaderCenter>
      <Header1 style={{ textAlign: 'right' }} className="contact-title">Get In Touch!</Header1>
    </SectionHeaderCenter>
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
            <TextField required id="standard-required" label="Name" />
          </p>
          <p>
            <TextField required id="standard-required" label="Email" />
          </p>
          <p>
            <TextField id="standard-required" label="Company" />
          </p>
          <p>
            <TextField
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
