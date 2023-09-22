const mapping: Record<string, string> = {
  communications: 'communication',
  'dietary-guidances': 'dietary_guidance',
  'meal-plans': 'meal_plan',
  'nutrition-courses': 'nutrition_course',
  subscriptions: 'subscription',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
