const Widgets = require('../models/widgets');

module.exports = {};
  
module.exports.create = async (widget) => {
  return Widgets.create(widget);
};

module.exports.getById = async (id) => {
  // We can use a projection to remove "__v"
  return Widgets.findById(id, {__v: 0}).lean();
};

module.exports.updateById = async (id, widget) => {
  // For whatever reason, Mongoose doesn't perform correct schema validation when using findOneAndUpdate
  // (despite them having a flag to do it). A workaround is to pass the data directly into a new schema
  // instance (which exists in Mongoose, not in the DB) and run a validation function. Optionally, you could
  // also call .save() on this instance (although you'd need the _id to correctly perform an update).
  // Let me know if you find a workaround that runs .findOneAndUpdate with the correct validation
  const widgetModel = new Widgets(widget);
  const validationErrors = widgetModel.validateSync();
  if (validationErrors) {
    throw validationErrors;
  }

  // Note that this:
  // return Widgets.findByIdAndUpdate(id, widget, {projection: {__v: 0}}).lean();

  // Is equivalent to this:
  // Also note that per the Mongoose docs, you can define a "projection" option in the options object
  // Additionally, "new: true" is required to return the updated document, as opposed to the initial document.
  // You could also call widgetsDao.getById(...) again, but this is cleaner.
  const response = Widgets.findOneAndUpdate({_id: id}, widget, {projection: {__v: 0}, new: true}).lean();
  return response;
};

module.exports.deleteById = async (id) => {
  return Widgets.findByIdAndDelete({_id: id});
};