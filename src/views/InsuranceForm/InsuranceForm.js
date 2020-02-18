import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { FormGroup } from '../../components/molecules/FormGroup';

import { insuranceForm } from '../../static/data/insuranceForm';

export const InsuranceForm = ({ formStep, history }) => {
  const renderAllForms = insuranceForm.map((formData) => {
    const { form, header, input, canBeSubmitted } = formData;

    return (
      <>
        <Helmet>
          <title>Insurance Form</title>
        </Helmet>
        <FormGroup
          formName={form}
          header={header}
          inputType={input.type}
          placeholder={input.placeholder}
          canBeSubmitted={canBeSubmitted}
          options={input.options}
          history={history}
        />
      </>
    );
  });

  const renderCurrentForm = renderAllForms[formStep];

  return <form>{renderCurrentForm}</form>;
};

InsuranceForm.propTypes = {
  formStep: PropTypes.number,
};
