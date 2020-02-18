import { connect } from 'react-redux';

import { AppContainer } from './AppContainer';

const mapStateToProps = ({ insuranceForm, recommendations, error }) => ({
  formLoading: insuranceForm.loading,
  recommendationsLoading: recommendations.loading,
  error: error.errorMsg,
});

export const AppContainerEnhanced = connect(mapStateToProps)(AppContainer);
