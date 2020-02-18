import { connect } from 'react-redux';

import {
  setCurrentFormStep,
  setFormData,
  createUser,
} from '../../../redux/actions';
import { FormGroup } from './FormGroup';

const mapStateToProps = ({ insuranceForm }) => ({
  formStep: insuranceForm.formStep,
  formData: insuranceForm.formData,
});

export const FormGroupEnhanced = connect(mapStateToProps, {
  setCurrentFormStep,
  setFormData,
  createUser,
})(FormGroup);
