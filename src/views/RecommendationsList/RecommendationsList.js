import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Header } from '../../components/atoms/Header';
import { ListCard } from '../../components/atoms/ListCard';

import { _createLowerCaseText } from '../../utils/utilFunctions';

export class RecommendationsList extends PureComponent {
  componentDidMount() {
    const { getRecommendations } = this.props;
    getRecommendations();
  }

  render() {
    const { recommendationsList } = this.props;

    const renderRecommendationsList = (recommendationsList || []).map(
      (reco) => {
        // Change prices to have 2 decimal points (ex. 10.50)
        const decimalFixedPrice = reco.price.amount.toFixed(2);

        const lowerCasePeriod = reco.price.periodicity.toLowerCase();

        const contentText = `€${decimalFixedPrice} per ${lowerCasePeriod}`;

        return (
          <ListCard
            key={reco.type}
            // imported util func to get rid of _ and to lower case insurance category
            title={_createLowerCaseText(reco.type)}
            content={contentText}
          />
        );
      },
    );

    return (
      <>
        <Helmet>
          <title>Recommendations</title>
        </Helmet>
        <Header
          headerText='We got your recommendation'
          subHeaderText='Based on your answers, these are what you should be paying for each category'
        />
        <ul>{renderRecommendationsList}</ul>
      </>
    );
  }
}

RecommendationsList.propTypes = {
  recommendationsList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      price: PropTypes.shape({
        periodicity: PropTypes.string,
        amount: PropTypes.number,
      }),
    }),
  ),
  getRecommendations: PropTypes.func.isRequired,
};
