// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiURL: 'https://gpsfincaserver.herokuapp.com/api/v1',
  hostURL: 'https://gpsfincaserver.herokuapp.com',
  GOOGLE_MAPS_API_KEY: 'AIzaSyCGDjhtYZFoLe2OaHzBAU3Qx9ScB01xW1Y'
};
