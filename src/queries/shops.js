/**
 * @name shops
 * @summary Query the Shops collection for a list of shops.
 *   If shopIds are provided, return the matching shops. Otherwise, return all the shops.
 * @param {Object} context - an object containing the per-request state
 * @param {Array} shopIds - optional array of shop IDs to return
 * @returns {Promise<Object>} Products object Promise
 */
export default async function shops(context, shopIds) {
  const { collections } = context;
  const { Shops } = collections;

  // if (Array.isArray(shopIds) && shopIds.length > 0) {
  //   // make sure we're authorized to read all the requested shopIds
  //   for (const shopId of shopIds) {
  //     await context.validatePermissions(`reaction:legacy:shops:${shopId}`, "read", { shopId });
  //   }
  //
  //   return Shops.find({
  //     _id: {
  //       $in: shopIds
  //     }
  //   });
  // }

  // await context.validatePermissions("reaction:legacy:shops:*", "read");

  return Shops.find();
}