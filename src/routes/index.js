import { InsuranceForm } from '../views/InsuranceForm';
import { RecommendationsList } from '../views/RecommendationsList';

export const routes = [
  {
    _id: 0,
    path: '/',
    component: InsuranceForm,
    exactPath: true,
  },
  {
    _id: 1,
    path: '/recommendations',
    component: RecommendationsList,
    exactPath: true,
  },
];
