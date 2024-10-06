# Jogo da Memória

## Victor Hugo Alves Almeida

### Descrição
Este é um jogo da memória desenvolvido para entreter e desafiar os jogadores a encontrar pares de cartas iguais. O jogo possui modos de jogador contra jogador e jogador contra computador.

---

## Regras do Jogo

### Objetivo
O objetivo do Jogo da Memória é encontrar pares de cartas iguais. O jogador deve lembrar a posição das cartas já viradas e tentar combiná-las.

### Modos de Jogo
1. **Jogador vs Jogador**:
   - Dois jogadores alternam as jogadas.
   - O jogador que encontrar um par continua jogando.
   - O jogo termina quando todos os pares forem encontrados.

2. **Jogador vs Computador**:
   - O jogador joga primeiro, tentando encontrar pares.
   - Após a jogada do jogador, o computador faz uma jogada automática, escolhendo cartas aleatórias.
   - O jogo termina quando todos os pares forem encontrados.
   - O jogador deve usar estratégias para maximizar suas chances de ganhar, enquanto o computador faz jogadas aleatórias.

### Regras Gerais
- **Início do Jogo**: O jogo começa com todas as cartas viradas para baixo.
- **Jogadas**:
  - O jogador deve clicar em duas cartas por vez.
  - Se as cartas clicadas formarem um par, elas permanecerão viradas.
  - Se não formarem um par, elas serão viradas para baixo novamente após um curto período.
- **Número de Tentativas**: O número de tentativas (cliques) é contado, e a pontuação final é baseada no número de tentativas realizadas para encontrar todos os pares.
- **Finalização do Jogo**: O jogo termina quando todos os pares forem encontrados.
- **Pontuação**:
  - A pontuação final do jogador é baseada no número total de tentativas feitas para encontrar todos os pares.
  - Menos tentativas significam uma pontuação melhor.

### Armazenamento de Rankings
- O jogo salva os melhores resultados no `LocalStorage`.
- O ranking exibe os 10 melhores jogadores com base no número de tentativas.

### Opção de Reiniciar
- Ao final do jogo, o jogador pode optar por jogar novamente ou visualizar o ranking.
- O jogador pode limpar o ranking a qualquer momento.

---

## Como Jogar
1. Abra o jogo em seu navegador.
2. Escolha um modo de jogo: Jogador vs Jogador ou Jogador vs Computador.
3. Clique em duas cartas por vez para tentar formar pares.
4. Siga as instruções na tela para jogar.
5. Após o jogo, veja seu ranking e tente melhorar sua pontuação!

## Como Executar o Projeto
1. Clone o repositório em sua máquina local.
2. Abra o projeto no VSCode.
3. Utilize a extensão **Live Server** para executar o arquivo `index.html`.
4. Jogue e divirta-se!

## Créditos
- [Wikipedia - Jogo da Memória](https://pt.wikipedia.org/wiki/Jogo_de_mem%C3%B3ria) - Referência para regras e conceito do jogo.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

