// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {environment as env} from './env';

// ###
// env.ts example
// ###

// export const environment = {
//   production: true,
//   api_endpoint: 'http://emperkz-api.cronix.ms/api/v1',
//   socket_endpoint: 'ws://socket.emperkz-api.cronix.ms'
// };

export const environment = { ...env };
