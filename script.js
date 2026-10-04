const candidatos = {
  lula: {
    nome: "Lula (PT)",
    foto: "imagens/Foto_oficial_de_Luiz_Inácio_Lula_da_Silva_(ombros)_denoise.jpg",
    areas: [
      {
        titulo: "Trabalho e economia",
        propostas: [
          "Aprovar o fim da escala 6x1 e reduzir a jornada para 40 horas semanais, sem redução de salário",
          "Manter a valorização do salário mínimo acima da inflação, conter a pejotização e retomar a assistência sindical nas homologações",
          "Criar regras para trabalhadores de aplicativos: relação de trabalho, remuneração, direitos trabalhistas e previdenciários e transparência dos algoritmos",
          "Ampliar crédito, qualificação, assistência técnica e simplificação tributária para autônomos e pequenos empreendedores",
          "Seguir uma política econômica voltada ao crescimento, com queda dos juros, inflação controlada e aumento da taxa de investimento"
        ]
      },
      {
        titulo: "Impostos e contas públicas",
        propostas: [
          "Consolidar a isenção do Imposto de Renda para salários de até R$ 5.000, compensada pela taxação de super-ricos, fundos exclusivos e offshores",
          "Isentar de impostos a cesta básica",
          "Manter o arcabouço fiscal, controlar o crescimento do gasto primário e melhorar a qualidade do gasto público",
          "Ampliar a participação social na elaboração do Orçamento e tornar o PPA 2028–2031 mais participativo",
          "Abrir um debate sobre o funcionamento das emendas parlamentares"
        ]
      },
      {
        titulo: "Segurança pública",
        propostas: [
          "Criar o Ministério da Segurança Pública, caso a PEC da Segurança Pública seja aprovada",
          "Fortalecer o Programa Brasil Contra o Crime Organizado, com ações contra tráfico de armas, milícias e asfixia financeira do crime",
          "Manter o controle de armas e munições e reforçar a fiscalização da Polícia Federal e do Exército",
          "Ampliar o uso de câmeras corporais, com padrão nacional para guarda das imagens",
          "Ampliar as penitenciárias federais e criar um protocolo nacional para transferência de presos de alta periculosidade"
        ]
      },
      {
        titulo: "Educação",
        propostas: [
          "Alcançar 80% das crianças alfabetizadas na idade certa",
          "Ampliar a educação em tempo integral, universalizar a internet nas escolas e manter o Pé de Meia",
          "Continuar expandindo os institutos federais, priorizando o interior, as periferias e municípios com pouca oferta de cursos técnicos"
        ]
      },
      {
        titulo: "Saúde e assistência social",
        propostas: [
          "Ampliar o Farmácia Popular, incluindo exames laboratoriais e diagnóstico de diabetes e hipertensão",
          "Ampliar teleconsultas, consolidar o prontuário único do cidadão e permitir marcar consultas e ver exames pelo celular",
          "Usar inteligência artificial para triagem, priorização de casos graves e diagnóstico onde faltam especialistas",
          "Manter o Mais Médicos e apoiar os municípios na saúde bucal",
          "Ampliar a Política Nacional de Cuidados (Cuidotecas, lavanderias públicas, cozinhas solidárias, restaurantes populares) e criar capacitação de cuidadores",
          "Dar escala nacional ao Programa de Atenção Domiciliar ao Idoso (PADI Brasil)"
        ]
      },
      {
        titulo: "Meio ambiente e alimentação",
        propostas: [
          "Zerar o desmatamento ilegal em todos os biomas até 2030",
          "Investir em segurança hídrica, prevenção de desastres e adaptação climática",
          "Manter o crédito para a agricultura familiar e apoiar o cumprimento de 45% de compras da agricultura familiar na alimentação escolar"
        ]
      },
      {
        titulo: "Indústria, tecnologia e infraestrutura",
        propostas: [
          "Fortalecer a neoindustrialização, com foco em inovação, inteligência artificial e minerais críticos",
          "Manter o ritmo das concessões rodoviárias, intensificar projetos ferroviários e continuar o Novo PAC",
          "Criar uma Política Nacional de Letramento Digital e o Conselho Nacional pela Soberania Digital, para discutir a regulação de plataformas e redes sociais"
        ]
      },
      {
        titulo: "Política externa e defesa",
        propostas: [
          "Aprofundar o Mercosul e a integração da América do Sul, criar um mercado comum sul-americano de energia e negociar novos acordos comerciais",
          "Proteger as fronteiras e fortalecer a Base Industrial e Tecnológica de Defesa"
        ]
      }
    ]
  },

  renan: {
    nome: "Renan Santos (Missão)",
    foto: "imagens/Renan_Santos_-_Congresso_do_Partido_Missão,_2026_(cropped).jpg",
    areas: [
      {
        titulo: "Economia e contas públicas",
        propostas: [
          "Fazer um amplo ajuste fiscal logo no início do mandato e substituir o arcabouço fiscal por um novo regime de controle de despesas, via PEC",
          "Acabar com os supersalários, mudar as emendas parlamentares e reduzir benefícios tributários",
          "Desvincular os pisos de saúde e educação da arrecadação e desindexar benefícios previdenciários e assistenciais do salário mínimo",
          "Estimar uma economia de mais de R$ 1 trilhão até 2031 com essas medidas",
          "Priorizar o aumento da produtividade, com reformas regulatórias, tributárias, trabalhistas e financeiras",
          "Rejeitar 'privatizar tudo', mantendo forte atuação do Estado em infraestrutura, segurança e tecnologia"
        ]
      },
      {
        titulo: "Assistência social",
        propostas: [
          "Substituir o Bolsa Família, para pessoas em idade de trabalhar, pelas 'Frentes Cidadãs', em que o beneficiário recebe em troca de atividades comunitárias"
        ]
      },
      {
        titulo: "Infraestrutura e desenvolvimento",
        propostas: [
          "Dobrar os investimentos em infraestrutura, de cerca de 2% para pelo menos 4% do PIB, com ferrovias, rodovias, portos, aeroportos e energia",
          "Criar Zonas Econômicas Especiais, sobretudo no Norte e no Nordeste",
          "Apostar em setores estratégicos como terras raras, inteligência artificial, tecnologia e agronegócio de alta produtividade",
          "Criar o Marco Brasileiro da Inteligência Artificial, com menos impostos para empresas de tecnologia e incentivo a data centers, especialmente no Nordeste"
        ]
      },
      {
        titulo: "Estado e administração",
        propostas: [
          "Reduzir o número de municípios de 5.570 para 1.656",
          "Criar a Lei de Responsabilidade Gerencial, que avaliaria prefeitos por indicadores como educação, vacinação, saneamento e equilíbrio fiscal, com possível intervenção gradual da União em municípios mal avaliados",
          "Vincular os recursos dos partidos ao desempenho administrativo de seus eleitos",
          "Fundir os ministérios da Cultura e da Educação e mudar a Lei Rouanet, com tetos progressivos de captação"
        ]
      },
      {
        titulo: "Segurança pública",
        propostas: [
          "Aumentar o rigor das penas, confiscar bens de integrantes de facções, ampliar a cooperação internacional e federalizar os casos ligados a facções",
          "Usar a GLO e o Estado de Defesa para romper o controle territorial das facções",
          "Criar uma Lei Antifacção e construir unidades de segurança máxima em regiões remotas",
          "Estabelecer a presunção de origem ilícita de bens de integrantes de facções, cabendo ao dono provar que são legais",
          "Retomar o controle de portos, aeroportos e fronteiras secas com scanners 3D, inteligência integrada e monitoramento aéreo, espacial e amazônico"
        ]
      },
      {
        titulo: "Habitação",
        propostas: [
          "Transformar favelas em bairros urbanizados em até 30 anos, com cadastro fundiário nacional feito com drones e dados de cartórios",
          "Criar o crime de 'favelização', voltado a grileiros, milícias e quem organiza invasões e vende terrenos irregulares"
        ]
      },
      {
        titulo: "Educação",
        propostas: [
          "Implantar escolas cívico-militares como medida provisória em locais de alta criminalidade",
          "Acabar com as cotas"
        ]
      },
      {
        titulo: "Campo",
        propostas: [
          "Acabar com as invasões de propriedade rural e restaurar a segurança jurídica no campo"
        ]
      }
    ]
  },

  flavio: {
    nome: "Flávio Bolsonaro (PL)",
    foto: "imagens/Flávio_Bolsonaro.jpg",
    areas: [
      {
        titulo: "Segurança pública ('Brasil sem Medo')",
        propostas: [
          "Declarar PCC, CV, milícias e demais facções como organizações narcoterroristas, bloqueando seus ativos e combatendo a lavagem de dinheiro",
          "Reduzir a maioridade penal de 18 para 16 anos e punir também maiores de 14 anos que cometerem crimes graves, como estupro, tráfico, tortura e assassinato",
          "Criar o Sistema Nacional de Fronteira, uma tropa de elite das Forças Armadas para fronteiras secas, portos e aeroportos",
          "Construir cinco novos presídios de segurança máxima, que junto com os cinco federais atuais formariam o Complexo Federal de Segurança Máxima",
          "Aplicar castração química a condenados por estupro e abuso sexual de crianças",
          "Adotar 'tolerância zero' ao feminicídio, com monitoramento por tornozeleira dos agressores de mulheres com medida protetiva e cumprimento integral das penas",
          "Dobrar os investimentos federais em segurança pública ao longo do mandato",
          "Implantar a 'Muralha Brasileira', sistema nacional de reconhecimento facial integrado a bancos de dados criminais",
          "Redirecionar para as famílias das vítimas os recursos hoje destinados às famílias de detentos",
          "Acabar com a progressão de regime para crimes hediondos",
          "Endurecer as penas para roubo, furto e receptação de celulares, com pena inicial quadruplicada para quem furta ou revende, sem benefícios",
          "Usar tropas especiais da Marinha e da Aeronáutica para ocupar e monitorar portos e aeroportos contra o tráfico"
        ]
      },
      {
        titulo: "Gastos e Estado",
        propostas: [
          "Fazer um 'tesouraço' nos gastos públicos, com reforma administrativa que corte pelo menos dez ministérios, cargos comissionados e despesas administrativas",
          "Combater 'penduricalhos' e supersalários, revogar normas excessivas e profissionalizar as agências reguladoras",
          "Retomar o Programa Nacional de Desestatização, avaliando caso a caso as estatais, e fortalecer a Lei das Estatais",
          "Substituir as regras fiscais atuais por um mecanismo para estabilizar e depois reduzir a dívida pública, com superávits primários e limites para o crédito subsidiado"
        ]
      },
      {
        titulo: "Impostos",
        propostas: [
          "Revisar a reforma tributária, reduzindo a alíquota do IVA e as exceções, e ampliando a desoneração de exportações e investimentos",
          "Reduzir impostos sobre energia elétrica e combustíveis"
        ]
      },
      {
        titulo: "Trabalho e emprego",
        propostas: [
          "Reduzir gradualmente o custo de contratar, sem retirar direitos trabalhistas, com contratos mais baratos para jovens de 18 a 24 anos no primeiro emprego e para desempregados com 50 anos ou mais",
          "Adotar o princípio do 'negociado sobre o legislado'",
          "Usar o Bolsa Família como ponte para o emprego, com prioridade em programas de primeiro emprego e qualificação, e permitir o retorno imediato ao benefício após o seguro-desemprego",
          "Incentivar o empreendedorismo feminino com microcrédito"
        ]
      },
      {
        titulo: "Energia, agro e mineração",
        propostas: [
          "Reduzir gradualmente subsídios que encarecem a conta de luz e ampliar a infraestrutura de gás natural do pré-sal",
          "Criar os Corredores Logísticos Inteligentes, expandir o seguro rural e aumentar a capacidade de armazenamento de grãos",
          "Estimular a produção nacional de fertilizantes a partir de potássio e fosfato",
          "Acelerar licenciamentos de mineração e atrair investimento em lítio, nióbio, níquel, urânio e terras raras"
        ]
      },
      {
        titulo: "Comércio exterior",
        propostas: [
          "Ampliar acordos comerciais e negociar ao mesmo tempo com China, Estados Unidos, União Europeia e mercados asiáticos, sem alinhamento ideológico"
        ]
      },
      {
        titulo: "Instituições e tecnologia",
        propostas: [
          "Reformar o Judiciário e acabar com a reeleição presidencial",
          "Digitalizar serviços públicos para reduzir a burocracia",
          "Ampliar o uso de inteligência artificial nos serviços públicos"
        ]
      }
    ]
  },

  caiado: {
    nome: "Ronaldo Caiado (PSD)",
    foto: "imagens/Caiado.jpg",
    areas: [
      {
        titulo: "Segurança pública",
        propostas: [
          "Criar o Ministério da Segurança Pública e o Conselho Estratégico Nacional de Segurança Pública e Combate ao Terrorismo Doméstico",
          "Enquadrar facções como PCC, CV e milícias com domínio territorial como organizações de 'terrorismo doméstico', com penas mínimas de 45 anos para associação ou recrutamento e 35 anos para colaboração, financiamento e lavagem de dinheiro",
          "Reduzir a maioridade penal para 16 anos em crimes graves, como homicídio, tortura, estupro de vulnerável e roubo com violência",
          "Endurecer as penas para furto de celulares",
          "Asfixiar financeiramente o crime organizado e retomar o controle do sistema penitenciário"
        ]
      },
      {
        titulo: "Economia e contas públicas",
        propostas: [
          "Apresentar um 'Orçamento da Verdade' nos primeiros meses, com diagnóstico de despesas obrigatórias, subsídios, benefícios tributários e riscos fiscais",
          "Conter o crescimento das despesas obrigatórias e reduzir a dívida pública",
          "Elevar a taxa de investimento de cerca de 17% para 25% do PIB, com maior participação do setor privado",
          "Restringir as apostas on-line, proibindo a publicidade de bets em veículos de massa e redes sociais"
        ]
      },
      {
        titulo: "Política e gestão do Estado",
        propostas: [
          "Enviar uma PEC para acabar com a reeleição de presidente, governadores e prefeitos, incluindo o presidente eleito em 2026",
          "Adotar o sistema distrital misto nas eleições legislativas",
          "Aplicar gestão por resultados, com metas e indicadores de desempenho divulgados para cada órgão federal"
        ]
      },
      {
        titulo: "Saúde, educação e proteção social",
        propostas: [
          "Transformar o SUS em uma rede mais preventiva, digital e integrada",
          "Estabelecer metas de alfabetização na idade certa",
          "Manter os programas de transferência de renda, associados a qualificação, saúde, creche, moradia e acesso ao trabalho"
        ]
      },
      {
        titulo: "Agro e meio ambiente",
        propostas: [
          "Adotar a 'biocompetitividade' como estratégia nacional e criar um Plano Decenal de Bioenergia (etanol, biodiesel, biometano e bioeletricidade)",
          "Criar um Plano Safra de cinco anos e ampliar o seguro rural",
          "Estimular pagamento por serviços ambientais, mercado de carbono e agricultura de baixo carbono"
        ]
      }
    ]
  },

  zema: {
    nome: "Romeu Zema (Novo)",
    foto: "imagens/Romeu_Zema.jpg",
    areas: [
      {
        titulo: "Economia e Estado",
        propostas: [
          "Privatizar 100% das empresas estatais e vender imóveis públicos ociosos",
          "Fazer um choque fiscal, com metas progressivas de redução da carga tributária e fim dos supersalários",
          "Fazer uma nova reforma da Previdência, com idade mínima reajustada pela expectativa de vida",
          "Reduzir o IOF e ampliar a concorrência bancária",
          "Extinguir o Fundo Eleitoral e o Fundo Partidário, realocando os recursos para estradas, escolas e hospitais"
        ]
      },
      {
        titulo: "Trabalho e assistência social",
        propostas: [
          "Criar um modelo alternativo à CLT",
          "Unificar os programas de renda no Bolsa Família, combatendo fraudes no CadÚnico",
          "Suspender o benefício de quem recusar sem justificativa uma oferta formal de trabalho (exceto responsáveis por crianças pequenas, idosos e pessoas com deficiência) e pagar prêmio de R$ 5 mil a famílias que saírem do programa por renda",
          "Criar o programa 'Sócios do Brasil', com depósito de R$ 1.000 para cada brasileiro ao nascer"
        ]
      },
      {
        titulo: "Segurança pública",
        propostas: [
          "Classificar facções criminosas como organizações terroristas",
          "Construir presídios de segurança máxima em regiões remotas e impedir a progressão de regime de quem usa táticas e armas de guerra para dominar territórios",
          "População de rua: moradia primeiro, remoção de barracas de espaços públicos e internação involuntária de dependentes químicos, nos termos da lei"
        ]
      },
      {
        titulo: "Educação",
        propostas: [
          "Adotar financiamento por desempenho, acabar com a eleição interna de reitores e priorizar cursos técnicos e científicos"
        ]
      },
      {
        titulo: "Instituições e meio ambiente",
        propostas: [
          "Mudar o STF, devolvendo-lhe o papel estrito de Corte Constitucional",
          "Garantir aos povos indígenas o pleno direito de exploração econômica de suas terras",
          "Combater o desmatamento ilegal e a grilagem com monitoramento por satélite"
        ]
      }
    ]
  },

  cury: {
    nome: "Augusto Cury (Avante)",
    foto: "imagens/Augusto_Cury.jpg",
    areas: [
      {
        titulo: "Instituições e gestão do Estado",
        propostas: [
          "Adotar o semipresidencialismo, com a criação do cargo de primeiro-ministro",
          "Estabelecer mandato fixo de oito anos para ministros do STF",
          "Reduzir de oito a dez ministérios e rever o pacto federativo para redistribuir tributos em favor dos municípios",
          "Definir metas anuais públicas para cada ministério, com governo totalmente digital e inteligência artificial contra desperdícios"
        ]
      },
      {
        titulo: "Educação e saúde emocional",
        propostas: [
          "Tornar a educação em tempo integral a prioridade principal do governo",
          "Aplicar programas permanentes de 'gestão da emoção' nas escolas públicas, contra ansiedade, depressão e bullying",
          "Criar um programa nacional de saúde mental"
        ]
      },
      {
        titulo: "Saúde",
        propostas: [
          "Ampliar a telemedicina no SUS para resolver cerca de 80% das consultas básicas, com meta de atendimento em até 30 minutos",
          "Criar uma rede nacional de prevenção e detecção precoce do câncer, com comitês em cada município"
        ]
      },
      {
        titulo: "Economia e empreendedorismo",
        propostas: [
          "Buscar responsabilidade fiscal e déficit zero, com redução da carga tributária",
          "Criar um Ministério (ou Secretaria Executiva) do Empreendedorismo e da Economia Distribuída, com 10 mil escolas e clubes de empreendedorismo e meta de 10 milhões de microempresas",
          "Incentivar a transição para a escala de trabalho 5x2 e manter os incentivos da Zona Franca de Manaus"
        ]
      },
      {
        titulo: "Segurança, moradia e meio ambiente",
        propostas: [
          "Integrar as polícias com inteligência artificial ('Segurança Pública 4.0') e usar tecnologia para prevenir o feminicídio",
          "Regularizar até 5 milhões de moradias em favelas em dez anos, sem expulsar os moradores",
          "Criar o 'Brasil Oásis' para transformar o semiárido em fronteira agrícola, com irrigação de precisão",
          "Tornar o Brasil referência em hidrogênio verde e criar o projeto 'Floresta Viva' contra incêndios"
        ]
      }
    ]
  }
};

function mostrarProposta(id) {
  const candidato = candidatos[id];
  const caixa = document.getElementById("propostas");

 let html = '<img class="foto" src="' + candidato.foto + '" alt="' + candidato.nome + '" onerror="this.style.display=\'none\'">';
    html += "<h2>" + candidato.nome + "</h2>";

  for (const area of candidato.areas) {
    html += "<h3>" + area.titulo + "</h3><ul>";
    for (const proposta of area.propostas) {
      html += "<li>" + proposta + "</li>";
    }
    html += "</ul>";
  }

  caixa.innerHTML = html;
  caixa.style.display = "block";
}