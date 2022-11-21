async function custom_mock_apis(params) {
  return {
    "api_obter_codigo_validacao": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/codigoValidacao/codigoValidacao-1668018533824.jpg",
        }
      },
      "400": {
        "PropostaDiaDiferente": {
          "body": {
            "key": "PropostaDiaDiferente",
            "statusCode": 400
          },
          "code": 400
        },
        "ErroConversaoArquivoPdfEmImagem": {
          "body": {
            "key": "ErroConversaoArquivoPdfEmImagem",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Obter Código Validação.",
        }
      }
    },
    "api_consulta_saque_loterica": {
      "200": {
        "reprovada": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": [{
              "numeroOperacao": 570000126,
              "agencia": 1,
              "conta": "11111",
              "contaDigito": 1,
              "mensagemAmigavelSituacaoProposta": "Mensagem de teste: \n*Sua solicitação da senha foi reprovada*",
              "modalidadeCredito": "ContratoNovo",
              "status": "Reprovada",
              "cliente": {
                "nome": "Steve Jobs"
              },
              "descricaoStatus": "Reprovada",
              "descricaoModalidadeCredito": "string"
            }]
          }
        },
        "em_andamento": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": [{
              "numeroOperacao": 570000126,
              "agencia": 1,
              "conta": "11111",
              "contaDigito": 1,
              "mensagemAmigavelSituacaoProposta": "Mensagem de teste: \n*Sua solicitação da senha está em andamento",
              "modalidadeCredito": "ContratoNovo",
              "status": "EmAndamento",
              "cliente": {
                "nome": "Steve Jobs"
              },
              "descricaoStatus": "Em Andamento",
              "descricaoModalidadeCredito": "string"
            }]
          }
        },
        "aprovada": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": [{
              "numeroOperacao": 570000126,
              "agencia": 1,
              "conta": "11111",
              "contaDigito": 1,
              "mensagemAmigavelSituacaoProposta": "Mensagem de teste: \n*Sua solicitação da senha foi aprovada",
              "modalidadeCredito": "ContratoNovo",
              "status": "Integrada",
              "cliente": {
                "nome": "Steve Jobs"
              },
              "descricaoStatus": "Integrada",
              "descricaoModalidadeCredito": "string"
            }]
          }
        }
      },
      "400": {
        "code": 400,
        "body": {
          "statusCode": 400,
          "error": "Missing param: numeroOperacao"
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Consulta Saque Loterica.",
        }
      }
    },
    "api_periodo_disponibilidade_numero": {
      "200": {
        "dentro_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": true
            },
          }
        },
        "fora_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": false
            },
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Periodo Disponibilidade.",
        }
      }
    },
    "api_consultar_contas_aptas": {
      "200": {
        "uma_conta": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "contasAptas": [
              {
                "banco": 260,
                "agencia": 1,
                "conta": "11111",
                "contaDigito": 1,
                "tipoContaBancaria": "Corrente"
              }
            ],
          }
        },
        "mais_de_uma_conta": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "contasAptas": [
              {
                "banco": 389,
                "agencia": 216,
                "conta": "1010011",
                "contaDigito": 5,
                "tipoContaBancaria": "Corrente"
              },
              {
                "banco": 389,
                "agencia": 216,
                "conta": "1018312",
                "contaDigito": 9,
                "tipoContaBancaria": "Corrente"
              }
            ],
            "listaContas": "*1* - Agência: *0216* Conta final: *⁎⁎.⁎⁎⁎.011-5*\n\n*2* - Agência: *0216* Conta final: *⁎⁎.⁎⁎⁎.312-9*\n\n*3* - Nenhuma das opções",
          }
        },
        "sem_conta": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "contasAptas": [],
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possivel executar a função Aptas Saque Lotérica",
        }
      }
    },
    "api_periodo_disponibilidade_id": {
      "200": {
        "dentro_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "periodo": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": true,
              "horaAtualFormatada": "16:44",
              "tempoRestanteAtehTermino": "0:16",
              "permiteEmissaoCodigo": true
            },
          }
        },
        "fora_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "periodo": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": true,
              "horaAtualFormatada": "16:46",
              "tempoRestanteAtehTermino": "0:14",
              "permiteEmissaoCodigo": false
            },
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Consulta Status da Proposta",
        }
      }
    },
    "api_permissoes_menu": {
      "200": {
        "saque_loterica": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "menuOpcoes": [
              {
                "codigo": 1,
                "nome": "Empréstimo FGTS",
                "habilitado": false
              },
              {
                "codigo": 2,
                "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                "habilitado": false
              },
              {
                "codigo": 3,
                "nome": "Renovação de Empréstimo Consignado",
                "habilitado": false
              },
              {
                "codigo": 4,
                "nome": "Empréstimo Saque Cartão Consignado",
                "habilitado": false
              },
              {
                "codigo": 5,
                "nome": "Empréstimo Pessoal",
                "habilitado": false
              },
              {
                "codigo": 6,
                "nome": "Empréstimo Consignado",
                "habilitado": false
              },
              {
                "codigo": 7,
                "nome": "Saque Lotérica",
                "habilitado": true
              }
            ]
          }
        }
      }
    },
    "api_atualizar_dados_bancarios": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "Dados Bancários Atualizados"
        }
      },
      "400": {
        "semKey": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "message": "Não foi possível executar a função Cancelar Prospect"
          }
        },
        "comKey": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "ProspectNaoEncontrada"
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Atualizar Dados Bancários",
        }
      }
    },
    "api_cancelar_prospect": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "Prospect cancelado"
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Cancelar Prospect"
        }
      }
    },
    "api_tipo_documento": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "https://file-examples.com/storage/fed6cf172a635710f9f4051/2017/10/file-sample_150kB.pdf"
        }
      }
    },
    "api_comunicacao_procura_oferta_renovacao": {
      "200": {
        "mensagemTipo1": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "id": 8,
              "tipoComunicacao": 1,
              "mensagem": {
                "tipoMensagem": 1,
                "valorTotalTroco": "R$ 6.000,00"
              }
            }
          }
        },
        "mensagemTipo2": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "id": 3,
              "tipoComunicacao": 1,
              "mensagem": {
                "tipoMensagem": 2,
                "valorTotalTroco": "R$ 6.000,00"
              }
            }
          }
        }
      },
      "400": {
        "ClienteTelefoneDivergente": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "ClienteTelefoneDivergente",
            "message": "O telefone informado é divergente."
          }
        },
        "OfertaBloqueada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "OfertaBloqueada",
            "message": "A oferta para o cliente foi bloqueada, pois ele selecionou uma opção da oferta (Agora ou Depois) e não a finalizou."
          }
        },
        "ComunicacaoNaoEncontrada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "ComunicacaoNaoEncontrada",
            "message": "Dados da comunicação não encontrados."
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Comunicação procura Oferta Renovação.",
        }
      }
    },
    "api_midias": {
      "200": {
        "body": {
          "statusCode": 200,
          "response": "Informações da Mídia atualizadas"
        },
        "code": 200
      },
      "400": {},
      "code": 200
    },
    "api_validar_midia": {
      "200": {
        "body": {
          "statusCode": 200,
          "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/videos-bot-mel/Video_1_MEL_CAMERA_NEW_v2.mp4",
          "tipoMidia": "video/mp4",
          "tamanhoMidia": "4.9 MB",
          "tempoMidia": "73.9 segundos",
        }
      },
      "400": {
        "tamanho": {
          "video": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/videos-bot-mel/Video_1_MEL_CAMERA_NEW_v2.mp4",
              "tipoMidia": "video/mp4",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "pdf": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/PDF-bot-mel/%5BDESCONTINUADO%5D+MB_CartilhaMel_Conta+Corrente.pdf",
              "tipoMidia": "pdf",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "imagem": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/imagens-bot-mel/MB_Mel_Orientacoes-Copia-de-Contrato_2021_1080x1080px-Final.jpg",
              "tipoMidia": "image/jpg",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          }
        },
        "tempo": {
          "video": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/videos-bot-mel/Video_1_MEL_CAMERA_NEW_v2.mp4",
              "tipoMidia": "video/mp4",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "pdf": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/PDF-bot-mel/%5BDESCONTINUADO%5D+MB_CartilhaMel_Conta+Corrente.pdf",
              "tipoMidia": "pdf",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "imagem": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/imagens-bot-mel/MB_Mel_Orientacoes-Copia-de-Contrato_2021_1080x1080px-Final.jpg",
              "tipoMidia": "image/jpg",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          }
        }
      }
    },
    "api_palavra_chave": {
      "200": {
        "body": {
          "response": {
            "numeroOperacao": 570000126,
            "palavraChave": "mabeco"
          },
          "statusCode": 200
        }
      },
      "400": {},
      "code": 400
    },
    "api_proposta_credito": {
      "200": {
        "body": {
          "numeroOperacao": 570000332,
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "key": "ProspectNaoEncontrada",
          "statusCode": 400
        },
        "code": 400
      }
    },
    "api_atualizar_enderecos": {
      "400": {
        "body": {
          "statusCode": 400,
          "key": "ProspectNaoEncontrada"
        }
      },
      "200": {
        "body": {
          "response": "Informações de endereço atualizadas com sucesso.",
          "statusCode": 200
        },
      }
    },
    "api_buscaCliente": {
      "200": {
        "cliente": {
          "beneficiario": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": true
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [],
                "correntista": false,
                "beneficiario": true,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": true,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": true
              },
              "statusCode": 200
            },
            "code": 200
          },
          "correntistaBeneficiario": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": false
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [
                  {
                    "numero": 1837456051,
                    "dataUltimoPagamento": "",
                    "dataProximoPagamento": "07/10/2022",
                    "descricaoStatusUltimoPagamento": "PREVISTO",
                    "descricaoStatusProximoPagamento": "PREVISTO",
                    "valorUltimoPagamento": 2832,
                    "descricaoEspecieBeneficio": "APOSENTADORIA POR TEMPO DE CONTRIBUICAO",
                    "dataVencimentoProvaVida": "31/12/2023"
                  }
                ],
                "correntista": true,
                "beneficiario": true,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": false,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": false
              },
              "statusCode": 200
            },
            "code": 200
          },
          "correntista": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": false
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [],
                "correntista": true,
                "beneficiario": false,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": false,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": false
              },
              "statusCode": 200
            },
            "code": 200
          },
          "contaParalisa": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": false
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [],
                "correntista": false,
                "beneficiario": false,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": false,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": false
              },
              "statusCode": 200
            },
            "code": 200
          }
        },
        "naoCliente": {
          "body": {
            "body": {
              "nome": "Sabrina Germano Silva De Araujo",
              "sexo": "Feminino",
              "menus": [
                {
                  "nome": "Empréstimo FGTS",
                  "codigo": 1,
                  "habilitado": true
                },
                {
                  "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                  "codigo": 2,
                  "habilitado": true
                },
                {
                  "nome": "Renovação de Empréstimo Consignado",
                  "codigo": 3,
                  "habilitado": true
                },
                {
                  "nome": "Empréstimo Saque Cartão Consignado",
                  "codigo": 4,
                  "habilitado": false
                },
                {
                  "nome": "Empréstimo Pessoal",
                  "codigo": 5,
                  "habilitado": false
                },
                {
                  "nome": "Empréstimo Consignado",
                  "codigo": 6,
                  "habilitado": false
                }
              ],
              "nomeMae": "ZELIA LUCAS DA SILVA",
              "clienteMB": false,
              "beneficios": [],
              "correntista": false,
              "beneficiario": false,
              "dataNascimento": "1995-06-26T00:00:00",
              "pessoaVulneravel": false,
              "numeroReferencial": 13637477,
              "telefoneQualificado": null,
              "indicadorPossuiPropostaCP": true
            },
            "statusCode": 404
          },
          "code": 200
        }
      },
      "400": {
        "code": 400,
        "body": {
          "nome": "Amadeu Marcio Correia Barroso",
          "sexo": "Masculino",
          "menus": [
            {
              "nome": "Empréstimo FGTS",
              "codigo": 1,
              "habilitado": true
            },
            {
              "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
              "codigo": 2,
              "habilitado": true
            },
            {
              "nome": "Renovação de Empréstimo Consignado",
              "codigo": 3,
              "habilitado": true
            },
            {
              "nome": "Empréstimo Saque Cartão Consignado",
              "codigo": 4,
              "habilitado": false
            },
            {
              "nome": "Empréstimo Pessoal",
              "codigo": 5,
              "habilitado": false
            },
            {
              "nome": "Empréstimo Consignado",
              "codigo": 6,
              "habilitado": false
            }
          ],
          "nomeMae": "Lea Maria Cancado Lemos",
          "clienteMB": false,
          "beneficios": [],
          "correntista": false,
          "beneficiario": false,
          "qtdBeneficios": 0,
          "dataNascimento": "05/02/1981",
          "telefoneValido": false,
          "pessoaVulneravel": false,
          "numeroReferencial": 3721968,
          "possuiDataPrevista": false,
          "telefoneQualificado": null,
          "listaBeneficiosFiltrada": "",
          "indicadorPossuiPropostaCP": false
        },
        "statusCode": 400
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Busca Cliente"
        }
      }
    },
    "api_simulacao_renovacao": {
      "200": {
        "body": {
          "statusCode": 200,
          "response": {
            "valorLiquidado": "24.626,43",
            "valorTroco": "2.206,45",
            "valorLimitePreAprovadoProduto": "26.832,88",
            "quantidadeParcela": 84,
            "valorParcela": "691,70",
            "contratosRenovados": [
              {
                "numeroContrato": 803824515
              },
              {
                "numeroContrato": 804037916
              }
            ],
            "descricaoEspecieBeneficio": "Pensao Por Morte",
            "valorMinimoParcelas": 78,
            "valorMaximoParcelas": 84,
            "valorMaximoTroco": "2.206,45",
            "valorMinimoTroco": "150,00",
            "contratosRenovadosFormatados": "803824515, 804037916"
          }
        },
        "code": 200
      },
      "400": {
        "ClienteSemProdutos": {
          "body": {
            "key": "ClienteSemProdutos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteNaoPossuiContratoMinimoQuitacao": {
          "body": {
            "key": "ClienteNaoPossuiContratoMinimoQuitacao",
            "statusCode": 400
          },
          "code": 400
        },
        "NaoExisteContratosAptos": {
          "body": {
            "key": "NaoExisteContratosAptos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteRenovacaoAndamento": {
          "body": {
            "key": "ClienteRenovacaoAndamento",
            "statusCode": 400
          },
          "code": 400
        },
        "ChaveNaoMapeada": {
          "body": {
            "key": "ChaveNaoMapeada",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_obter_contratos_aptos_renovar": {
      "200": {
        "body": {
          "response": "",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ClienteSemProdutos": {
          "body": {
            "key": "ClienteSemProdutos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteNaoPossuiContratoMinimoQuitacao": {
          "body": {
            "key": "ClienteNaoPossuiContratoMinimoQuitacao",
            "statusCode": 400
          },
          "code": 400
        },
        "NaoExisteContratosAptos": {
          "body": {
            "key": "NaoExisteContratosAptos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteRenovacaoAndamento": {
          "body": {
            "key": "ClienteRenovacaoAndamento",
            "statusCode": 400
          },
          "code": 400
        },
        "ChaveNaoMapeada": {
          "body": {
            "key": "ChaveNaoMapeada",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_obter_token_IN100": {
      "200": {
        "body": {
          "response": {
            "statusCode": 200,
            "response": "Token obtido com sucesso."
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "statusCode": 400,
          "key": "NaoPossuiAutorizacaoConsultaIN100"
        },
        "code": 400
      }
    },
    "api_consultar_IN100": {
      "200": {
        "body": {
          "response": {
            "statusCode": 200,
            "response": "Consulta IN100 realizada com sucesso."
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "error": "Missing param: Faltando parâmetros obrigatórios"
        },
        "code": 400
      }
    },
    "api_palavra_chave": {
      "200": {
        "body": {
          "response": {
            "palavraChave": "mabeco",
            "numeroOperacao": 570000126
          },
          "statusCode": 200
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possivel executar a função Palavra Chave",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_pix_randomico": {
      "200": {
        "body": {
          "response": {
            "id": "f214ca66-0ab7-4415-8b36-cfd641e4237d",
            "conta": {
              "cliente": {
                "nome": "Sabrina",
                "telefone": {
                  "ddd": 31,
                  "numero": 999838894
                }
              },
              "tipoConta": "ContaCorrente",
              "codigoBanco": "33",
              "digitoConta": "6",
              "numeroConta": "343232",
              "digitoAgencia": "",
              "numeroAgencia": "1"
            },
            "enviadoEm": "2022-09-19T18:12:11.8518399-03:00"
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ClienteBloqueadoPorLimiteRetentativa": {
          "body": {
            "key": "ClienteBloqueadoPorLimiteRetentativa",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Pix Randômico",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_gerar_prospect": {
      "200": {
        "body": {
          "cliente": {
            "nome": "Sabrina Germano Silva De Araujo",
            "sexo": null,
            "email": null,
            "nomeMae": null,
            "telefone": {
              "ddd": 31,
              "numero": 987654321
            },
            "valorRenda": null,
            "estadoCivil": null,
            "nomeConjuge": null,
            "classificacao": 1,
            "dataNascimento": "26/06/1995",
            "naturalidadeId": null,
            "numeroReferencialIpc": 13637477
          },
          "prospectId": "5a6b3328-9cf7-4aba-a7c0-cd22dc8e21dd",
          "statusCode": 200
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Gerar Prospect",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_simulacao_fgts": {
      "200": {
        "com_taxa": {
          "body": {
            "response": {
              "parcelas": [
                {
                  "valor": 7825.76,
                  "numero": 1,
                  "valorIof": 147.85,
                  "valorJuros": 1419.07,
                  "valorTotal": 9244.83,
                  "dataVencimento": "2022-04-01T00:00:00",
                  "percentualJuros": 15.34
                },
                {
                  "valor": 8317.02,
                  "numero": 2,
                  "valorIof": 371,
                  "valorJuros": 2127.82,
                  "valorTotal": 10444.84,
                  "dataVencimento": "2023-04-01T00:00:00",
                  "percentualJuros": 20.37
                }
              ],
              "valorIof": 518.85,
              "valorTac": 0,
              "valorTarifa": 60,
              "taxaJurosAno": 25.19,
              "taxaJurosMes": 1.89,
              "dataMovimento": "2021-11-17T00:00:00",
              "taxaEfetivaAno": 30.3,
              "taxaEfetivaMes": 2.23,
              "valorSaldoFgts": 19689.67,
              "valorEmprestimo": 15623.93,
              "valorFinanciado": 16142.78,
              "valorMaximoParcela": 10444.84,
              "diaVencimentoParcela": 1,
              "dataPrimeiroVencimento": "2022-04-01T00:00:00"
            },
            "formatado": {
              "parcelas": [
                {
                  "valor": "R$ 7.825,76",
                  "valorTotal": "R$ 9.244,83",
                  "dataVencimento": "01/04/2022"
                },
                {
                  "valor": "R$ 8.317,02",
                  "valorTotal": "R$ 10.444,84",
                  "dataVencimento": "01/04/2023"
                }
              ],
              "valorIof": "R$ 518,85",
              "valorTarifa": "R$ 60,00",
              "taxaJurosAno": "25.19",
              "taxaJurosMes": "1.89",
              "dataMovimento": "17/11/2021",
              "listaParcelas": "1º Saque: *R$ 9.244,83* - Data: *01/04/2022*\n2º Saque: *R$ 10.444,84* - Data: *01/04/2023*\n",
              "taxaEfetivaAno": "30.30",
              "taxaEfetivaMes": "2.23",
              "valorSaldoFgts": "R$ 19.689,67",
              "valorEmprestimo": "R$ 15.623,93",
              "valorFinanciado": "R$ 16.142,78",
              "valorMaximoParcela": "R$ 10.444,84",
              "dataPrimeiroVencimento": "01/04/2022"
            },
            "statusCode": 200
          },
          "code": 200
        },
        "sem_taxa": {
          "body": {
            "response": {
              "parcelas": [
                {
                  "valor": 7825.76,
                  "numero": 1,
                  "valorIof": 147.85,
                  "valorJuros": 1419.07,
                  "valorTotal": 9244.83,
                  "dataVencimento": "2022-04-01T00:00:00",
                  "percentualJuros": 15.34
                },
                {
                  "valor": 8317.02,
                  "numero": 2,
                  "valorIof": 371,
                  "valorJuros": 2127.82,
                  "valorTotal": 10444.84,
                  "dataVencimento": "2023-04-01T00:00:00",
                  "percentualJuros": 20.37
                }
              ],
              "valorIof": 518.85,
              "valorTac": 0,
              "valorTarifa": 0,
              "taxaJurosAno": 25.19,
              "taxaJurosMes": 1.89,
              "dataMovimento": "2021-11-17T00:00:00",
              "taxaEfetivaAno": 30.3,
              "taxaEfetivaMes": 2.23,
              "valorSaldoFgts": 19689.67,
              "valorEmprestimo": 15623.93,
              "valorFinanciado": 16142.78,
              "valorMaximoParcela": 10444.84,
              "diaVencimentoParcela": 1,
              "dataPrimeiroVencimento": "2022-04-01T00:00:00"
            },
            "formatado": {
              "parcelas": [
                {
                  "valor": "R$ 7.825,76",
                  "valorTotal": "R$ 9.244,83",
                  "dataVencimento": "01/04/2022"
                },
                {
                  "valor": "R$ 8.317,02",
                  "valorTotal": "R$ 10.444,84",
                  "dataVencimento": "01/04/2023"
                }
              ],
              "valorIof": "R$ 518,85",
              "valorTarifa": "R$ 0,00",
              "taxaJurosAno": "25.19",
              "taxaJurosMes": "1.89",
              "dataMovimento": "17/11/2021",
              "listaParcelas": "1º Saque: *R$ 9.244,83* - Data: *01/04/2022*\n2º Saque: *R$ 10.444,84* - Data: *01/04/2023*\n",
              "taxaEfetivaAno": "30.30",
              "taxaEfetivaMes": "2.23",
              "valorSaldoFgts": "R$ 19.689,67",
              "valorEmprestimo": "R$ 15.623,93",
              "valorFinanciado": "R$ 16.142,78",
              "valorMaximoParcela": "R$ 10.444,84",
              "dataPrimeiroVencimento": "01/04/2022"
            },
            "statusCode": 200
          },
          "code": 200
        }
      },
      "400": {
        "ErroInterno": {
          "body": {
            "key": "ErroInterno",
            "statusCode": 400
          },
          "code": 400
        },
        "OperacaoNaoAutorizada": {
          "body": {
            "key": "OperacaoNaoAutorizada",
            "statusCode": 400
          },
          "code": 400
        },
        "SaqueAniversarioNaoAderido": {
          "body": {
            "key": "SaqueAniversarioNaoAderido",
            "statusCode": 400
          },
          "code": 400
        },
        "ValorEmprestimoMenorMinimo": {
          "body": {
            "key": "ValorEmprestimoMenorMinimo",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Simulação FGTS",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_receita_federal": {
      "200": {
        "body": {
          "body": {
            "nome": "Amadeu Marcio Correia Barroso",
            "sexo": "Feminino",
            "obito": false,
            "nomeMae": "Lea Maria Cancado Lemos",
            "dataNascimento": "21/05/1996",
            "situacaoCadastral": "REGULAR",
            "numeroReferencialIpc": 10688865
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ClienteTelefoneRestrito": {
          "body": {
            "key": "ClienteTelefoneRestrito",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_gravar_proposta_FGTS": {
      "200": {
        "body": {
          "statusCode": 200,
          "numeroOperacao": 570000124
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possivel executar a função Gravar Proposta FGTS",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_validar_pix_randomico": {
      "200": {
        "body": {
          "response": "",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ValorIncorreto": {
          "body": {
            "key": "ValorIncorreto",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteBloqueadoPorLimiteRetentativa": {
          "body": {
            "key": "ClienteBloqueadoPorLimiteRetentativa",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Validar Pix Randômico.",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_atualizar_prospect_FGTS": {
      "200": {
        "body": {
          "response": "Informações do Prospect atualizadas com sucesso",
          "statusCode": 200
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Atualizar Prospect FGTS",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_finalizar_proposta_operacao": {
      "200": {
        "body": {
          "response": "Proposta de número operação 570000340 finalizada com sucesso.",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "PropostaJaFoiInicializada": {
          "body": {
            "key": "PropostaJaFoiInicializada",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_pesquisar_localidade": {
      "200": {
        "body": {
          "statusCode": 200,
          "localidade": [
            {
              "cidade": "Rio de Janeiro",
              "uf": "RJ"
            }
          ],
        },
        "code": 200
      },
      "400": {
        "body": {
          "key": "EnderecoNaoLocalizado",
          "statusCode": 400
        },
        "code": 400
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Pesquisar Localidade"
        }
      }
    },
    "api_consulta_status_proposta_FGTS": {
      "200": {
        "com_proposta_ativa": {
          "body": {
            "response": [
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "teste@teste.com",
                  "dddCelular": 31,
                  "valorRenda": 1100,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 226.04,
                "valorTac": 0,
                "taxaCetAno": 26.38,
                "taxaCetMes": 1.97,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 5103.08,
                "valorLiberado": 0,
                "numeroOperacao": 570000276,
                "dataBaseCalculo": "2022-03-18T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 6491.48,
                "valorFinanciado": 6717.52,
                "quantidadeParcelas": 7,
                "dataUltimoVencimento": "2028-11-01T00:00:00",
                "dataHoraInicioConversa": "2022-03-23T11:13:25.727",
                "dataPrimeiroVencimento": "2022-11-01T00:00:00"
              },
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "chris_patricia86@hotmail.com",
                  "dddCelular": 31,
                  "valorRenda": 1100,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 275.02,
                "valorTac": 0,
                "taxaCetAno": 27.87,
                "taxaCetMes": 2.07,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 2868.1,
                "valorLiberado": 0,
                "numeroOperacao": 570000111,
                "dataBaseCalculo": "2021-11-26T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 5890.41,
                "valorFinanciado": 6165.43,
                "quantidadeParcelas": 4,
                "dataUltimoVencimento": "2026-01-01T00:00:00",
                "dataHoraInicioConversa": "2021-11-30T14:22:34.217",
                "dataPrimeiroVencimento": "2023-01-01T00:00:00"
              },
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "teste@teste.com",
                  "dddCelular": 31,
                  "valorRenda": 1100,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 226.04,
                "valorTac": 0,
                "taxaCetAno": 26.38,
                "taxaCetMes": 1.97,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 5103.08,
                "valorLiberado": 0,
                "numeroOperacao": 570000275,
                "dataBaseCalculo": "2022-03-18T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 6491.48,
                "valorFinanciado": 6717.52,
                "quantidadeParcelas": 7,
                "dataUltimoVencimento": "2028-11-01T00:00:00",
                "dataHoraInicioConversa": "2022-03-23T11:13:25.727",
                "dataPrimeiroVencimento": "2022-11-01T00:00:00"
              },
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "teste@teste.com",
                  "dddCelular": 31,
                  "valorRenda": 2200,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 226.04,
                "valorTac": 0,
                "taxaCetAno": 26.38,
                "taxaCetMes": 1.97,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 5103.08,
                "valorLiberado": 0,
                "numeroOperacao": 570000278,
                "dataBaseCalculo": "2022-03-18T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 6491.48,
                "valorFinanciado": 6717.52,
                "quantidadeParcelas": 7,
                "dataUltimoVencimento": "2028-11-01T00:00:00",
                "dataHoraInicioConversa": "2022-03-23T13:54:47.19",
                "dataPrimeiroVencimento": "2022-11-01T00:00:00"
              }
            ],
            "statusCode": 200,
            "listaProposta": "*1 - Nº Proposta:* 570000276 | *Data:* 18/03/2022 | *Status:* Reprovada\n\n*2 - Nº Proposta:* 570000111 | *Data:* 26/11/2021 | *Status:* Reprovada\n\n*3 - Nº Proposta:* 570000275 | *Data:* 18/03/2022 | *Status:* Reprovada\n\n*4 - Nº Proposta:* 570000278 | *Data:* 18/03/2022 | *Status:* Reprovada\n\n",
            "propostaAtiva": true
          },
          "code": 200
        },
        "sem_proposta_ativa": {
          "body": {
            "response": [],
            "statusCode": 200,
            "propostaAtiva": false
          },
          "code": 200
        }
      },
      "400": {
        "body": {
          "response": [],
          "statusCode": 400,
          "propostaAtiva": false
        },
        "code": 400
      }
    },
    "api_politicas_de_restricoes": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "OK"
        }
      },
      "400": {
        "IdadeNaoQualificada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "IdadeNaoQualificada"
          }
        },
        "PossuiPropostaAberturaContaReprovada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaAberturaContaReprovada"
          }
        },
        "PossuiPropostaAberturaContaEmAndamento": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaAberturaContaEmAndamento"
          }
        },
        "PossuiPropostaCpEmAndamento": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaCpEmAndamento",
            "message": "O cliente possui proposta de crédito pessoal em andamento."
          }
        },
        "PossuiContaAtiva": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiContaAtiva"
          }
        },
        "PossuiPropostaAberturaContaIntegrada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaAberturaContaIntegrada"
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Politicas De Restrições.",
        }
      }
    },
    "api_atualizar_dados_complementares": {
      "200": {
        "body": {
          "response": "Informações de Dados Complementares atualizadas com sucesso.",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "key": "ProspectNaoEncontrada",
          "statusCode": 400
        },
        "code": 400
      }
    },
    "api_consultar_propostas": {
      "200": {
        "CreditoPessoal": {
          "EmAndamento": {
            "ContaDigital": {
              "code": 200,
              "body": {
                "statusCode": 200,
                "response": [
                  {
                    "status": "EmAndamento",
                    "cliente": {
                      "nome": "Steve Jobs",
                      "email": null,
                      "dddCelular": 99,
                      "valorRenda": null,
                      "classificacao": "Novo",
                      "numeroCelular": 999999999,
                      "numeroBeneficio": 1967103795
                    },
                    "valorIof": 212.85,
                    "valorTac": 0,
                    "taxaCetAno": 29.69,
                    "taxaCetMes": 2.19,
                    "taxaJurosAno": 28.32,
                    "taxaJurosMes": 2.1,
                    "contaBancaria": {
                      "conta": "1036315",
                      "agencia": 327,
                      "contaDigito": 5,
                      "tipoContaBancaria": "Corrente",
                      "tipoOriginacaoConta": "ContaDigital"
                    },
                    "valorLiberado": 0,
                    "numeroOperacao": 570951319,
                    "dataBaseCalculo": "14/09/2022",
                    "descricaoStatus": "Em Andamento",
                    "valorEmprestimo": 7415,
                    "valorFinanciado": 7627.85,
                    "modalidadeCredito": "CreditoPessoal",
                    "quantidadeParcelas": 84,
                    "dataHoraInicioConversa": "14/09/2022",
                    "mensagemAmigavelCliente": "[FRASEOLOGIA API] Mensagem amigável cliente",
                    "modalidadeCreditoDescricao": "Crédito Pessoal"
                  }
                ]
              }
            },
            "Conta09": {}
          },
          "Integrada": {
            "ContaDigital": {
              "code": 200,
              "body": {
                "statusCode": 200,
                "response": [
                  {
                    "status": "Integrada",
                    "cliente": {
                      "nome": "Steve Jobs",
                      "email": null,
                      "dddCelular": 99,
                      "valorRenda": null,
                      "classificacao": "Novo",
                      "numeroCelular": 999999999,
                      "numeroBeneficio": 1967103795
                    },
                    "valorIof": 212.85,
                    "valorTac": 0,
                    "taxaCetAno": 29.69,
                    "taxaCetMes": 2.19,
                    "taxaJurosAno": 28.32,
                    "taxaJurosMes": 2.1,
                    "contaBancaria": {
                      "conta": "1036315",
                      "agencia": 327,
                      "contaDigito": 5,
                      "tipoContaBancaria": "Corrente",
                      "tipoOriginacaoConta": "ContaDigital"
                    },
                    "valorLiberado": 0,
                    "numeroOperacao": 570951319,
                    "dataBaseCalculo": "14/09/2022",
                    "descricaoStatus": "Aprovada",
                    "valorEmprestimo": 7415,
                    "valorFinanciado": 7627.85,
                    "modalidadeCredito": "CreditoPessoal",
                    "quantidadeParcelas": 84,
                    "dataHoraInicioConversa": "14/09/2022",
                    "mensagemAmigavelCliente": null,
                    "modalidadeCreditoDescricao": "Renovação"
                  }
                ]
              }
            },
            "Conta09": {}
          },
          "Cancelada": {
            "ContaDigital": {
              "code": 200,
              "body": {
                "statusCode": 200,
                "response": [
                  {
                    "status": "Cancelada",
                    "cliente": {
                      "nome": "Steve Jobs",
                      "email": null,
                      "dddCelular": 99,
                      "valorRenda": null,
                      "classificacao": "Novo",
                      "numeroCelular": 999999999,
                      "numeroBeneficio": 1967103795
                    },
                    "valorIof": 212.85,
                    "valorTac": 0,
                    "taxaCetAno": 29.69,
                    "taxaCetMes": 2.19,
                    "taxaJurosAno": 28.32,
                    "taxaJurosMes": 2.1,
                    "contaBancaria": {
                      "conta": "1036315",
                      "agencia": 327,
                      "contaDigito": 5,
                      "tipoContaBancaria": "Corrente",
                      "tipoOriginacaoConta": "ContaDigital"
                    },
                    "valorLiberado": 0,
                    "numeroOperacao": 570951319,
                    "dataBaseCalculo": "14/09/2022",
                    "descricaoStatus": "Aprovada",
                    "valorEmprestimo": 7415,
                    "valorFinanciado": 7627.85,
                    "modalidadeCredito": "CreditoPessoal",
                    "quantidadeParcelas": 84,
                    "dataHoraInicioConversa": "14/09/2022",
                    "mensagemAmigavelCliente": null,
                    "modalidadeCreditoDescricao": "Renovação"
                  }
                ]
              }
            },
            "Conta09": {}
          }
        },
        "AberturaConta": {
          "Integrada": {
            "code": 200,
            "body": {
              "statusCode": 200,
              "response": [
                {
                  "status": "Integrada",
                  "cliente": {
                    "nome": "Steve Jobs",
                    "email": null,
                    "dddCelular": 99,
                    "valorRenda": null,
                    "classificacao": "Novo",
                    "numeroCelular": 999999999
                  },
                  "contaBancaria": {
                    "conta": "1036315",
                    "agencia": 327,
                    "contaDigito": 5,
                    "tipoContaBancaria": "Corrente",
                    "tipoOriginacaoConta": "ContaDigital"
                  },
                  "numeroOperacao": 570951319,
                  "descricaoStatus": "Aprovada",
                  "modalidadeCredito": "AberturaConta",
                  "modalidadeCreditoDescricao": "Abertura de conta",
                  "dataHoraInicioConversa": "14/09/2022"
                }
              ]
            }
          },
          "Cancelada": {
            "code": 200,
            "body": {
              "statusCode": 200,
              "response": [
                {
                  "status": "Cancelada",
                  "cliente": {
                    "nome": "Steve Jobs",
                    "email": null,
                    "dddCelular": 99,
                    "valorRenda": null,
                    "classificacao": "Novo",
                    "numeroCelular": 999999999
                  },
                  "contaBancaria": null,
                  "numeroOperacao": 570951319,
                  "descricaoStatus": "Reprovada",
                  "modalidadeCredito": "AberturaConta",
                  "modalidadeCreditoDescricao": "Abertura de conta",
                  "dataHoraInicioConversa": "14/09/2022"
                }
              ]
            }
          },
          "EmAndamento": {
            "code": 200,
            "body": {
              "statusCode": 200,
              "response": [
                {
                  "status": "EmAndamento",
                  "cliente": {
                    "nome": "Steve Jobs",
                    "email": null,
                    "dddCelular": 99,
                    "valorRenda": null,
                    "classificacao": "Novo",
                    "numeroCelular": 999999999
                  },
                  "contaBancaria": null,
                  "numeroOperacao": 570951319,
                  "descricaoStatus": "Em Andamento",
                  "modalidadeCredito": "AberturaConta",
                  "modalidadeCreditoDescricao": "Abertura de conta",
                  "dataHoraInicioConversa": "14/09/2022",
                  "mensagemAmigavelCliente": "Essa fraseologia vem da API do cliente.",
                }
              ]
            }
          }
        }
      },
      "400": {
        "PropostaNaoEncontrada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PropostaNaoEncontrada"
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Consultar Propostas"
        }
      }
    }
  }
} async function custom_mock_apis(params) {
  return {
    "api_obter_codigo_validacao": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/codigoValidacao/codigoValidacao-1668018533824.jpg",
        }
      },
      "400": {
        "PropostaDiaDiferente": {
          "body": {
            "key": "PropostaDiaDiferente",
            "statusCode": 400
          },
          "code": 400
        },
        "ErroConversaoArquivoPdfEmImagem": {
          "body": {
            "key": "ErroConversaoArquivoPdfEmImagem",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Obter Código Validação.",
        }
      }
    },
    "api_consulta_saque_loterica": {
      "200": {
        "reprovada": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": [{
              "numeroOperacao": 570000126,
              "agencia": 1,
              "conta": "11111",
              "contaDigito": 1,
              "mensagemAmigavelSituacaoProposta": "Mensagem de teste: \n*Sua solicitação da senha foi reprovada*",
              "modalidadeCredito": "ContratoNovo",
              "status": "Reprovada",
              "cliente": {
                "nome": "Steve Jobs"
              },
              "descricaoStatus": "Reprovada",
              "descricaoModalidadeCredito": "string"
            }]
          }
        },
        "em_andamento": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": [{
              "numeroOperacao": 570000126,
              "agencia": 1,
              "conta": "11111",
              "contaDigito": 1,
              "mensagemAmigavelSituacaoProposta": "Mensagem de teste: \n*Sua solicitação da senha está em andamento",
              "modalidadeCredito": "ContratoNovo",
              "status": "EmAndamento",
              "cliente": {
                "nome": "Steve Jobs"
              },
              "descricaoStatus": "Em Andamento",
              "descricaoModalidadeCredito": "string"
            }]
          }
        },
        "aprovada": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": [{
              "numeroOperacao": 570000126,
              "agencia": 1,
              "conta": "11111",
              "contaDigito": 1,
              "mensagemAmigavelSituacaoProposta": "Mensagem de teste: \n*Sua solicitação da senha foi aprovada",
              "modalidadeCredito": "ContratoNovo",
              "status": "Integrada",
              "cliente": {
                "nome": "Steve Jobs"
              },
              "descricaoStatus": "Integrada",
              "descricaoModalidadeCredito": "string"
            }]
          }
        }
      },
      "400": {
        "code": 400,
        "body": {
          "statusCode": 400,
          "error": "Missing param: numeroOperacao"
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Consulta Saque Loterica.",
        }
      }
    },
    "api_periodo_disponibilidade_numero": {
      "200": {
        "dentro_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": true
            },
          }
        },
        "fora_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": false
            },
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Periodo Disponibilidade.",
        }
      }
    },
    "api_consultar_contas_aptas": {
      "200": {
        "uma_conta": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "contasAptas": [
              {
                "banco": 260,
                "agencia": 1,
                "conta": "11111",
                "contaDigito": 1,
                "tipoContaBancaria": "Corrente"
              }
            ],
          }
        },
        "mais_de_uma_conta": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "contasAptas": [
              {
                "banco": 389,
                "agencia": 216,
                "conta": "1010011",
                "contaDigito": 5,
                "tipoContaBancaria": "Corrente"
              },
              {
                "banco": 389,
                "agencia": 216,
                "conta": "1018312",
                "contaDigito": 9,
                "tipoContaBancaria": "Corrente"
              }
            ],
            "listaContas": "*1* - Agência: *0216* Conta final: *⁎⁎.⁎⁎⁎.011-5*\n\n*2* - Agência: *0216* Conta final: *⁎⁎.⁎⁎⁎.312-9*\n\n*3* - Nenhuma das opções",
          }
        },
        "sem_conta": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "contasAptas": [],
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possivel executar a função Aptas Saque Lotérica",
        }
      }
    },
    "api_periodo_disponibilidade_id": {
      "200": {
        "dentro_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "periodo": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": true,
              "horaAtualFormatada": "16:44",
              "tempoRestanteAtehTermino": "0:16",
              "permiteEmissaoCodigo": true
            },
          }
        },
        "fora_periodo_disponibilidade": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "periodo": {
              "horarioInicio": "00:01",
              "horarioTermino": "17:00",
              "dentroPeriodoDisponibilidade": true,
              "horaAtualFormatada": "16:46",
              "tempoRestanteAtehTermino": "0:14",
              "permiteEmissaoCodigo": false
            },
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Consulta Status da Proposta",
        }
      }
    },
    "api_permissoes_menu": {
      "200": {
        "saque_loterica": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "menuOpcoes": [
              {
                "codigo": 1,
                "nome": "Empréstimo FGTS",
                "habilitado": false
              },
              {
                "codigo": 2,
                "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                "habilitado": false
              },
              {
                "codigo": 3,
                "nome": "Renovação de Empréstimo Consignado",
                "habilitado": false
              },
              {
                "codigo": 4,
                "nome": "Empréstimo Saque Cartão Consignado",
                "habilitado": false
              },
              {
                "codigo": 5,
                "nome": "Empréstimo Pessoal",
                "habilitado": false
              },
              {
                "codigo": 6,
                "nome": "Empréstimo Consignado",
                "habilitado": false
              },
              {
                "codigo": 7,
                "nome": "Saque Lotérica",
                "habilitado": true
              }
            ]
          }
        }
      }
    },
    "api_atualizar_dados_bancarios": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "Dados Bancários Atualizados"
        }
      },
      "400": {
        "semKey": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "message": "Não foi possível executar a função Cancelar Prospect"
          }
        },
        "comKey": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "ProspectNaoEncontrada"
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Atualizar Dados Bancários",
        }
      }
    },
    "api_cancelar_prospect": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "Prospect cancelado"
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Cancelar Prospect"
        }
      }
    },
    "api_tipo_documento": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "https://file-examples.com/storage/fed6cf172a635710f9f4051/2017/10/file-sample_150kB.pdf"
        }
      }
    },
    "api_comunicacao_procura_oferta_renovacao": {
      "200": {
        "mensagemTipo1": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "id": 8,
              "tipoComunicacao": 1,
              "mensagem": {
                "tipoMensagem": 1,
                "valorTotalTroco": "R$ 6.000,00"
              }
            }
          }
        },
        "mensagemTipo2": {
          "code": 200,
          "body": {
            "statusCode": 200,
            "response": {
              "id": 3,
              "tipoComunicacao": 1,
              "mensagem": {
                "tipoMensagem": 2,
                "valorTotalTroco": "R$ 6.000,00"
              }
            }
          }
        }
      },
      "400": {
        "ClienteTelefoneDivergente": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "ClienteTelefoneDivergente",
            "message": "O telefone informado é divergente."
          }
        },
        "OfertaBloqueada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "OfertaBloqueada",
            "message": "A oferta para o cliente foi bloqueada, pois ele selecionou uma opção da oferta (Agora ou Depois) e não a finalizou."
          }
        },
        "ComunicacaoNaoEncontrada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "ComunicacaoNaoEncontrada",
            "message": "Dados da comunicação não encontrados."
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Comunicação procura Oferta Renovação.",
        }
      }
    },
    "api_midias": {
      "200": {
        "body": {
          "statusCode": 200,
          "response": "Informações da Mídia atualizadas"
        },
        "code": 200
      },
      "400": {},
      "code": 200
    },
    "api_validar_midia": {
      "200": {
        "body": {
          "statusCode": 200,
          "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/videos-bot-mel/Video_1_MEL_CAMERA_NEW_v2.mp4",
          "tipoMidia": "video/mp4",
          "tamanhoMidia": "4.9 MB",
          "tempoMidia": "73.9 segundos",
        }
      },
      "400": {
        "tamanho": {
          "video": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/videos-bot-mel/Video_1_MEL_CAMERA_NEW_v2.mp4",
              "tipoMidia": "video/mp4",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "pdf": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/PDF-bot-mel/%5BDESCONTINUADO%5D+MB_CartilhaMel_Conta+Corrente.pdf",
              "tipoMidia": "pdf",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "imagem": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/imagens-bot-mel/MB_Mel_Orientacoes-Copia-de-Contrato_2021_1080x1080px-Final.jpg",
              "tipoMidia": "image/jpg",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          }
        },
        "tempo": {
          "video": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/videos-bot-mel/Video_1_MEL_CAMERA_NEW_v2.mp4",
              "tipoMidia": "video/mp4",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "pdf": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/PDF-bot-mel/%5BDESCONTINUADO%5D+MB_CartilhaMel_Conta+Corrente.pdf",
              "tipoMidia": "pdf",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          },
          "imagem": {
            "body": {
              "statusCode": 400,
              "url": "https://altuclients.s3.sa-east-1.amazonaws.com/mercantil/imagens-bot-mel/MB_Mel_Orientacoes-Copia-de-Contrato_2021_1080x1080px-Final.jpg",
              "tipoMidia": "image/jpg",
              "tamanhoMidia": "10.9 MB",
              "tempoMidia": "7.9 segundos",
              "key": "tamanhoLimiteExcedido",
            }
          }
        }
      }
    },
    "api_palavra_chave": {
      "200": {
        "body": {
          "response": {
            "numeroOperacao": 570000126,
            "palavraChave": "mabeco"
          },
          "statusCode": 200
        }
      },
      "400": {},
      "code": 400
    },
    "api_proposta_credito": {
      "200": {
        "body": {
          "numeroOperacao": 570000332,
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "key": "ProspectNaoEncontrada",
          "statusCode": 400
        },
        "code": 400
      }
    },
    "api_atualizar_enderecos": {
      "400": {
        "body": {
          "statusCode": 400,
          "key": "ProspectNaoEncontrada"
        }
      },
      "200": {
        "body": {
          "response": "Informações de endereço atualizadas com sucesso.",
          "statusCode": 200
        },
      }
    },
    "api_buscaCliente": {
      "200": {
        "cliente": {
          "beneficiario": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": true
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [],
                "correntista": false,
                "beneficiario": true,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": true,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": true
              },
              "statusCode": 200
            },
            "code": 200
          },
          "correntistaBeneficiario": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": false
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [
                  {
                    "numero": 1837456051,
                    "dataUltimoPagamento": "",
                    "dataProximoPagamento": "07/10/2022",
                    "descricaoStatusUltimoPagamento": "PREVISTO",
                    "descricaoStatusProximoPagamento": "PREVISTO",
                    "valorUltimoPagamento": 2832,
                    "descricaoEspecieBeneficio": "APOSENTADORIA POR TEMPO DE CONTRIBUICAO",
                    "dataVencimentoProvaVida": "31/12/2023"
                  }
                ],
                "correntista": true,
                "beneficiario": true,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": false,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": false
              },
              "statusCode": 200
            },
            "code": 200
          },
          "correntista": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": false
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [],
                "correntista": true,
                "beneficiario": false,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": false,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": false
              },
              "statusCode": 200
            },
            "code": 200
          },
          "contaParalisa": {
            "body": {
              "body": {
                "nome": "Steve Jobs",
                "sexo": "Masculino",
                "menus": [
                  {
                    "nome": "Empréstimo FGTS",
                    "codigo": 1,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                    "codigo": 2,
                    "habilitado": true
                  },
                  {
                    "nome": "Renovação de Empréstimo Consignado",
                    "codigo": 3,
                    "habilitado": true
                  },
                  {
                    "nome": "Empréstimo Saque Cartão Consignado",
                    "codigo": 4,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Pessoal",
                    "codigo": 5,
                    "habilitado": false
                  },
                  {
                    "nome": "Empréstimo Consignado",
                    "codigo": 6,
                    "habilitado": false
                  }
                ],
                "nomeMae": "Lea Maria Cancado Lemos",
                "clienteMB": true,
                "beneficios": [],
                "correntista": false,
                "beneficiario": false,
                "qtdBeneficios": 0,
                "dataNascimento": "05/02/1981",
                "telefoneValido": false,
                "pessoaVulneravel": false,
                "numeroReferencial": 3721968,
                "possuiDataPrevista": false,
                "telefoneQualificado": null,
                "listaBeneficiosFiltrada": "",
                "indicadorPossuiPropostaCP": false
              },
              "statusCode": 200
            },
            "code": 200
          }
        },
        "naoCliente": {
          "body": {
            "body": {
              "nome": "Sabrina Germano Silva De Araujo",
              "sexo": "Feminino",
              "menus": [
                {
                  "nome": "Empréstimo FGTS",
                  "codigo": 1,
                  "habilitado": true
                },
                {
                  "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
                  "codigo": 2,
                  "habilitado": true
                },
                {
                  "nome": "Renovação de Empréstimo Consignado",
                  "codigo": 3,
                  "habilitado": true
                },
                {
                  "nome": "Empréstimo Saque Cartão Consignado",
                  "codigo": 4,
                  "habilitado": false
                },
                {
                  "nome": "Empréstimo Pessoal",
                  "codigo": 5,
                  "habilitado": false
                },
                {
                  "nome": "Empréstimo Consignado",
                  "codigo": 6,
                  "habilitado": false
                }
              ],
              "nomeMae": "ZELIA LUCAS DA SILVA",
              "clienteMB": false,
              "beneficios": [],
              "correntista": false,
              "beneficiario": false,
              "dataNascimento": "1995-06-26T00:00:00",
              "pessoaVulneravel": false,
              "numeroReferencial": 13637477,
              "telefoneQualificado": null,
              "indicadorPossuiPropostaCP": true
            },
            "statusCode": 404
          },
          "code": 200
        }
      },
      "400": {
        "code": 400,
        "body": {
          "nome": "Amadeu Marcio Correia Barroso",
          "sexo": "Masculino",
          "menus": [
            {
              "nome": "Empréstimo FGTS",
              "codigo": 1,
              "habilitado": true
            },
            {
              "nome": "Empréstimo Crédito Pessoal Abertura de Contas",
              "codigo": 2,
              "habilitado": true
            },
            {
              "nome": "Renovação de Empréstimo Consignado",
              "codigo": 3,
              "habilitado": true
            },
            {
              "nome": "Empréstimo Saque Cartão Consignado",
              "codigo": 4,
              "habilitado": false
            },
            {
              "nome": "Empréstimo Pessoal",
              "codigo": 5,
              "habilitado": false
            },
            {
              "nome": "Empréstimo Consignado",
              "codigo": 6,
              "habilitado": false
            }
          ],
          "nomeMae": "Lea Maria Cancado Lemos",
          "clienteMB": false,
          "beneficios": [],
          "correntista": false,
          "beneficiario": false,
          "qtdBeneficios": 0,
          "dataNascimento": "05/02/1981",
          "telefoneValido": false,
          "pessoaVulneravel": false,
          "numeroReferencial": 3721968,
          "possuiDataPrevista": false,
          "telefoneQualificado": null,
          "listaBeneficiosFiltrada": "",
          "indicadorPossuiPropostaCP": false
        },
        "statusCode": 400
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Busca Cliente"
        }
      }
    },
    "api_simulacao_renovacao": {
      "200": {
        "body": {
          "statusCode": 200,
          "response": {
            "valorLiquidado": "24.626,43",
            "valorTroco": "2.206,45",
            "valorLimitePreAprovadoProduto": "26.832,88",
            "quantidadeParcela": 84,
            "valorParcela": "691,70",
            "contratosRenovados": [
              {
                "numeroContrato": 803824515
              },
              {
                "numeroContrato": 804037916
              }
            ],
            "descricaoEspecieBeneficio": "Pensao Por Morte",
            "valorMinimoParcelas": 78,
            "valorMaximoParcelas": 84,
            "valorMaximoTroco": "2.206,45",
            "valorMinimoTroco": "150,00",
            "contratosRenovadosFormatados": "803824515, 804037916"
          }
        },
        "code": 200
      },
      "400": {
        "ClienteSemProdutos": {
          "body": {
            "key": "ClienteSemProdutos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteNaoPossuiContratoMinimoQuitacao": {
          "body": {
            "key": "ClienteNaoPossuiContratoMinimoQuitacao",
            "statusCode": 400
          },
          "code": 400
        },
        "NaoExisteContratosAptos": {
          "body": {
            "key": "NaoExisteContratosAptos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteRenovacaoAndamento": {
          "body": {
            "key": "ClienteRenovacaoAndamento",
            "statusCode": 400
          },
          "code": 400
        },
        "ChaveNaoMapeada": {
          "body": {
            "key": "ChaveNaoMapeada",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_obter_contratos_aptos_renovar": {
      "200": {
        "body": {
          "response": "",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ClienteSemProdutos": {
          "body": {
            "key": "ClienteSemProdutos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteNaoPossuiContratoMinimoQuitacao": {
          "body": {
            "key": "ClienteNaoPossuiContratoMinimoQuitacao",
            "statusCode": 400
          },
          "code": 400
        },
        "NaoExisteContratosAptos": {
          "body": {
            "key": "NaoExisteContratosAptos",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteRenovacaoAndamento": {
          "body": {
            "key": "ClienteRenovacaoAndamento",
            "statusCode": 400
          },
          "code": 400
        },
        "ChaveNaoMapeada": {
          "body": {
            "key": "ChaveNaoMapeada",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_obter_token_IN100": {
      "200": {
        "body": {
          "response": {
            "statusCode": 200,
            "response": "Token obtido com sucesso."
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "statusCode": 400,
          "key": "NaoPossuiAutorizacaoConsultaIN100"
        },
        "code": 400
      }
    },
    "api_consultar_IN100": {
      "200": {
        "body": {
          "response": {
            "statusCode": 200,
            "response": "Consulta IN100 realizada com sucesso."
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "error": "Missing param: Faltando parâmetros obrigatórios"
        },
        "code": 400
      }
    },
    "api_palavra_chave": {
      "200": {
        "body": {
          "response": {
            "palavraChave": "mabeco",
            "numeroOperacao": 570000126
          },
          "statusCode": 200
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possivel executar a função Palavra Chave",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_pix_randomico": {
      "200": {
        "body": {
          "response": {
            "id": "f214ca66-0ab7-4415-8b36-cfd641e4237d",
            "conta": {
              "cliente": {
                "nome": "Sabrina",
                "telefone": {
                  "ddd": 31,
                  "numero": 999838894
                }
              },
              "tipoConta": "ContaCorrente",
              "codigoBanco": "33",
              "digitoConta": "6",
              "numeroConta": "343232",
              "digitoAgencia": "",
              "numeroAgencia": "1"
            },
            "enviadoEm": "2022-09-19T18:12:11.8518399-03:00"
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ClienteBloqueadoPorLimiteRetentativa": {
          "body": {
            "key": "ClienteBloqueadoPorLimiteRetentativa",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Pix Randômico",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_gerar_prospect": {
      "200": {
        "body": {
          "cliente": {
            "nome": "Sabrina Germano Silva De Araujo",
            "sexo": null,
            "email": null,
            "nomeMae": null,
            "telefone": {
              "ddd": 31,
              "numero": 987654321
            },
            "valorRenda": null,
            "estadoCivil": null,
            "nomeConjuge": null,
            "classificacao": 1,
            "dataNascimento": "26/06/1995",
            "naturalidadeId": null,
            "numeroReferencialIpc": 13637477
          },
          "prospectId": "5a6b3328-9cf7-4aba-a7c0-cd22dc8e21dd",
          "statusCode": 200
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Gerar Prospect",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_simulacao_fgts": {
      "200": {
        "com_taxa": {
          "body": {
            "response": {
              "parcelas": [
                {
                  "valor": 7825.76,
                  "numero": 1,
                  "valorIof": 147.85,
                  "valorJuros": 1419.07,
                  "valorTotal": 9244.83,
                  "dataVencimento": "2022-04-01T00:00:00",
                  "percentualJuros": 15.34
                },
                {
                  "valor": 8317.02,
                  "numero": 2,
                  "valorIof": 371,
                  "valorJuros": 2127.82,
                  "valorTotal": 10444.84,
                  "dataVencimento": "2023-04-01T00:00:00",
                  "percentualJuros": 20.37
                }
              ],
              "valorIof": 518.85,
              "valorTac": 0,
              "valorTarifa": 60,
              "taxaJurosAno": 25.19,
              "taxaJurosMes": 1.89,
              "dataMovimento": "2021-11-17T00:00:00",
              "taxaEfetivaAno": 30.3,
              "taxaEfetivaMes": 2.23,
              "valorSaldoFgts": 19689.67,
              "valorEmprestimo": 15623.93,
              "valorFinanciado": 16142.78,
              "valorMaximoParcela": 10444.84,
              "diaVencimentoParcela": 1,
              "dataPrimeiroVencimento": "2022-04-01T00:00:00"
            },
            "formatado": {
              "parcelas": [
                {
                  "valor": "R$ 7.825,76",
                  "valorTotal": "R$ 9.244,83",
                  "dataVencimento": "01/04/2022"
                },
                {
                  "valor": "R$ 8.317,02",
                  "valorTotal": "R$ 10.444,84",
                  "dataVencimento": "01/04/2023"
                }
              ],
              "valorIof": "R$ 518,85",
              "valorTarifa": "R$ 60,00",
              "taxaJurosAno": "25.19",
              "taxaJurosMes": "1.89",
              "dataMovimento": "17/11/2021",
              "listaParcelas": "1º Saque: *R$ 9.244,83* - Data: *01/04/2022*\n2º Saque: *R$ 10.444,84* - Data: *01/04/2023*\n",
              "taxaEfetivaAno": "30.30",
              "taxaEfetivaMes": "2.23",
              "valorSaldoFgts": "R$ 19.689,67",
              "valorEmprestimo": "R$ 15.623,93",
              "valorFinanciado": "R$ 16.142,78",
              "valorMaximoParcela": "R$ 10.444,84",
              "dataPrimeiroVencimento": "01/04/2022"
            },
            "statusCode": 200
          },
          "code": 200
        },
        "sem_taxa": {
          "body": {
            "response": {
              "parcelas": [
                {
                  "valor": 7825.76,
                  "numero": 1,
                  "valorIof": 147.85,
                  "valorJuros": 1419.07,
                  "valorTotal": 9244.83,
                  "dataVencimento": "2022-04-01T00:00:00",
                  "percentualJuros": 15.34
                },
                {
                  "valor": 8317.02,
                  "numero": 2,
                  "valorIof": 371,
                  "valorJuros": 2127.82,
                  "valorTotal": 10444.84,
                  "dataVencimento": "2023-04-01T00:00:00",
                  "percentualJuros": 20.37
                }
              ],
              "valorIof": 518.85,
              "valorTac": 0,
              "valorTarifa": 0,
              "taxaJurosAno": 25.19,
              "taxaJurosMes": 1.89,
              "dataMovimento": "2021-11-17T00:00:00",
              "taxaEfetivaAno": 30.3,
              "taxaEfetivaMes": 2.23,
              "valorSaldoFgts": 19689.67,
              "valorEmprestimo": 15623.93,
              "valorFinanciado": 16142.78,
              "valorMaximoParcela": 10444.84,
              "diaVencimentoParcela": 1,
              "dataPrimeiroVencimento": "2022-04-01T00:00:00"
            },
            "formatado": {
              "parcelas": [
                {
                  "valor": "R$ 7.825,76",
                  "valorTotal": "R$ 9.244,83",
                  "dataVencimento": "01/04/2022"
                },
                {
                  "valor": "R$ 8.317,02",
                  "valorTotal": "R$ 10.444,84",
                  "dataVencimento": "01/04/2023"
                }
              ],
              "valorIof": "R$ 518,85",
              "valorTarifa": "R$ 0,00",
              "taxaJurosAno": "25.19",
              "taxaJurosMes": "1.89",
              "dataMovimento": "17/11/2021",
              "listaParcelas": "1º Saque: *R$ 9.244,83* - Data: *01/04/2022*\n2º Saque: *R$ 10.444,84* - Data: *01/04/2023*\n",
              "taxaEfetivaAno": "30.30",
              "taxaEfetivaMes": "2.23",
              "valorSaldoFgts": "R$ 19.689,67",
              "valorEmprestimo": "R$ 15.623,93",
              "valorFinanciado": "R$ 16.142,78",
              "valorMaximoParcela": "R$ 10.444,84",
              "dataPrimeiroVencimento": "01/04/2022"
            },
            "statusCode": 200
          },
          "code": 200
        }
      },
      "400": {
        "ErroInterno": {
          "body": {
            "key": "ErroInterno",
            "statusCode": 400
          },
          "code": 400
        },
        "OperacaoNaoAutorizada": {
          "body": {
            "key": "OperacaoNaoAutorizada",
            "statusCode": 400
          },
          "code": 400
        },
        "SaqueAniversarioNaoAderido": {
          "body": {
            "key": "SaqueAniversarioNaoAderido",
            "statusCode": 400
          },
          "code": 400
        },
        "ValorEmprestimoMenorMinimo": {
          "body": {
            "key": "ValorEmprestimoMenorMinimo",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Simulação FGTS",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_receita_federal": {
      "200": {
        "body": {
          "body": {
            "nome": "Amadeu Marcio Correia Barroso",
            "sexo": "Feminino",
            "obito": false,
            "nomeMae": "Lea Maria Cancado Lemos",
            "dataNascimento": "21/05/1996",
            "situacaoCadastral": "REGULAR",
            "numeroReferencialIpc": 10688865
          },
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ClienteTelefoneRestrito": {
          "body": {
            "key": "ClienteTelefoneRestrito",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_gravar_proposta_FGTS": {
      "200": {
        "body": {
          "statusCode": 200,
          "numeroOperacao": 570000124
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possivel executar a função Gravar Proposta FGTS",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_validar_pix_randomico": {
      "200": {
        "body": {
          "response": "",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "ValorIncorreto": {
          "body": {
            "key": "ValorIncorreto",
            "statusCode": 400
          },
          "code": 400
        },
        "ClienteBloqueadoPorLimiteRetentativa": {
          "body": {
            "key": "ClienteBloqueadoPorLimiteRetentativa",
            "statusCode": 400
          },
          "code": 400
        }
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Validar Pix Randômico.",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_atualizar_prospect_FGTS": {
      "200": {
        "body": {
          "response": "Informações do Prospect atualizadas com sucesso",
          "statusCode": 200
        },
        "code": 200
      },
      "500": {
        "body": {
          "message": "Não foi possível executar a função Atualizar Prospect FGTS",
          "statusCode": 500
        },
        "code": 500
      }
    },
    "api_finalizar_proposta_operacao": {
      "200": {
        "body": {
          "response": "Proposta de número operação 570000340 finalizada com sucesso.",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "PropostaJaFoiInicializada": {
          "body": {
            "key": "PropostaJaFoiInicializada",
            "statusCode": 400
          },
          "code": 400
        }
      }
    },
    "api_pesquisar_localidade": {
      "200": {
        "body": {
          "statusCode": 200,
          "localidade": [
            {
              "cidade": "Rio de Janeiro",
              "uf": "RJ"
            }
          ],
        },
        "code": 200
      },
      "400": {
        "body": {
          "key": "EnderecoNaoLocalizado",
          "statusCode": 400
        },
        "code": 400
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Pesquisar Localidade"
        }
      }
    },
    "api_consulta_status_proposta_FGTS": {
      "200": {
        "com_proposta_ativa": {
          "body": {
            "response": [
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "teste@teste.com",
                  "dddCelular": 31,
                  "valorRenda": 1100,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 226.04,
                "valorTac": 0,
                "taxaCetAno": 26.38,
                "taxaCetMes": 1.97,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 5103.08,
                "valorLiberado": 0,
                "numeroOperacao": 570000276,
                "dataBaseCalculo": "2022-03-18T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 6491.48,
                "valorFinanciado": 6717.52,
                "quantidadeParcelas": 7,
                "dataUltimoVencimento": "2028-11-01T00:00:00",
                "dataHoraInicioConversa": "2022-03-23T11:13:25.727",
                "dataPrimeiroVencimento": "2022-11-01T00:00:00"
              },
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "chris_patricia86@hotmail.com",
                  "dddCelular": 31,
                  "valorRenda": 1100,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 275.02,
                "valorTac": 0,
                "taxaCetAno": 27.87,
                "taxaCetMes": 2.07,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 2868.1,
                "valorLiberado": 0,
                "numeroOperacao": 570000111,
                "dataBaseCalculo": "2021-11-26T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 5890.41,
                "valorFinanciado": 6165.43,
                "quantidadeParcelas": 4,
                "dataUltimoVencimento": "2026-01-01T00:00:00",
                "dataHoraInicioConversa": "2021-11-30T14:22:34.217",
                "dataPrimeiroVencimento": "2023-01-01T00:00:00"
              },
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "teste@teste.com",
                  "dddCelular": 31,
                  "valorRenda": 1100,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 226.04,
                "valorTac": 0,
                "taxaCetAno": 26.38,
                "taxaCetMes": 1.97,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 5103.08,
                "valorLiberado": 0,
                "numeroOperacao": 570000275,
                "dataBaseCalculo": "2022-03-18T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 6491.48,
                "valorFinanciado": 6717.52,
                "quantidadeParcelas": 7,
                "dataUltimoVencimento": "2028-11-01T00:00:00",
                "dataHoraInicioConversa": "2022-03-23T11:13:25.727",
                "dataPrimeiroVencimento": "2022-11-01T00:00:00"
              },
              {
                "status": "Cancelada",
                "cliente": {
                  "nome": "Amadeu Marcio Correia Barroso",
                  "email": "teste@teste.com",
                  "dddCelular": 31,
                  "valorRenda": 2200,
                  "classificacao": "Novo",
                  "numeroCelular": 993323733,
                  "numeroBeneficio": null
                },
                "valorIof": 226.04,
                "valorTac": 0,
                "taxaCetAno": 26.38,
                "taxaCetMes": 1.97,
                "taxaJurosAno": 25.19,
                "taxaJurosMes": 1.89,
                "valorParcela": 5103.08,
                "valorLiberado": 0,
                "numeroOperacao": 570000278,
                "dataBaseCalculo": "2022-03-18T00:00:00",
                "descricaoStatus": "Reprovada",
                "valorEmprestimo": 6491.48,
                "valorFinanciado": 6717.52,
                "quantidadeParcelas": 7,
                "dataUltimoVencimento": "2028-11-01T00:00:00",
                "dataHoraInicioConversa": "2022-03-23T13:54:47.19",
                "dataPrimeiroVencimento": "2022-11-01T00:00:00"
              }
            ],
            "statusCode": 200,
            "listaProposta": "*1 - Nº Proposta:* 570000276 | *Data:* 18/03/2022 | *Status:* Reprovada\n\n*2 - Nº Proposta:* 570000111 | *Data:* 26/11/2021 | *Status:* Reprovada\n\n*3 - Nº Proposta:* 570000275 | *Data:* 18/03/2022 | *Status:* Reprovada\n\n*4 - Nº Proposta:* 570000278 | *Data:* 18/03/2022 | *Status:* Reprovada\n\n",
            "propostaAtiva": true
          },
          "code": 200
        },
        "sem_proposta_ativa": {
          "body": {
            "response": [],
            "statusCode": 200,
            "propostaAtiva": false
          },
          "code": 200
        }
      },
      "400": {
        "body": {
          "response": [],
          "statusCode": 400,
          "propostaAtiva": false
        },
        "code": 400
      }
    },
    "api_politicas_de_restricoes": {
      "200": {
        "code": 200,
        "body": {
          "statusCode": 200,
          "response": "OK"
        }
      },
      "400": {
        "IdadeNaoQualificada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "IdadeNaoQualificada"
          }
        },
        "PossuiPropostaAberturaContaReprovada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaAberturaContaReprovada"
          }
        },
        "PossuiPropostaAberturaContaEmAndamento": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaAberturaContaEmAndamento"
          }
        },
        "PossuiPropostaCpEmAndamento": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaCpEmAndamento",
            "message": "O cliente possui proposta de crédito pessoal em andamento."
          }
        },
        "PossuiContaAtiva": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiContaAtiva"
          }
        },
        "PossuiPropostaAberturaContaIntegrada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PossuiPropostaAberturaContaIntegrada"
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Politicas De Restrições.",
        }
      }
    },
    "api_atualizar_dados_complementares": {
      "200": {
        "body": {
          "response": "Informações de Dados Complementares atualizadas com sucesso.",
          "statusCode": 200
        },
        "code": 200
      },
      "400": {
        "body": {
          "key": "ProspectNaoEncontrada",
          "statusCode": 400
        },
        "code": 400
      }
    },
    "api_consultar_propostas": {
      "200": {
        "CreditoPessoal": {
          "EmAndamento": {
            "ContaDigital": {
              "code": 200,
              "body": {
                "statusCode": 200,
                "response": [
                  {
                    "status": "EmAndamento",
                    "cliente": {
                      "nome": "Steve Jobs",
                      "email": null,
                      "dddCelular": 99,
                      "valorRenda": null,
                      "classificacao": "Novo",
                      "numeroCelular": 999999999,
                      "numeroBeneficio": 1967103795
                    },
                    "valorIof": 212.85,
                    "valorTac": 0,
                    "taxaCetAno": 29.69,
                    "taxaCetMes": 2.19,
                    "taxaJurosAno": 28.32,
                    "taxaJurosMes": 2.1,
                    "contaBancaria": {
                      "conta": "1036315",
                      "agencia": 327,
                      "contaDigito": 5,
                      "tipoContaBancaria": "Corrente",
                      "tipoOriginacaoConta": "ContaDigital"
                    },
                    "valorLiberado": 0,
                    "numeroOperacao": 570951319,
                    "dataBaseCalculo": "14/09/2022",
                    "descricaoStatus": "Em Andamento",
                    "valorEmprestimo": 7415,
                    "valorFinanciado": 7627.85,
                    "modalidadeCredito": "CreditoPessoal",
                    "quantidadeParcelas": 84,
                    "dataHoraInicioConversa": "14/09/2022",
                    "mensagemAmigavelCliente": "[FRASEOLOGIA API] Mensagem amigável cliente",
                    "modalidadeCreditoDescricao": "Crédito Pessoal"
                  }
                ]
              }
            },
            "Conta09": {}
          },
          "Integrada": {
            "ContaDigital": {
              "code": 200,
              "body": {
                "statusCode": 200,
                "response": [
                  {
                    "status": "Integrada",
                    "cliente": {
                      "nome": "Steve Jobs",
                      "email": null,
                      "dddCelular": 99,
                      "valorRenda": null,
                      "classificacao": "Novo",
                      "numeroCelular": 999999999,
                      "numeroBeneficio": 1967103795
                    },
                    "valorIof": 212.85,
                    "valorTac": 0,
                    "taxaCetAno": 29.69,
                    "taxaCetMes": 2.19,
                    "taxaJurosAno": 28.32,
                    "taxaJurosMes": 2.1,
                    "contaBancaria": {
                      "conta": "1036315",
                      "agencia": 327,
                      "contaDigito": 5,
                      "tipoContaBancaria": "Corrente",
                      "tipoOriginacaoConta": "ContaDigital"
                    },
                    "valorLiberado": 0,
                    "numeroOperacao": 570951319,
                    "dataBaseCalculo": "14/09/2022",
                    "descricaoStatus": "Aprovada",
                    "valorEmprestimo": 7415,
                    "valorFinanciado": 7627.85,
                    "modalidadeCredito": "CreditoPessoal",
                    "quantidadeParcelas": 84,
                    "dataHoraInicioConversa": "14/09/2022",
                    "mensagemAmigavelCliente": null,
                    "modalidadeCreditoDescricao": "Renovação"
                  }
                ]
              }
            },
            "Conta09": {}
          },
          "Cancelada": {
            "ContaDigital": {
              "code": 200,
              "body": {
                "statusCode": 200,
                "response": [
                  {
                    "status": "Cancelada",
                    "cliente": {
                      "nome": "Steve Jobs",
                      "email": null,
                      "dddCelular": 99,
                      "valorRenda": null,
                      "classificacao": "Novo",
                      "numeroCelular": 999999999,
                      "numeroBeneficio": 1967103795
                    },
                    "valorIof": 212.85,
                    "valorTac": 0,
                    "taxaCetAno": 29.69,
                    "taxaCetMes": 2.19,
                    "taxaJurosAno": 28.32,
                    "taxaJurosMes": 2.1,
                    "contaBancaria": {
                      "conta": "1036315",
                      "agencia": 327,
                      "contaDigito": 5,
                      "tipoContaBancaria": "Corrente",
                      "tipoOriginacaoConta": "ContaDigital"
                    },
                    "valorLiberado": 0,
                    "numeroOperacao": 570951319,
                    "dataBaseCalculo": "14/09/2022",
                    "descricaoStatus": "Aprovada",
                    "valorEmprestimo": 7415,
                    "valorFinanciado": 7627.85,
                    "modalidadeCredito": "CreditoPessoal",
                    "quantidadeParcelas": 84,
                    "dataHoraInicioConversa": "14/09/2022",
                    "mensagemAmigavelCliente": null,
                    "modalidadeCreditoDescricao": "Renovação"
                  }
                ]
              }
            },
            "Conta09": {}
          }
        },
        "AberturaConta": {
          "Integrada": {
            "code": 200,
            "body": {
              "statusCode": 200,
              "response": [
                {
                  "status": "Integrada",
                  "cliente": {
                    "nome": "Steve Jobs",
                    "email": null,
                    "dddCelular": 99,
                    "valorRenda": null,
                    "classificacao": "Novo",
                    "numeroCelular": 999999999
                  },
                  "contaBancaria": {
                    "conta": "1036315",
                    "agencia": 327,
                    "contaDigito": 5,
                    "tipoContaBancaria": "Corrente",
                    "tipoOriginacaoConta": "ContaDigital"
                  },
                  "numeroOperacao": 570951319,
                  "descricaoStatus": "Aprovada",
                  "modalidadeCredito": "AberturaConta",
                  "modalidadeCreditoDescricao": "Abertura de conta",
                  "dataHoraInicioConversa": "14/09/2022"
                }
              ]
            }
          },
          "Cancelada": {
            "code": 200,
            "body": {
              "statusCode": 200,
              "response": [
                {
                  "status": "Cancelada",
                  "cliente": {
                    "nome": "Steve Jobs",
                    "email": null,
                    "dddCelular": 99,
                    "valorRenda": null,
                    "classificacao": "Novo",
                    "numeroCelular": 999999999
                  },
                  "contaBancaria": null,
                  "numeroOperacao": 570951319,
                  "descricaoStatus": "Reprovada",
                  "modalidadeCredito": "AberturaConta",
                  "modalidadeCreditoDescricao": "Abertura de conta",
                  "dataHoraInicioConversa": "14/09/2022"
                }
              ]
            }
          },
          "EmAndamento": {
            "code": 200,
            "body": {
              "statusCode": 200,
              "response": [
                {
                  "status": "EmAndamento",
                  "cliente": {
                    "nome": "Steve Jobs",
                    "email": null,
                    "dddCelular": 99,
                    "valorRenda": null,
                    "classificacao": "Novo",
                    "numeroCelular": 999999999
                  },
                  "contaBancaria": null,
                  "numeroOperacao": 570951319,
                  "descricaoStatus": "Em Andamento",
                  "modalidadeCredito": "AberturaConta",
                  "modalidadeCreditoDescricao": "Abertura de conta",
                  "dataHoraInicioConversa": "14/09/2022",
                  "mensagemAmigavelCliente": "Essa fraseologia vem da API do cliente.",
                }
              ]
            }
          }
        }
      },
      "400": {
        "PropostaNaoEncontrada": {
          "code": 400,
          "body": {
            "statusCode": 400,
            "key": "PropostaNaoEncontrada"
          }
        }
      },
      "500": {
        "code": 500,
        "body": {
          "statusCode": 500,
          "message": "Não foi possível executar a função Consultar Propostas"
        }
      }
    }
  }
}

module.exports = custom_mock_apis;
