const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const queryData = await Category.findAll({
      include: [{ model: Product }],
    });

    if (!queryData) {
      res.status(404).json({ message: 'No record found!' });
      return;
    }
    res.status(200).json(queryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const queryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!queryData) {
      res.status(404).json({ message: 'No record found with that id!' });
      return;
    }

    res.status(200).json(queryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const insertData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(insertData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      }
    });

    if (!updateData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json({ 
      message: 'Successfully updated category',
      id: req.params.id,
      category_name: req.body.category_name
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json({ message: 'Successfully deleted category with id: ' + req.params.id });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
