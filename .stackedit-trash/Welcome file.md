# Bem-vindo ao StackEdit!

Oi! Sou o primeiro arquivo Markdown no ** StackEdit ** . Se você quiser aprender sobre o StackEdit, pode me ler. Se você quiser brincar com o Markdown, pode me editar. Depois de terminar comigo, você pode criar novos arquivos abrindo o ** explorador de arquivos ** no canto esquerdo da barra de navegação.


# Arquivos

O StackEdit armazena seus arquivos no seu navegador, o que significa que todos os seus arquivos são salvos automaticamente localmente e disponíveis ** offline! **

## Crie arquivos e massas

O explorador de arquivos pode ser acessado usando o botão no canto esquerdo da barra de navegação. Você pode criar um novo arquivo clicando no botão ** Novo arquivo ** no gerenciador de arquivos. Você também pode criar massas clicando no botão ** Nova pasta ** .

## Mudar para outro arquivo

Todos os seus arquivos e pastas são apresentados como uma árvore no gerenciador de arquivos. Você pode alternar um para outro clicando em um arquivo na árvore.

## Renomear um arquivo

Você pode renomear ou arquivo atual clicando no nome do arquivo na barra de navegação ou no botão ** Renomear ** no gerenciador de arquivos.

## Excluir um arquivo

Você pode excluir o arquivo atual clicando no botão ** Remover ** no gerenciador de arquivos. O arquivo será movido para o ** Trash ** pasta e excluído automaticamente após 7 dias de inatividade.

## Exportar um arquivo

Você pode exportar ou arquivo atual clicando em ** Exportar para disco ** no menu. Você pode optar por exportar ou arquivo como ou Markdown simples, como HTML usando um modelo de orientação ou PDF.


# Sincronização

A sincronização é um dos maiores recursos do StackEdit. Ele permite sincronizar qualquer arquivo no seu espaço de trabalho com outros arquivos armazenados nas suas contas do ** Google Drive ** , ** Dropbox ** e ** GitHub ** . Isso permite que você continue escrevendo em outros dispositivos, colabore com as pessoas com quem você compartilha o arquivo, integre-se facilmente ao seu fluxo de trabalho ... O mecanismo de sincronização ocorre a cada minuto em segundo plano, baixando, mesclando e carregando modificações de arquivo.

Existem dois tipos de sincronização e eles podem se complementar:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

`  ` ` Sereia SequenceDiagram Alice - >> Bob: Olá Bob, Como Você está em? Bob - >> John: E você John? Bob - Alice: Estou bem, obrigado! Bob-x John: Estou bem, obrigado! Nota à direita de John: Bob pensa muito <br/> muito tempo, tanto <br/> que o texto <br/> não se encaixa em uma linha. Bob -> Alice: Verificando com John ... Alice-> John: Sim ... John, como você está? ` ` ` `  





  





E isso produzirá um fluxograma:

`  ` ` ` gráfico da sereia LR A [Quadrado Reto] - Texto do link -> B ((Círculo)) A -> C (Retângulo Redondo) B -> D {Rhombus} C -> D ` ` `    






<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM2MzkzNDM3NV19
-->