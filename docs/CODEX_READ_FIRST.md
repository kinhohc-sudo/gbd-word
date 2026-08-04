# CODEX - LEIA ANTES DE ALTERAR QUALQUER ARQUIVO

## ESTADO DO PROJETO

Este projeto está em fase de IMPLEMENTAÇÃO, não de concepção.

O frontend estrutural foi montado em HTML, CSS e JavaScript sem dependências externas.
Ele já contém:

- layout ByteLog em três colunas;
- cabeçalho fixo;
- capa, avatar e identidade;
- feed central com rolagem;
- reações pizza, banana, coração, comentários e compartilhar;
- destaques, galeria, pôsteres e atualizações;
- listagem de perfis;
- página individual reutilizável de perfil;
- listagem de projetos usando capas oficiais;
- página PodByte com slot do Episódio 1;
- área de downloads;
- Torpedo estrutural;
- manifesto de ativos oficiais;
- endpoint de RASCUNHO Grok com web search;
- slots para Supabase e autenticação.

## REFERÊNCIA VISUAL OBRIGATÓRIA

Arquivo principal:
`assets/official/layout/layout-bytelog-oficial.png`

Referência de perfil:
`assets/official/layout/layout-perfil-byte-oficial.png`

A estrutura deve permanecer visualmente fiel a essas referências.

## LOGOS OFICIAIS

ByteLog:
`assets/official/logos/bytelog-logo-g-oficial.png`

Fonte original aprovada da opção G:
`assets/official/logos/bytelog-logo-g-source.jpg`

GBD World / universo digital:
`assets/official/logos/gbd-world-digital-oficial.png`

GBD Studio:
`assets/official/logos/gbd-studio-logo-oficial.png`

Torpedo:
`assets/official/logos/torpedo-logo-oficial.png`

## NÃO FAZER

- Não redesenhar personagens.
- Não substituir personagens por emojis.
- Não gerar novas capas para projetos que já têm capa oficial.
- Não trocar o logo G do ByteLog por SVG, Canvas ou ícone genérico.
- Não usar a imagem completa do mockup como se fosse a página.
- Não simplificar o layout para uma landing page genérica.
- Não expor chaves da xAI/Grok ou Supabase no navegador.
- Não permitir publicação automática de notícias sem aprovação humana.
- Não alterar textos, nomes ou relações apenas para preencher lacunas.
- Não declarar algo concluído sem testar desktop e mobile.

## PRÓXIMAS TAREFAS TÉCNICAS

1. Criar repositório persistente ou importar esta pasta no repositório já conectado.
2. Publicar esta base no projeto Vercel `gbd-world`.
3. Conectar Supabase:
   - posts
   - profiles
   - projects
   - media
   - podcast_episodes
   - editorial_news_drafts
   - downloads
   - settings
4. Criar autenticação administrativa real.
5. Trocar o conteúdo estático do frontend por consultas às tabelas, mantendo exatamente os componentes e o layout.
6. Integrar `/api/news/generate` ao painel editorial:
   - criar rascunho;
   - mostrar fontes;
   - permitir editar;
   - aprovar;
   - publicar.
7. Anexar arquivo final do Episódio 1 do PodByte e preencher `data/podbyte.json`.
8. Conectar APKs reais aos slots de downloads.
9. Executar testes visuais em:
   - 360 x 800
   - 390 x 844
   - 768 x 1024
   - 1440 x 900
10. Só promover para produção depois da revisão visual.

## INTEGRAÇÃO GROK

O endpoint preparado é:
`POST /api/news/generate`

Variável:
`XAI_API_KEY`

A API usa o endpoint xAI Responses e a ferramenta `web_search`.
O resultado deve continuar no modo `draft_only`.

Fluxo obrigatório:

Grok pesquisa -> cria rascunho -> salva em editorial_news_drafts -> administrador revisa -> administrador aprova -> post é publicado.

Nunca:
Grok pesquisa -> publica diretamente.

## EPISÓDIO 1 DO PODBYTE

Status confirmado pelo criador: concluído.

O arquivo de áudio/vídeo não estava disponível na pasta durante esta preparação.
Não usar arquivo de demonstração.
Quando o arquivo oficial chegar:

- guardar em Storage;
- registrar título, descrição, duração, data e capa;
- atualizar `podcast_episodes`;
- carregar no player da página PodByte;
- gerar post oficial no ByteLog.

## VALIDAÇÃO

Antes de encerrar:
- abrir o endereço público;
- conferir se CSS e imagens carregam;
- conferir o logo G;
- comparar visualmente com a referência;
- testar rolagem do feed;
- testar perfis;
- testar mobile;
- registrar no commit o que foi realmente concluído.
