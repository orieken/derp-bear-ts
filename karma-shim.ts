/// <reference types="@types/webpack-env" />
import './polyfills.ts';

import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";

var appContext = require.context('./src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);


TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
