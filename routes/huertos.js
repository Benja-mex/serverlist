const { Router } = require('express');
const { uruapanGet, acuitzioGet, angangueoGet, arioGet, charoGet, charapanGet, churumucoGet, cotijaGet, erongaricuaroGet, grabrielzamoraGet, hidalgoGet, huirambaGet, irimboGet, jimenezGet, losreyesGet, maderoGet, moreliaGet, morelosGet, nuevoparangaricutiroGet, nuevourechoGet, ocampoGet, paracuaroGet, patzcuaroGet, peribanGet, quirogaGet, salvadorescalanteGet, tacambaroGet, tangamandapioGet, tangancicuaroGet, tancitaroGet, taretanGet, tingambatoGet, tinguindinGet, tlazazalcaGet, tocumboGet, tuxpanGet, tzintzuntzanGet, zacapuGet, ziracuaretiroGet, zitacuaroGet, municipiosGet, huertosGet } = require('../controllers/huertos_controllers');

const router = Router();


router.get('/acuitzio',acuitzioGet)
router.get('/angangueo',angangueoGet)
router.get('/ario',arioGet)
router.get('/charapan',charapanGet)
router.get('/charo',charoGet)
router.get('/churumuco',churumucoGet)
router.get('/cotija',cotijaGet)
router.get('/erongaricuaro',erongaricuaroGet)
router.get('/gabrielzamora',grabrielzamoraGet)
router.get('/hidalgo',hidalgoGet)
router.get('/huiramba',huirambaGet)
router.get('/irimbo',irimboGet)
router.get('/jimenez',jimenezGet)
router.get('/LosReyes',losreyesGet)
router.get('/madero',maderoGet)
router.get('/morelia',moreliaGet)
router.get('/morelos',morelosGet)
router.get('/nuevoparangaricutiro',nuevoparangaricutiroGet)
router.get('/nuevourecho',nuevourechoGet)
router.get('/ocampo',ocampoGet)
router.get('/paracuaro',paracuaroGet)
router.get('/patzcuaro',patzcuaroGet)
router.get('/periban',peribanGet)
router.get('/quiroga',quirogaGet)
router.get('/salvadorescalante',salvadorescalanteGet)
router.get('/tacambaro',tacambaroGet)
router.get('/tancitaro',tancitaroGet)
router.get('/tangamandapio',tangamandapioGet)
router.get('/tangancicuaro',tangancicuaroGet)
router.get('/taretan',taretanGet)
router.get('/tingambato',tingambatoGet)
router.get('/tinguindin',tinguindinGet)
router.get('/tlazazalca',tlazazalcaGet)
router.get('/tocumbo',tocumboGet)
router.get('/tuxpan',tuxpanGet)
router.get('/tzintzuntzan',tzintzuntzanGet)
router.get('/zacapu',zacapuGet)
router.get('/ziracuaretiro',ziracuaretiroGet)
router.get('/zitacuaro',zitacuaroGet)
router.get('/uruapan',uruapanGet)
router.get('/municipios',municipiosGet)
router.get('/huertos/d:',huertosGet)
module.exports = router;