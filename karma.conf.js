// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html


module.exports = function (config) {
	config.set({
		basePath                : '',
		frameworks              : ['jasmine', '@angular/cli'],
		plugins                 : [
			require('karma-jasmine'),
			require('karma-firefox-launcher'), // if you want to test in FF, add also to browsers[] array, below.
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular/cli/plugins/karma'),
			require('karma-mocha-reporter'),
			require('karma-remap-istanbul')
		],
		client                  : {
			clearContext: false, // leave Jasmine Spec Runner output visible in browser
            captureConsole: true
		},
		files                   : [
			{pattern: './src/test.ts', watched: false}
		],
		preprocessors           : {
			'./src/test.ts': ['@angular/cli']
		},
		mime                    : {
			'text/x-typescript': ['ts', 'tsx']
		},
		coverageIstanbulReporter: {
			reports              : ['html', 'lcovonly'],
			fixWebpackSourcePaths: true
		},
		angularCli              : {
			environment: 'dev'
		},
		reporters               : config.angularCli && config.angularCli.codeCoverage
			? ['mocha', 'karma-remap-istanbul']
			: ['mocha', 'kjhtml'],
		port                    : 9876,
		colors                  : true,
		logLevel                : config.LOG_INFO,
		autoWatch               : true,
		browsers                : ['Chrome'],
		singleRun               : false
	});
};

