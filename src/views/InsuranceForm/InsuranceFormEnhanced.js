import { connect } from 'react-redux';

import { InsuranceForm } from './InsuranceForm';

const mapStateToProps = ({ insuranceForm }) => ({
  formStep: insuranceForm.formStep,
});

export const InsuranceFormEnhanced = connect(mapStateToProps)(InsuranceForm);
