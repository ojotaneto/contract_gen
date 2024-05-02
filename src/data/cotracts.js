const gerarContrato = async (
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
  numeroDias,
  
  valorReais,
  valorExtenso,
  formaPagamento,
  
  localidadeContrato) => {



  const contratoHTML = `
    <!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contrato</title>
      <style>
        body {
          padding: 80px;
          font-family: sans-serif;
        }
    
        .container-section {
          display: flex;
        }
    
        .container-section .section1,
        .container-section .section2,
        .container-section2 .section2,
        .container-section2 .section3 {
          width: 50%;
          padding: 20px 50px;
    
        }
    
        .container-section2 {
          display: flex;
        }
    
        footer {
          text-align: center;
          margin-top: 50px;
        }
      </style>
    </head>
    
    <body>
    
      <h2>CONTRATO DE LOCAÇÃO DE VEÍCULO</h2>
    
      <h3>PARTES:</h3>
    
      <div class="container-section">
    
        <div class="section1">
          <p><strong>LOCADOR:</strong> ${locadorNome}<br>
            <strong>Endereço:</strong> ${locadorEndereco}<br>
            <strong>Telefone:</strong> ${locadorTelefone}<br>
            <strong>CNPJ/CPF:</strong> ${locadorCNPJCPF}
          </p>
        </div>
    
        <div class="section2">
          <p><strong>LOCATÁRIO:</strong> ${locatarioNome}<br>
            <strong>Endereço:</strong> ${locatarioEndereco}<br>
            <strong>Telefone:</strong> ${locatarioTelefone}<br>
            <strong>CNPJ/CPF:</strong> ${locatarioCNPJCPF}
          </p>
    
        </div>
      </div>
    
      <div class="container-section2">
    
        <div class="section3">
          <h3>OBJETO:</h3>
    
          <p>Por meio do presente instrumento, o LOCADOR concorda em alugar ao LOCATÁRIO e este concorda em alugar do
            LOCADOR
            o
            seguinte veículo automotor:</p>
    
          <p><strong>Marca:</strong> ${marcaVeiculo}<br>
            <strong>Modelo:</strong> ${modeloVeiculo}<br>
            <strong>Ano:</strong> ${anoVeiculo}<br>
            <strong>Placa:</strong> ${placaVeiculo}<br>
            <strong>Número do Chassi:</strong> ${chassiVeiculo}
          </p>
        </div>
    
        <div class="section4">
          <h3>PERÍODO DE LOCAÇÃO:</h3>
    
          <p>O presente contrato terá início em ${dataInicio} e término em ${dataTermino}, totalizando ${numeroDias} dias de
            locação.</p>
          <h3>VALOR DA LOCAÇÃO:</h3>
    
          <p>O LOCATÁRIO pagará ao LOCADOR a quantia de R$ ${valorReais} (${valorExtenso}) pela locação do veículo
            mencionado, a
            ser pago da seguinte forma: ${formaPagamento}.</p>
        </div>
      </div>
    
    
      <h3>CONDUTAS DO LOCATÁRIO:</h3>
    
      <ol>
        <li>O LOCATÁRIO deverá utilizar o veículo de forma adequada e responsável, observando todas as leis de trânsito e
          regulamentações aplicáveis.</li>
        <li>O LOCATÁRIO não poderá ceder o veículo a terceiros sem consentimento prévio por escrito do LOCADOR.</li>
        <li>O LOCATÁRIO é responsável por quaisquer danos causados ao veículo durante o período de locação, exceto aqueles
          decorrentes de desgaste normal.</li>
        <li>O LOCATÁRIO deve devolver o veículo ao LOCADOR na data e hora acordadas e no mesmo estado em que o recebeu,
          sujeito a uma inspeção de pré e pós-locação.</li>
      </ol>
    
      <h3>CONDUTAS DO LOCADOR:</h3>
    
      <ol>
        <li>O LOCADOR se compromete a entregar o veículo em condições de funcionamento adequadas e com todos os documentos
          necessários.</li>
        <li>O LOCADOR deve fornecer ao LOCATÁRIO todas as informações relevantes sobre o uso e manutenção do veículo.</li>
        <li>O LOCADOR deve garantir que o veículo esteja devidamente segurado durante o período de locação.</li>
      </ol>
    
      <h3>DISPOSIÇÕES GERAIS:</h3>
    
      <ol>
        <li>Qualquer alteração ou emenda a este contrato deve ser feita por escrito e assinada por ambas as partes.</li>
        <li>Este contrato é regido pelas leis vigentes do Brasil e qualquer disputa decorrente do mesmo será submetida à
          jurisdição dos tribunais competentes da comarca de ${localidadeContrato}.</li>
        <li>Este contrato constitui o acordo integral entre as partes e substitui todos os entendimentos anteriores
          relacionados ao objeto do contrato.</li>
      </ol>
      <footer>
    
        <h2>
          Assinaturas
        </h2>
    
        <p><strong>LOCADOR:</strong> ___________________________ <strong>Data:</strong> _______________</p>
    
        <p><strong>LOCATÁRIO:</strong> ___________________________ <strong>Data:</strong> _______________</p>
    
      </footer>
    </body>
    
    </html> `;

  return contratoHTML;
}

module.exports = gerarContrato;