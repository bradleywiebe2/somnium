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
      defaultVisitorRole: "about",
      defaultVisitorRole: "athletes",
      defaultVisitorRole: "benefits",
      defaultVisitorRole: "contactus",
      defaultVisitorRole: "default",
      defaultVisitorRole: "design",
      defaultVisitorRole: "designers",
      defaultVisitorRole: "faqs",
      defaultVisitorRole: "financing",
      defaultVisitorRole: "health",
      defaultVisitorRole: "home",
      defaultVisitorRole: "mattresscare",
      defaultVisitorRole: "news",
      defaultVisitorRole: "ourcompany",
      defaultVisitorRole: "ourmattress",
      defaultVisitorRole: "privacy",
      defaultVisitorRole: "retailers",
      defaultVisitorRole: "returnpolicy",
      defaultVisitorRole: "somnium1",
      defaultVisitorRole: "somnium2",
      defaultVisitorRole: "somniumbaby",
      defaultVisitorRole: "team",
      defaultVisitorRole: "terms",
      defaultVisitorRole: "warranty",
      defaultVisitorRole: "yoursomnium"
    }
  });
  // Shops.update(shop._id, {
  //   $addToSet: {
  //     defaultRole: "about",
  //     defaultRole: "athletes",
  //     defaultRole: "benefits",
  //     defaultRole: "contactus",
  //     defaultRole: "default",
  //     defaultRole: "design",
  //     defaultRole: "designers",
  //     defaultRole: "faqs",
  //     defaultRole: "financing",
  //     defaultRole: "health",
  //     defaultRole: "home",
  //     defaultRole: "mattresscare",
  //     defaultRole: "news",
  //     defaultRole: "ourcompany",
  //     defaultRole: "ourmattress",
  //     defaultRole: "privacy",
  //     defaultRole: "retailers",
  //     defaultRole: "returnpolicy",
  //     defaultRole: "somnium1",
  //     defaultRole: "somnium2",
  //     defaultRole: "somniumbaby",
  //     defaultRole: "team",
  //     defaultRole: "terms",
  //     defaultRole: "warranty",
  //     defaultRole: "yoursomnium"
  //   }
  // });
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
