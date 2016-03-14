///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from "angular2/platform/browser";
import {CardsListComponent} from "./cards/cards-list.component";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(CardsListComponent, [HTTP_PROVIDERS]);