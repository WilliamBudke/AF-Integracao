exports.getData = (req, res) => {
    res.json({ message: 'GET - Dados obtidos' });
  };
  
  exports.createData = (req, res) => {
    res.json({ message: 'POST - Dado criado', data: req.body });
  };
  
  exports.updateData = (req, res) => {
    res.json({ message: `PUT - Dado ${req.params.id} atualizado`, data: req.body });
  };
  
  exports.deleteData = (req, res) => {
    res.json({ message: `DELETE - Dado ${req.params.id} deletado` });
  };