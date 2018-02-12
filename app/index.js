import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import guideController from './guide/controller';
import guideTemplate from './guide/template.html';

import anotherController from './another/controller';
import anotherTemplate from './another/template.html';

function config($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('guide', {
			url: '/guide',
			template: guideTemplate,
			controller: 'GuideCtrl'
		})
		.state('another', {
			url: '/another',
			template: anotherTemplate,
			controller: 'AnotherCtrl'
		});

	$urlRouterProvider.otherwise('guide');

}

angular.module('guide', [uiRouter])
	.config(config)
	.controller('GuideCtrl', guideController)
	.controller('AnotherCtrl', anotherController);

let teste = 5;

function myPromise() {
	return new Promise.resolve(5);
}

setTimeout(() => console.log(`work`));

let obj = {
	teste
};

if (module.hot) {
	module.hot.accept('./guide/controller.js', function () {
		console.log('Accepting the updated printMe module!');
	})
}

export default obj