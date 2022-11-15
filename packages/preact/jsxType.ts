/// <reference lib="esnext" />
/// <reference lib="dom" />

import { BottomBar } from "@typed/bottombar";
import { Dialogs } from "@typed/dialogs";
import { Icon } from "@typed/icon";
import { Keyboard } from "@typed/keyboard";
import { StatusBar } from "@typed/statusbar";
import { TopBar } from "@typed/topbar";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      "dweb-top-bar": DwebTopBarProps;
      "dweb-top-bar-button": DwebTopBarButtonProps;
      "dweb-bottom-bar": DwebBottomBarProps;
      "dweb-bottom-bar-button": DwebBottomBarButtonProps;
      "dweb-bottom-bar-icon": DwebBottomBarIconProps;
      "dweb-bottom-bar-text": DwebBottomBarTextProps;
      "dweb-status-bar": DwebStatusBarProps;
      "dweb-dialog-alert": DwebDialogAlertProps;
      "dweb-dialog-prompt": DwebDialogPromptProps;
      "dweb-dialog-confirm": DwebDialogConfirmProps;
      "dweb-dialog-warning": DwebDialogConfirmProps;
      "dweb-dialog-button": DwebDialogButtonProps;
      "dweb-icon": DwebIconProps;
      "dweb-keyboard": DwebKeyboardProps;
      "dweb-messager": {};
      "dweb-navigation": {};
      "dweb-scanner": {};
    }

    // topbar
    interface DwebTopBarProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof TopBar.DwebTopBar
        >,
        TopBar.DwebTopBar {}
    interface DwebTopBarButtonProps
      extends preact.createElement.JSX.DetailedHTMLProps<
          preact.createElement.JSX.HTMLAttributes<HTMLElement>,
          HTMLElement
        >,
        TopBar.DwebTopBarButton {}
    // bottombar
    interface DwebBottomBarProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof BottomBar.DwebBottomBar
        >,
        BottomBar.DwebBottomBar {}
    interface DwebBottomBarButtonProps
      extends preact.createElement.JSX.DetailedHTMLProps<
          preact.createElement.JSX.HTMLAttributes<HTMLElement>,
          HTMLElement
        >,
        BottomBar.DwebBottomBarButton {}
    interface DwebBottomBarIconProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof BottomBar.DwebBottomBarIcon
        >,
        BottomBar.DwebBottomBarIcon {}
    interface DwebBottomBarTextProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof BottomBar.DwebBottomBarText
        >,
        BottomBar.DwebBottomBarText {}
    // statusbar
    interface DwebStatusBarProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof StatusBar.DwebStatusBar
        >,
        StatusBar.DwebStatusBar {}
    // dialogs
    interface DwebDialogAlertProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof Dialogs.DwebDialogsAlert
        >,
        Dialogs.DwebDialogsAlert {}
    interface DwebDialogPromptProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof Dialogs.DwebDialogsPrompt
        >,
        Dialogs.DwebDialogsPrompt {}
    interface DwebDialogConfirmProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof Dialogs.DwebDialogsConfirm
        >,
        Dialogs.DwebDialogsConfirm {}
    interface DwebDialogButtonProps
      extends preact.createElement.JSX.DetailedHTMLProps<
        preact.createElement.JSX.HTMLAttributes<HTMLElement>,
        HTMLElement
      > {}
    // icon
    interface DwebIconProps
      extends preact.createElement.JSX.DetailedHTMLProps<
          preact.createElement.JSX.HTMLAttributes<HTMLElement>,
          HTMLElement
        >,
        Icon.IPlaocIcon {}
    // keyboard
    interface DwebKeyboardProps
      extends Omit<
          preact.createElement.JSX.DetailedHTMLProps<
            preact.createElement.JSX.HTMLAttributes<HTMLElement>,
            HTMLElement
          >,
          keyof Keyboard.DwebKeyboard
        >,
        Keyboard.DwebKeyboard {}
  }
}
