async function custom_cpfs_mockados(params) {
  const { input, responses } = params;
  let mock = false;
  let result;

  const responseCpfs = {
    '20667028030':{
      'api_buscaCliente': responses.api_buscaCliente[200].cliente.correntistaBeneficiario,
      'api_permissoes_menu': responses.api_permissoes_menu[200].saque_loterica,
      'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[400].OfertaBloqueada,
      'api_gerar_prospect': responses.api_gerar_prospect[500],
    },
    '47770238005':{
      'api_buscaCliente': responses.api_buscaCliente[200].cliente.correntista,
      'api_permissoes_menu': responses.api_permissoes_menu[200].saque_loterica,
      'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[400].OfertaBloqueada,
      'api_gerar_prospect': responses.api_gerar_prospect[500],
    },
    '63328133003':{
      'api_buscaCliente': responses.api_buscaCliente[200].cliente.correntistaBeneficiario,
      'api_permissoes_menu': responses.api_permissoes_menu[200].saque_loterica,
      'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[400].OfertaBloqueada,
      'api_gerar_prospect': responses.api_gerar_prospect[500],
    },
    // '13170849697': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario
    //  },
    // '03473167606': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.correntistaBeneficiario,
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_receita_federal': responses.api_receita_federal[400],
    //   'api_consulta_status_proposta_FGTS': responses.api_consulta_status_proposta_FGTS[400]
    // },
    // '06984815690': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_consulta_status_proposta_FGTS': responses.api_consulta_status_proposta_FGTS[400]
    // },
    // '53911324014': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].QualquerChaveNova,
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[400].OfertaBloqueada
    // },
    // '05175062034': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].PossuiPropostaAberturaContaIntegrada,
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.Integrada
    // },
    // '13436117099': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '95580658036': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[400],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '32073821006': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[400],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '94603715072': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[400],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[400].PropostaNaoEncontrada,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[400],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '78448642066': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[400],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '06647421068': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[400],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '79377920000': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[400],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '56124595052': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': {
    //     "200": responses.api_validar_midia[200],
    //     "400": responses.api_validar_midia[400].tamanho.video
    //   }
    // },
    // '01612274064': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[400].tempo.video
    // },
    // '30418932077': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].PossuiPropostaAberturaContaEmAndamento
    // },
    // '66316398085': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.Cancelada,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].PossuiPropostaAberturaContaReprovada
    // },
    // '99157694079': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_consultar_propostas': responses.api_consultar_propostas[500],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].PossuiPropostaAberturaContaEmAndamento
    // },
    // '55964267092': {
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].IdadeNaoQualificada,
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    // },
    // '62021301052': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].PossuiPropostaCpEmAndamento,
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].CreditoPessoal.EmAndamento.ContaDigital,
    // },
    // '20296170089': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200],
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    // },
    // '07253602080': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[400].PossuiPropostaAberturaContaEmAndamento,
    //   'api_consultar_propostas': { ...responses.api_consultar_propostas[200].AberturaConta.Cancelada, ...responses.api_consultar_propostas[200].AberturaConta.Cancelada.body.response.push(responses.api_consultar_propostas[200].AberturaConta.EmAndamento.body.response[0]) }
    // },
    // '96644214053': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[400],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200],
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    // },
    // '02377396070': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_cancelar_prospect': responses.api_cancelar_prospect[200],
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    // },
    // '51523051000': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[500],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '92233604040': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[400],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '58087823095': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[400],
    //   'api_validar_midia': responses.api_validar_midia[200]
    // },
    // '32128064007': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[400].tempo.imagem
    // },
    // '22242962078': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[400].tempo.pdf
    // },
    // '35016643032': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[400].tamanho.imagem
    // },
    // '61400381037': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].naoCliente,
    //   'api_atualizar_dados_complementares': responses.api_atualizar_dados_complementares[200],
    //   'api_atualizar_enderecos': responses.api_atualizar_enderecos[200],
    //   'api_consultar_propostas': responses.api_consultar_propostas[200].AberturaConta.EmAndamento,
    //   'api_finalizar_operacao_operacao': responses.api_finalizar_proposta_operacao[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_midias': responses.api_midias[200],
    //   'api_palavra_chave': responses.api_palavra_chave[200],
    //   'api_pesquisar_localidade': responses.api_pesquisar_localidade[200],
    //   'api_politicas_de_restricoes': responses.api_politicas_de_restricoes[200],
    //   'api_proposta_credito': responses.api_proposta_credito[200],
    //   'api_validar_midia': responses.api_validar_midia[400].tamanho.pdf
    // },
    // '42518511024': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[400].ComunicacaoNaoEncontrada,
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[400].ClienteNaoPossuiContratoMinimoQuitacao
    // },
    // '42782806025': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[200],
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[400].ClienteNaoPossuiContratoMinimoQuitacao,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_obter_token_IN100': responses.api_obter_token_IN100[200],
    //   'api_simulacaoRenovacao': responses.api_simulacaoRenovacao[400].ClienteNaoPossuiContratoMinimoQuitacao,
    // },
    // '40234917059': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[200],
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[400].ClienteNaoPossuiContratoMinimoQuitacao,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_obter_token_IN100': responses.api_obter_token_IN100[200],
    //   'api_simulacaoRenovacao': responses.api_simulacaoRenovacao[200],
    //   'api_simulacaoRenovacao2': responses.api_simulacaoRenovacao[400].ClienteNaoPossuiContratoMinimoQuitacao,
    // },
    // '55350900005': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[200],
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[400].ClienteNaoPossuiContratoMinimoQuitacao,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_obter_token_IN100': responses.api_obter_token_IN100[200],
    //   'api_simulacaoRenovacao': responses.api_simulacaoRenovacao[200],
    //   'api_simulacaoRenovacao2': responses.api_simulacaoRenovacao[200],
    //   'api_simulacaoRenovacao3': responses.api_simulacaoRenovacao[400].ClienteNaoPossuiContratoMinimoQuitacao,
    // },
    // '33329623020': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[200],
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[400].ClienteNaoPossuiContratoMinimoQuitacao,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_obter_token_IN100': responses.api_obter_token_IN100[400],
    //   'api_simulacaoRenovacao3': responses.api_simulacaoRenovacao[400].ClienteNaoPossuiContratoMinimoQuitacao,
    // },
    // '88970134069': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[200],
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[400].ClienteNaoPossuiContratoMinimoQuitacao,
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_obter_token_IN100': responses.api_obter_token_IN100[400],
    //   'api_simulacaoRenovacao3': responses.api_simulacaoRenovacao[200],
    //   'api_consultar_IN100': responses.api_consultar_IN100[200],
    //   'api_simulacaoRenovacao2': responses.api_simulacaoRenovacao[400].ClienteNaoPossuiContratoMinimoQuitacao
    // },
    // '76365832087': {
    //   'api_buscaCliente': responses.api_buscaCliente[200].cliente.beneficiario,
    //   'api_comunicacao_procura_oferta_renovacao': responses.api_comunicacao_procura_oferta_renovacao[200],
    //   'api_obter_contratos_aptos_renovar': responses.api_obter_contratos_aptos_renovar[200],
    //   'api_gerar_prospect': responses.api_gerar_prospect[200],
    //   'api_obter_token_IN100': responses.api_obter_token_IN100[400],
    //   'api_simulacaoRenovacao3': responses.api_simulacaoRenovacao[200],
    //   'api_consultar_IN100': responses.api_consultar_IN100[200],
    //   'api_simulacaoRenovacao2': responses.api_simulacaoRenovacao[200],
    //   'api_simulacaoRenovacao3': responses.api_simulacaoRenovacao[400].ClienteNaoPossuiContratoMinimoQuitacao,
    // }
  }

  if (responseCpfs.hasOwnProperty(input.trim())) {
    mock = true;
    result = responseCpfs[input.trim()]
  }

  return {
    input,
    mock,
    result
  }
}

module.exports = custom_cpfs_mockados

