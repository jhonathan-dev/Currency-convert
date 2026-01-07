# 💰 Currency Converter

![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)

## 📝 Descrição do Projeto

O **Currency Converter** é uma aplicação web simples e intuitiva desenvolvida para realizar a conversão de valores entre as principais moedas globais. O projeto utiliza **JavaScript** para buscar taxas de câmbio em tempo real através de APIs externas, garantindo que as conversões envolvendo o Real Brasileiro (BRL) sejam as mais precisas e atualizadas possíveis.

O objetivo principal é fornecer uma ferramenta rápida e fácil de usar para quem precisa converter valores entre Real, Dólar, Euro e Libra.

## ✨ Funcionalidades

*   **Conversão em Tempo Real:** Taxas de câmbio atualizadas para conversões de/para Real Brasileiro (BRL).
*   **Seleção de Moedas:** Permite selecionar a moeda de origem e a moeda de destino.
*   **Moedas Suportadas:**
    *   Real Brasileiro (R$)
    *   Dólar Americano (US$)
    *   Euro (€)
    *   Libra Esterlina (£)
*   **Interface Intuitiva:** Design limpo e responsivo, focado na usabilidade.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Linguagem de marcação para a estrutura da página. |
| **Estilização** | CSS3 | Estilização da interface, garantindo um visual agradável. |
| **Lógica** | JavaScript | Responsável pela manipulação do DOM e pela lógica de conversão e integração com APIs. |

## 🌐 APIs de Câmbio

Para obter as taxas de câmbio atualizadas, o projeto utiliza as seguintes APIs públicas:

| Moeda | API Utilizada | Endpoint |
| :--- | :--- | :--- |
| **Dólar (USD) e Euro (EUR)** | AwesomeAPI | `https://economia.awesomeapi.com.br/` |
| **Libra (GBP)** | ExchangeRate-API | `https://api.exchangerate-api.com/` |

**Observação:** As taxas de câmbio são buscadas em relação ao Real Brasileiro (BRL). Conversões entre moedas que não sejam o Real (ex: Dólar para Euro) podem utilizar valores estáticos definidos no código, e não em tempo real.

## 🚀 Como Rodar o Projeto

Este projeto é uma aplicação *front-end* pura e não requer um servidor web complexo para ser executado.

### Pré-requisitos

Você só precisa de um navegador web moderno (Chrome, Firefox, Edge, etc.).

### Execução

1.  **Clone o repositório** (após subir este projeto no GitHub):
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Currency-convert-main
    ```
3.  **Abra o arquivo `index.html`** no seu navegador. Você pode fazer isso clicando duas vezes no arquivo ou usando o comando:
    ```bash
    open index.html
    # ou
    start index.html
    ```

## 💡 Como Usar

1.  **Selecione a Moeda de Origem:** Escolha a moeda que você deseja converter no primeiro campo (`Converter de:`).
2.  **Selecione a Moeda de Destino:** Escolha a moeda para a qual você deseja converter no segundo campo (`Converter para:`).
3.  **Insira o Valor:** Digite o valor numérico que você deseja converter no campo de entrada.
4.  **Clique em "Converter":** O resultado da conversão será exibido na seção de resultados abaixo.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades.

1.  Faça um *fork* do projeto.
2.  Crie uma *branch* para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3.  Faça o *commit* das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4.  Faça o *push* para a *branch* (`git push origin feature/nova-funcionalidade`).
5.  Abra um *Pull Request*.

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` (se existir) para mais detalhes.

---

Feito com ❤️ por **Jhonathan-Dev**
