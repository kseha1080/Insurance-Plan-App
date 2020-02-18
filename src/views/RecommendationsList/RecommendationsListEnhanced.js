import { connect } from 'react-redux';

import { RecommendationsList } from './RecommendationsList';

import { getRecommendations } from '../../redux/actions';

const mapStateToProps = ({ recommendations }) => ({
  recommendationsList: recommendations.recommendationsList,
});

export const RecommendationsListEnhanced = connect(mapStateToProps, {
  getRecommendations,
})(RecommendationsList);
