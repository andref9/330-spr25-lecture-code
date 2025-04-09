const { Router } = require("express");
const router = Router();
const widgetsDao = require('../daos/widgets');
const isInvalidIdError = require("../utils/isInvalidIdError");
const isValidationError = require("../utils/isValidationError");

// Create
router.post("/", async (req, res, next) => {
  const widget = req.body;
  if (!widget || JSON.stringify(widget) === '{}') {
    return res.status(400).send('widget is required');
  }

  try {
    await widgetsDao.create(widget);
    return res.sendStatus(201);
  } catch (error) {
    if (isValidationError(error)) {
      return res.status(400).send(error);
    }
    
    return res.status(500).send(error);
  }
});

// Read - single widget
router.get("/:id", async (req, res, next) => {
  const widgetId = req.params.id;
  
  try {
    const widget = await widgetsDao.getById(widgetId);

    if (widget) {
      res.json(widget);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    if (isInvalidIdError(error)) {
      return res.status(400).send(error);
    }
    return res.status(500).send(error);
  }
});

// Update
router.put("/:id", async (req, res, next) => {
  const widgetId = req.params.id;
  const widget = req.body;
  if (!widget || JSON.stringify(widget) === '{}' ) {
    return res.status(400).send('widget is required"');
  }

  try {
    const response = await widgetsDao.updateById(widgetId, widget);
    return res.status(200).send(response);
  } catch (error) {
    if (isInvalidIdError(error) || isValidationError(error)) {
      return res.status(400).send(error);
    }
    return res.status(500).send(error);
  }
});

// Delete
router.delete("/:id", async (req, res, next) => {
  const widgetId = req.params.id;
  try {
    const result = await widgetsDao.deleteById(widgetId);
    if (result.deletedCount === 0) {
      return res.sendStatus(404);
    }
    return res.status(200).send();
  } catch (error) {
    if (isInvalidIdError(error)) {
      return res.status(400).send(error);
    }
    return res.status(500).send(error);
  }
});

module.exports = router;