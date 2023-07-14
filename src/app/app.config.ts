import { ApplicationConfig } from '@angular/core';
import {
	PreloadAllModules,
	provideRouter,
	withComponentInputBinding,
	withInMemoryScrolling,
	withPreloading,
	withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(
			routes,
			withRouterConfig({
				onSameUrlNavigation: 'reload',
				paramsInheritanceStrategy: 'always',
			}),
			withInMemoryScrolling(),
			withPreloading(PreloadAllModules),
			withComponentInputBinding(),
		),
	],
};
