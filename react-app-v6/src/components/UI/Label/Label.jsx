import React from 'react';
import FormLabel from '@mui/joy/FormLabel';
const Label = ({ htmlFor, children }) => {
  return (
    <FormLabel htmlFor={htmlFor}>
      {children}
    </FormLabel>
  );
};

export default Label;

