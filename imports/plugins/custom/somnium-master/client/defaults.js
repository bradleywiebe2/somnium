import { Session } from "meteor/session";
import { Logger } from "/client/api";

Session.set("DEFAULT_LAYOUT", "coreLayoutSomnium");
Session.set("DEFAULT_WORKFLOW", "coreWorkflow");
Session.set({
  template: "home",
  layoutHeader: "somniumHeader",
  layoutFooter: "somniumFooter",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});
Logger.info("setting DEFAULT_LAYOUT");
