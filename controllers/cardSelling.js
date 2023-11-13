 res.json(codes);
      for (let code of codes) {
        await Card_pin.deleteOne({ _id: code._id });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
};
module.exports = sellingcardPin
  
