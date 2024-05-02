const { join } = require('path');
const { access, unlink, constants } = require('fs/promises');
const internalEjsContent = require('../data/cotracts');
const createEJSFile = require('../modules/genEjs');
const genPdf = require('../modules/genpdf');

module.exports = {
  index: (req, res) => {
    return res.render("contract.ejs")
  },

  createContract: async (req, res) => {
    try {

      const {
        locadorNome,
        locadorEndereco,
        locadorTelefone,
        locadorCNPJCPF,

        locatarioNome,
        locatarioEndereco,
        locatarioTelefone,
        locatarioCNPJCPF,

        marcaVeiculo,
        modeloVeiculo,
        anoVeiculo,
        placaVeiculo,
        chassiVeiculo,

        dataInicio,
        dataTermino,

        valorReais,
        valorExtenso,
        formaPagamento,

        localidadeContrato,

      } = req.body;

      const ejscontent = await internalEjsContent(

        locadorNome, locadorEndereco, locadorTelefone, locadorCNPJCPF,
        locatarioNome, locatarioEndereco, locatarioTelefone, locatarioCNPJCPF,
        marcaVeiculo, modeloVeiculo, anoVeiculo, placaVeiculo, chassiVeiculo,
        dataInicio, dataTermino, "30 dias", // TODO, tirar essa string 
        valorReais, valorExtenso, formaPagamento,
        localidadeContrato

      );

      await createEJSFile(ejscontent, "contrato_de_locacao", "../views/created_contracts");
      await genPdf("http://localhost:3000/createdContract");
      await res.redirect("/download_file?fileName=ContratoLocacao_Olv-Locadora_ME");

    } catch (error) {
      console.error("Calma aí paizão, olha o erro", error)
    }
  },

  createdContract: async (req, res) => {
    res.render('./created_contracts/contrato_de_locacao.ejs');
  },

  downloadPDF: async (req, res) => {
    const inputPath = join(__dirname, '../temp/output.pdf');
    try {

      const { fileName } = req.query;
      if (fileName && inputPath) {

        await res.setHeader('Content-Type', 'application/pdf');
        await res.setHeader('Content-Disposition', `attachment; filename=${fileName}.pdf`);
        await res.sendFile(inputPath);

      } else {

        // req.flash('Error', 'Parece que estamos enfrentando alguns problemas, tente novamente.');
        const message = req.flash('Error');
        return res.render('/contracts', { message });

      }

    } catch (error) {

      console.error('Erro ao enviar o arquivo PDF:', error);

      res.status(500).redirect('/error');

    } finally {
      try {
        await access(inputPath, constants.F_OK);
        await unlink(inputPath);
      } catch (err) {
        console.log(err);
      }
    }
  }
}