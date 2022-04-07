# Resolutte

Projeto realizado para o processo seletivo da Resolutte.

> Para avaliação de conhecimento, estamos solicitando dois projetos, um
> CRUD em Web API, é necessário um front simples, mas que tenha conexão
> com a API,
> 
> Contexto seria inserir um áudio, como nome do áudio, tipo de ligação
> (entrada ou saída) e nome de operador, atualizar dados do áudio,
> deletar o áudio e buscar dados do áudio por nome. Cenário de teste vai
> ser inserir dados na API, testar o CRUD
> 
> Entidade é um objeto áudio, com os seguintes parâmetros: ArquivoNome,
> Tipo, OperadorNome, DataCriacao
> 
> Endpoints com: INSERT UPDATE DELETE GET

Para rodar esse projeto, você precisa ter instalado o .net core SDK 3.1 em seu sistema operacional  [.Net Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1) e do [MySql](https://downloads.mysql.com/archives/installer/).
É recomendavel que para alterações você instale um dos seguintes editores:  [Visual Studio](https://visualstudio.microsoft.com/pt-br/vs/)  | [Visual Studio Code](https://code.visualstudio.com/download)

### Rodando a aplicação - API

Antes rodar a API, utilize o comando abaixo no Visual Studio para executar as migrations:

    Update-database
Após isso inicie o projeto normalmente (control + F5)

### Rodando a aplicação - FrontEnd
Abra um terminal na pasta da aplicação e execute o comando:

    ng-serve


## Construido com:

-   [.Net Core Framework](https://dotnet.microsoft.com/download/dotnet-core)  - Free, cross-platform, open-source framework;
-   [Angular](https://angular.io/)  - The modern web developer's platform

## [](https://github.com/gcrestani/Resolutte#autor)Autor

-   **Guilherme Crestani**  -  [gcrestani](https://github.com/gcrestani/)
