const {response}=require('express')

const usuariosGet = (req, res=response) => {

    const query = req.query;

  res.status(404).json({
    ok: true,
    msg: "Get api",
    query
  });
  
};


const usuariosPut = (req, res) => {

    const id=req.params.id


  res.status(404).json({
    ok: true,
    msg: "Put api",
    id
  });
};

const usuariosPost = (req, res) => {

    const body=req.body;

   

  res.status(404).json({
    ok: true,
    msg: "Post api",
    body
  });
};

const usuariosDelete = (req, res) => {
  res.status(404).json({
    ok: true,
    msg: "Delete api",
  });
};

const usuariosPatch = (req, res) => {
  res.status(404).json({
    ok: true,
    msg: "Patch api",
  });
};

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}