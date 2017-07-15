import { Reaction } from "/server/api";
import { Router } from "/server/api";

// const urlParam = Router.getQueryParam("urlParam");

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "Somnium",
  name: "somnium-master",
  icon: "fa fa-vine",
  autoEnable: true,
  registry: [
    // permissions: [{
    //   label: "Somnium",
    //   permission: "somnium-master"
    // }],
    // {
    //   route: "about",
    //   name: "about",
    //   template: "about",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "athletes",
    //   name: "athletes",
    //   template: "athletes",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "benefits",
    //   name: "benefits",
    //   template: "benefits",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "contactus",
    //   name: "contactus",
    //   template: "contactus",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "design",
    //   name: "design",
    //   template: "design",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "designers",
    //   name: "designers",
    //   template: "designers",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "faqs",
    //   name: "faqs",
    //   template: "faqs",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "financing",
    //   name: "financing",
    //   template: "financing",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "health",
    //   name: "health",
    //   template: "health",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "home",
    //   name: "home",
    //   template: "home",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "mattresscare",
    //   name: "mattresscare",
    //   template: "mattresscare",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "news",
    //   name: "news",
    //   template: "news",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "ourcompany",
    //   name: "ourcompany",
    //   template: "ourcompany",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "ourmattress",
    //   name: "ourmattress",
    //   template: "ourmattress",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "privacy",
    //   name: "privacy",
    //   template: "privacy",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "products",
    //   name: "products",
    //   template: "productsLanding",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "retailers",
    //   name: "retailers",
    //   template: "retailers",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "returnpolicy",
    //   name: "returnpolicy",
    //   template: "returnpolicy",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "somnium1",
    //   name: "somnium1",
    //   template: "somnium1",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "somnium2",
    //   name: "somnium2",
    //   template: "somnium2",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "somniumbaby",
    //   name: "somniumbaby",
    //   template: "somniumbaby",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "team",
    //   name: "team",
    //   template: "team",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "terms",
    //   name: "terms",
    //   template: "terms",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "warranty",
    //   name: "warranty",
    //   template: "warranty",
    //   workflow: "coreWorkflow"
    // },
    // {
    //   route: "yoursomnium",
    //   name: "yoursomnium",
    //   template: "yoursomnium",
    //   workflow: "coreWorkflow"
    // }
  ],
  layout: [{
    layout: "coreLayoutSomnium",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "home",
      layoutHeader: "somniumHeader",
      layoutFooter: "somniumFooter",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    } }
  ]
});

// global - for testing... run
// $ ReactionRouter._routes
