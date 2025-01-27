require('dotenv').config();
const nodemailer = require('nodemailer')
const { template } = require('./template.js')
const nodemailerSendgrid = require('nodemailer-sendgrid');
const {
  KEY_EMAILER
 } = process.env;


const createTrans = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: KEY_EMAILER,
    })
  );
  return transport;
}

const sendMail = async (user) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: '"Sportiverse ⚡"<sportiversecompay@outlook.com>',
    to: `${user?.email}`,
    subject: `Hola ${user?.name}, te damos la bienvenida a Sportiverse`,
    html: template,
    
  });

  return

}

const sendMailReservation = async (user) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: '"Sportiverse ⚡" <sportiversecompay@outlook.com >',
    to: `${user?.emailUser}`,
    subject: `Hola ${user?.user}, aqui estan los datos de tu Reserva en Sportiverse`,
    html: `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        .menu_block.desktop_hide .menu-links span {
          mso-hide: all;
        }
    
        #memu-r2c1m1:checked~.menu-links {
          background-color: #000 !important;
        }
    
        #memu-r2c1m1:checked~.menu-links a,
        #memu-r2c1m1:checked~.menu-links span {
          color: #fff !important;
        }
    
        @media (max-width:700px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .menu-checkbox[type=checkbox]~.menu-links {
            padding: 5px 0;
            display: none !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-links,
          .menu-checkbox[type=checkbox]~.menu-trigger {
            font-size: inherit !important;
            max-width: none !important;
            max-height: none !important;
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]~.menu-links>a,
          .menu-checkbox[type=checkbox]~.menu-links>span.label {
            text-align: center;
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
            display: none !important;
          }
    
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            max-width: 0;
            min-height: 0;
            max-height: 0;
            font-size: 0;
            display: none;
            overflow: hidden;
          }
    
          .desktop_hide,
          .desktop_hide table {
            max-height: none !important;
            display: table !important;
          }
        }
      </style>
    </head>
    <body style="text-size-adjust: none; background-color: #000; margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <div class="spacer_block block-1" style="height:5px;line-height:5px;font-size:1px;"> </div>
    <div class="spacer_block block-2" style="height:60px;line-height:60px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-right:15px;width:100%;">
    <div align="center" class="alignment" style="line-height:10px"><img src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390787/logo_s7x4cb.png" style="height: auto; display: block; border: 0; max-width: 665px; width: 100%;" width="665"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="text-align:center;width:100%;">
    <h1 style="margin: 0; color: #9ac71f; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 40px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Gracias ${user?.user}</strong></h1>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #9ac71f; line-height: 1.8;">
    <p style="margin: 0; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;"><strong><span style="">Estos son los datos de tu reserva:</span></strong></span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:5px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #ffffff; line-height: 1.8;">
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Actividad:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${user?.activity}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;"><strong><span style=""><u>Fecha:</u> </span></strong><span style="">${user?.date}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Horario:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${user?.hour} hs.</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Sucursal:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${user?.store}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Direccion:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${user?.storeAddress}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Costo:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> $ </span></strong><span style="">${user?.cost}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Estado de Pago:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">Aprobado</span></span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-4" style="height:10px;line-height:10px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #9ac71f; line-height: 1.8;">
    <p style="margin: 0; text-align: center; mso-line-height-alt: 75.60000000000001px;"><span style="font-size:42px;"><strong><span style="">¡Te esperamos!😄</span></strong></span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-6" style="height:20px;line-height:20px;font-size:1px;"> </div>
    <div class="spacer_block block-7" style="height:20px;line-height:20px;font-size:1px;"> </div>
    <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="color:#868686;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:13.2px;">
    <p style="margin: 0;">Te informamos que los datos personales contenidos en esta comunicación fueron recogidos en nuestro formulario de registro, cuyo responsable es Sportiverse. Al registrarte como usuario, aceptas y consientes que tus datos sean almacenados por nuestra plataforma para gestionar el envío de las comunicaciones correspondientes.</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <table border="0" cellpadding="0" cellspacing="0" class="social_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
    <tr>
    <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390935/facebook2x_py4w8a.png" style="height: auto; display: block; border: 0;" title="facebook" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689391018/twitter2x_uyiyzv.png" style="height: auto; display: block; border: 0;" title="twitter" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com" target="_blank"><img alt="Linkedin" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390989/linkedin2x_dq82cf.png" style="height: auto; display: block; border: 0;" title="linkedin" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390964/instagram2x_zouhmy.png" style="height: auto; display: block; border: 0;" title="instagram" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="color:#101010;font-family:inherit;font-size:14px;text-align:center;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r2c1m1" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
    <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r2c1m1" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: #000000; border-radius: 0%;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
    <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Unsubscribe</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Help</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Login</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Privacy</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
    <tr>
    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689391666/bee_kyxfbd.png" style="height: auto; display: block; margin: 0 auto; border: 0;" width="34"/></a></td>
    <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`,
  });
  
  return
}

const sendMailRefund = async (refund) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: '"Sportiverse ⚡"<sportiversecompay@outlook.com >',
    to: `${refund?.emailUser}`,
    subject: `Hola ${refund?.user}, ya realizamos la devolución de tu dinero`,
    html: `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        .menu_block.desktop_hide .menu-links span {
          mso-hide: all;
        }
    
        #memu-r2c1m1:checked~.menu-links {
          background-color: #000 !important;
        }
    
        #memu-r2c1m1:checked~.menu-links a,
        #memu-r2c1m1:checked~.menu-links span {
          color: #fff !important;
        }
    
        @media (max-width:700px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .menu-checkbox[type=checkbox]~.menu-links {
            padding: 5px 0;
            display: none !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-links,
          .menu-checkbox[type=checkbox]~.menu-trigger {
            font-size: inherit !important;
            max-width: none !important;
            max-height: none !important;
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]~.menu-links>a,
          .menu-checkbox[type=checkbox]~.menu-links>span.label {
            text-align: center;
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
            display: none !important;
          }
    
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            max-width: 0;
            min-height: 0;
            max-height: 0;
            font-size: 0;
            display: none;
            overflow: hidden;
          }
    
          .desktop_hide,
          .desktop_hide table {
            max-height: none !important;
            display: table !important;
          }
        }
      </style>
    </head>
    <body style="text-size-adjust: none; background-color: #000; margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <div class="spacer_block block-1" style="height:5px;line-height:5px;font-size:1px;"> </div>
    <div class="spacer_block block-2" style="height:60px;line-height:60px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-right:15px;width:100%;">
    <div align="center" class="alignment" style="line-height:10px"><img src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390787/logo_s7x4cb.png" style="height: auto; display: block; border: 0; max-width: 665px; width: 100%;" width="665"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="text-align:center;width:100%;">
    <h1 style="margin: 0; color: #9ac71f; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 40px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Hola ${refund?.user}</strong></h1>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-2" style="height:10px;line-height:10px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:5px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #ffffff; line-height: 1.8;">
    <p style="margin: 0; text-align: left; mso-line-height-alt: 30.6px;"><span style="font-size:17px;"><strong><span style=""><span style="">Hemos realizado la devolución de tu pago del monto de $ ${refund?.cost} por la cancelación de tu reserva:</span></span></strong></span><u></u></p>
    <p style="margin: 0; text-align: left; mso-line-height-alt: 21.6px;"> </p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Actividad:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${refund?.activity}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;"><strong><span style=""><u>Fecha:</u> </span></strong><span style="">${refund?.date}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Horario:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${refund?.hour} hs.</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="">Sucursal:</span></strong></span></u><span style="font-size:18px;"><strong><span style=""> </span></strong><span style="">${refund?.store}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 21.6px;"> </p>
    <p style="margin: 0; text-align: left; mso-line-height-alt: 30.6px;"><span style="font-size:17px;"><span style=""><strong>El mismo impactara en tu cuenta bancaria a lo largo de las próximas 48 hs, dependiendo de tu banco.</strong></span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 21.6px;"> </p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #9ac71f; line-height: 1.8;">
    <p style="margin: 0; text-align: center; mso-line-height-alt: 75.60000000000001px;"><span style="font-size:42px;"><strong><span style="">¡Te esperamos la próxima!👋</span></strong></span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;"> </div>
    <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="color:#868686;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:13.2px;">
    <p style="margin: 0;">Te informamos que los datos personales contenidos en esta comunicación fueron recogidos en nuestro formulario de registro, cuyo responsable es Sportiverse. Al registrarte como usuario, aceptas y consientes que tus datos sean almacenados por nuestra plataforma para gestionar el envío de las comunicaciones correspondientes.</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <table border="0" cellpadding="0" cellspacing="0" class="social_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
    <tr>
    <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390935/facebook2x_py4w8a.png" style="height: auto; display: block; border: 0;" title="facebook" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689391018/twitter2x_uyiyzv.png" style="height: auto; display: block; border: 0;" title="twitter" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com" target="_blank"><img alt="Linkedin" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390989/linkedin2x_dq82cf.png" style="height: auto; display: block; border: 0;" title="linkedin" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390964/instagram2x_zouhmy.png" style="height: auto; display: block; border: 0;" title="instagram" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="color:#101010;font-family:inherit;font-size:14px;text-align:center;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r2c1m1" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
    <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r2c1m1" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: #000000; border-radius: 0%;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
    <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Unsubscribe</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Help</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Login</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Privacy</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
    <tr>
    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689391666/bee_kyxfbd.png" style="height: auto; display: block; margin: 0 auto; border: 0;" width="34"/></a></td>
    <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`,
    
  });

  return

}

const sendMailRefundAdmin = async (refund) => {
  const transporter = createTrans()
  console.log(refund?.email);
  const info = await transporter.sendMail({
    from: '"Sportiverse ⚡"<sportiversecompay@outlook.com >',
    to: `${refund?.emailUser}`,
    subject: `Hola ${refund?.user}, hemos cancelado tu reserva`,
    html: `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        .menu_block.desktop_hide .menu-links span {
          mso-hide: all;
        }
    
        #memu-r2c1m1:checked~.menu-links {
          background-color: #000 !important;
        }
    
        #memu-r2c1m1:checked~.menu-links a,
        #memu-r2c1m1:checked~.menu-links span {
          color: #fff !important;
        }
    
        @media (max-width:700px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .menu-checkbox[type=checkbox]~.menu-links {
            padding: 5px 0;
            display: none !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-links,
          .menu-checkbox[type=checkbox]~.menu-trigger {
            font-size: inherit !important;
            max-width: none !important;
            max-height: none !important;
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]~.menu-links>a,
          .menu-checkbox[type=checkbox]~.menu-links>span.label {
            text-align: center;
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
            display: block !important;
          }
    
          .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
            display: none !important;
          }
    
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            max-width: 0;
            min-height: 0;
            max-height: 0;
            font-size: 0;
            display: none;
            overflow: hidden;
          }
    
          .desktop_hide,
          .desktop_hide table {
            max-height: none !important;
            display: table !important;
          }
        }
      </style>
    </head>
    <body style="text-size-adjust: none; background-color: #000; margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <div class="spacer_block block-1" style="height:5px;line-height:5px;font-size:1px;"> </div>
    <div class="spacer_block block-2" style="height:60px;line-height:60px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-right:15px;width:100%;">
    <div align="center" class="alignment" style="line-height:10px"><img src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390787/logo_s7x4cb.png" style="height: auto; display: block; border: 0; max-width: 665px; width: 100%;" width="665"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="text-align:center;width:100%;">
    <h1 style="margin: 0; color: #9ac71f; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 40px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Hola ${refund?.user}</strong></h1>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-2" style="height:10px;line-height:10px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-top:5px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #ffffff; line-height: 1.8;">
    <p style="margin: 0; text-align: left; mso-line-height-alt: 30.6px;"><span style="font-size:17px;"><strong><span style="color:#ffffff"><span style="color:#ffffff">Tu reserva ha sido cancelada por un administrador, para más informacion contáctanos respondiendo este email. Los datos de tu reserva cancelada son:</span></span></strong></span><u></u></p>
    <p style="margin: 0; text-align: left; mso-line-height-alt: 21.6px;"> </p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="color:#ffffff">Actividad:</span></strong></span></u><span style="font-size:18px;"><strong><span style="color:#ffffff"> </span></strong><span style="color:#ffffff">${refund?.activity}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;"><strong><span style="color:#ffffff"><u>Fecha:</u> </span></strong><span style="color:#ffffff">${refund?.date}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="color:#ffffff">Horario:</span></strong></span></u><span style="font-size:18px;"><strong><span style="color:#ffffff"> </span></strong><span style="color:#ffffff">${refund?.hour} hs.</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><u><span style="font-size:18px;"><strong><span style="color:#ffffff">Sucursal:</span></strong></span></u><span style="font-size:18px;"><strong><span style="color:#ffffff"> </span></strong><span style="color:#ffffff">${refund?.store}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 32.4px;"><span style="font-size:18px;"><span style="color:#ffffff"><u><strong>Costo:</strong></u><strong> </strong>${refund?.cost}</span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 21.6px;"> </p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 30.6px;"><span style="font-size:17px;"><span style="color:#ffffff"><strong>Hemos realizado la devolución de tu pago, el mismo impactara en tu cuenta bancaria a lo largo de las próximas 48 hs, dependiendo de tu banco.</strong></span></span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 21.6px;"> </p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #9ac71f; line-height: 1.8;">
    <p style="margin: 0; text-align: center; mso-line-height-alt: 75.60000000000001px;"><span style="font-size:42px;"><strong><span style="">¡Disculpa las molestias!😓</span></strong></span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;"> </div>
    <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="color:#868686;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:13.2px;">
    <p style="margin: 0;">Te informamos que los datos personales contenidos en esta comunicación fueron recogidos en nuestro formulario de registro, cuyo responsable es Sportiverse. Al registrarte como usuario, aceptas y consientes que tus datos sean almacenados por nuestra plataforma para gestionar el envío de las comunicaciones correspondientes.</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <table border="0" cellpadding="0" cellspacing="0" class="social_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
    <tr>
    <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390935/facebook2x_py4w8a.png" style="height: auto; display: block; border: 0;" title="facebook" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689391018/twitter2x_uyiyzv.png" style="height: auto; display: block; border: 0;" title="twitter" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com" target="_blank"><img alt="Linkedin" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390989/linkedin2x_dq82cf.png" style="height: auto; display: block; border: 0;" title="linkedin" width="32"/></a></td>
    <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689390964/instagram2x_zouhmy.png" style="height: auto; display: block; border: 0;" title="instagram" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="color:#101010;font-family:inherit;font-size:14px;text-align:center;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r2c1m1" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
    <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r2c1m1" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: #000000; border-radius: 0%;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
    <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Unsubscribe</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Help</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Login</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#101010;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Privacy</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
    <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="16.666666666666668%">
    <div class="spacer_block block-1" style="height:0px;line-height:0px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
    <tr>
    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="https://res.cloudinary.com/dwdosvfpx/image/upload/v1689391666/bee_kyxfbd.png" style="height: auto; display: block; margin: 0 auto; border: 0;" width="34"/></a></td>
    <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`,
    
  });

  return

}

exports.sendMailRefundAdmin = (refund) => sendMailRefundAdmin(refund)

exports.sendMailRefund = (refund) => sendMailRefund(refund)

exports.sendMail = (user) => sendMail(user)

exports.sendMailReservation = (user, reservation) => sendMailReservation(user, reservation)
