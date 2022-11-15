import { NgModule } from "@angular/core";
import {
  DwebTopBarDirective,
  DwebTopBarButtonDirective,
} from "./topbar.directive.ts";
import {
  DwebBottomBarDirective,
  DwebBottomBarButtonDirective,
  DwebBottomBarIconDirective,
  DwebBottomBarTextDirective,
} from "./bottombar.directive.ts";
import { DwebStatusBarDirective } from "./statusbar.directive.ts";
import {
  DwebDialogAlertDirective,
  DwebDialogPromptDirective,
  DwebDialogConfirmDirective,
  DwebDialogWarningDirective,
} from "./dialog.directive.ts";
import { DwebKeyboardDirective } from "./keyboard.directive.ts";
import { DwebIconDirective } from "./icon.directive.ts";

const directives = [
  DwebTopBarDirective,
  DwebTopBarButtonDirective,
  DwebBottomBarDirective,
  DwebBottomBarButtonDirective,
  DwebBottomBarIconDirective,
  DwebBottomBarTextDirective,
  DwebStatusBarDirective,
  DwebDialogAlertDirective,
  DwebDialogPromptDirective,
  DwebDialogConfirmDirective,
  DwebDialogWarningDirective,
  DwebKeyboardDirective,
  DwebIconDirective,
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
})
export class BfsxPluginModule {}
