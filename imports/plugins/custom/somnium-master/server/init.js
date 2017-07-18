import {Packages, Shops} from "/lib/collections";
import {Hooks, Reaction, Logger} from "/server/api";
import {check} from "meteor/check";

function modifyCheckoutWorkflow() {
  // Replace checkoutReview with our custom Template
  Logger.info("::: Modifying checkout workflow");
  Packages.update({
    name: "reaction-checkout",
    layout: {
      $elemMatch: {
        template: "checkoutReview"
      }
    }
  }, {
    $set: {
      "layout.$.template": "checkoutReviewSomnium",
      "layout.$.label": "Review Order"
    }
  });
}

function addRolesToVisitors() {
  // Add the about permission to all default roles since it's available to all
  Logger.info("::: Adding home route permissions to default roles");
  const shop = Shops.findOne(Reaction.getShopId());
  Shops.update(shop._id, {
    $addToSet: {
      "defaultVisitorRole": "about",
      "defaultVisitorRole": "athletes",
      "defaultVisitorRole": "benefits",
      "defaultVisitorRole": "contactus",
      "defaultVisitorRole": "default",
      "defaultVisitorRole": "design",
      "defaultVisitorRole": "designers",
      "defaultVisitorRole": "faqs",
      "defaultVisitorRole": "financing",
      "defaultVisitorRole": "health",
      "defaultVisitorRole": "home",
      "defaultVisitorRole": "mattresscare",
      "defaultVisitorRole": "news",
      "defaultVisitorRole": "ourcompany",
      "defaultVisitorRole": "ourmattress",
      "defaultVisitorRole": "privacy",
      "defaultVisitorRole": "retailers",
      "defaultVisitorRole": "returnpolicy",
      "defaultVisitorRole": "somnium1",
      "defaultVisitorRole": "somnium2",
      "defaultVisitorRole": "somniumbaby",
      "defaultVisitorRole": "team",
      "defaultVisitorRole": "terms",
      "defaultVisitorRole": "warranty",
      "defaultVisitorRole": "yoursomnium"
    }
  });
  Shops.update(shop._id, {
    $addToSet: {
      "defaultRoles": "about",
      "defaultRoles": "athletes",
      "defaultRoles": "benefits",
      "defaultRoles": "contactus",
      "defaultRoles": "default",
      "defaultRoles": "design",
      "defaultRoles": "designers",
      "defaultRoles": "faqs",
      "defaultRoles": "financing",
      "defaultRoles": "health",
      "defaultRoles": "home",
      "defaultRoles": "mattresscare",
      "defaultRoles": "news",
      "defaultRoles": "ourcompany",
      "defaultRoles": "ourmattress",
      "defaultRoles": "privacy",
      "defaultRoles": "retailers",
      "defaultRoles": "returnpolicy",
      "defaultRoles": "somnium1",
      "defaultRoles": "somnium2",
      "defaultRoles": "somniumbaby",
      "defaultRoles": "team",
      "defaultRoles": "terms",
      "defaultRoles": "warranty",
      "defaultRoles": "yoursomnium"
    }
  });
}

function changeLayouts(shopId, newLayout) {
  check(shopId, String);
  check(newLayout, String);
  Logger.info(`::: changing all layouts to ${newLayout}`);
  let shop = Shops.findOne(shopId);
  for (let i = 0; i < shop.layout.length; i++) {
    shop.layout[i].layout = newLayout;
  }
  return Shops.update(shopId, {
    $set: {layout: shop.layout}
  });
}

/**
 * Hook to make additional configuration changes
 */
Hooks.Events.add("afterCoreInit", () => {
  modifyCheckoutWorkflow();
  addRolesToVisitors();
  changeLayouts(Reaction.getShopId(), "coreLayoutSomnium");
});
