export enum RouteNames {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  FORUM = 'forum',
  FORUM_TOPIC = 'forumTopic',
  LEADERBOARD = 'leaderboard',
  START_GAME = 'startGame',
  GAME = 'game',
  END_GAME = 'endGame',
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',
  OAUTH = 'oauth',
}

interface RoutePaths {
  [RouteNames.MAIN]: string;
  [RouteNames.PROFILE]: string;
  [RouteNames.FORBIDDEN]: string;
  [RouteNames.FORUM]: string;
  [RouteNames.LEADERBOARD]: string;
  [RouteNames.START_GAME]: string;
  [RouteNames.GAME]: string;
  [RouteNames.END_GAME]: string;
  [RouteNames.AUTHORIZATION]: string;
  [RouteNames.REGISTRATION]: string;
  [RouteNames.FORUM_TOPIC]: (id: string | number) => string;
  [RouteNames.OAUTH]: string;
}

export const routePaths: RoutePaths = {
  [RouteNames.AUTHORIZATION]: '/login',
  [RouteNames.REGISTRATION]: '/registration',
  [RouteNames.MAIN]: '/',
  [RouteNames.PROFILE]: '/profile',
  [RouteNames.FORBIDDEN]: '/forbidden',
  [RouteNames.FORUM]: '/forum',
  [RouteNames.FORUM_TOPIC]: (id: string | number) => `/forum/${id}`,
  [RouteNames.LEADERBOARD]: '/leaderboard',
  [RouteNames.START_GAME]: '/startGame',
  [RouteNames.GAME]: '/game',
  [RouteNames.END_GAME]: '/endGame',
  [RouteNames.OAUTH]: '/oauth',
};
