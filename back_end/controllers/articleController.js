const Article = require('../models/article');

const articleController = {
  getAllArticles: async (req, res) => {
    try {
      const articles = await Article.find();
      res.json({ success: true, data: articles });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.' });
    }
  },

  createArticle: async (req, res) => {
    try {
      const { title, type, local, description, prix } = req.body;

      const newArticle = new Article({ title, type, local, description, prix });
      await newArticle.save();

      res.status(201).json({ success: true, message: 'Article créé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.' });
    }
  },

  updateArticle: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, type, local, description, prix } = req.body;

      const updatedArticle = await Article.findByIdAndUpdate(id, { title, type, local, description, prix }, { new: true });

      if (!updatedArticle) {
        return res.status(404).json({ success: false, message: 'Article non trouvé' });
      }

      res.json({ success: true, message: 'Article mis à jour avec succès', data: updatedArticle });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.' });
    }
  },

  deleteArticle: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedArticle = await Article.findByIdAndDelete(id);

      if (!deletedArticle) {
        return res.status(404).json({ success: false, message: 'Article non trouvé' });
      }

      res.json({ success: true, message: 'Article supprimé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.' });
    }
  },
};

module.exports = articleController;
