var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

varnodemailer = require("nodemailer");

router.post('/', async(req, res, next) => {

    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var mail = req.body.mail;
    var escribinos = req.body.escribinos;
    var telefono = req.body.telefono;

    console.log(req. body);

    var obj = {
      to: 'mariano.gamba77@gmail.com',
      subject: 'CONTACTO WEB',
      html: nombre + "se contacto a través de la web y quiere más información a este correo : " + mail + ".<br> Además, hizo este comentario : " + escribinos + ".<br> Su tel es: " + telefono
    }

    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    var info = await transport.sendMail(obj);

    res.render('index', {
      message: 'Mensaje enviado correctamente'
    });
});


module.exports = router;
