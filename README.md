# Testes automatizados para mobile flutter

Testes automatizados mobile utilizando um appium flutter driver com java script

GitHub do projeto - [clique aqui](https://github.com/fercassia/TemplateAutomacaoAppiumFlutterDriverEJS)

Esses testes que foram criados inicialmente para demonstração de como funciona a ferramenta e como seria os testes automatizados.
____________________________________________
## Tecnologias utilizadas nos testes

- Flutter 3.7.12 - [Flutter versão estável 3.7.12](https://docs.flutter.dev/release/archive)
- Emulador Mobile - [Android Studio](https://acesse.dev/UokJ3)
- Java 11 -  [Java JDK 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)
- JavaScript (Node 18) - [NVM Windows](https://github.com/coreybutler/nvm-windows)
- IDE de desenvolvimento (Sugestão) - [Visual Studio Code](httpscode.visualstudio.com)
- Orquestrador de testes - [Flutter Driver](https://api.flutter.dev/flutter/flutter_driver/flutter_driver-library.html)
- Biblioteca Appium Client para Java Script(Node)- [WebdriverIO](https://webdriver.io/)
- Servidor Appium 2 - [Appium 2.1](https://appium.io/docs/en/2.1/)
- Ferramenta de inspesionar - [Flutter Inspector](https://docs.flutter.dev/tools/devtools/inspector?gclid=Cj0KCQiAyKurBhD5ARIsALamXaFzJcGS9DHIg2e4HTyzEgUHq5_bLy51wqIxKRrzx5mrO5rCsFTLQ1UaAhXGEALw_wcB&gclsrc=aw.ds)
____________________________________________
## Instalação

### Pré requisitos

1. Instale o git

2. Instale o flutter seguindo a [documentação](https://docs.flutter.dev/get-started/install/windows)

i. A versão utilizada no flutter é a versão [3.7.12](https://docs.flutter.dev/release/archive)
   
ii. Coloque o caminho do flutter na variavel de ambiente do usuário -> ```Path```

   ```bash
   C:\dev\flutter\bin
   ```

3. Instale o Java e coloque-o nas variáveis de ambiente
   
i. Set JAVA_HOME como variável de ambiente do usuário

   ```bash
   JAVA_HOME=C:\Program Files\Java\{versaoJava}
   ```

ii. Set o bin do java na variável de ambiente do usuário -> ```Path```
   ```bash
   %JAVA_HOME%\bin
   ```
   
4. Instale o android studio

i. Configure o android studio, com auxilio da documentação do flutter
   
ii. Set ANDROID_HOME como variável de ambiente do usuário

    ```bash
    ANDROID_HOME=C:\Users\{userName}\AppData\Local\Android\Sdk
    ```

iii. Set o platform-tools do android studio na variável de ambiente do usuário -> ```Path```

    ```bash
    %ANDROID_HOME%\platform-tools
    ```

5. Instale o visual studio code

i. instale a extensão ```Flutter```

6. Use Flutter inspector, conforme a documentação

i. ATENÇÃO: O appium inspector para inspecionar aplicativos flutter, não consegue usar identificador único, geralmente precisa-se utilizar o XPath, tornando menos infeciente para inspecionar. Mas, se não possuir acesso ao codigo fonte da aplicação, é indicado utilizar o appium inspector, porém, se tem acesso ao codigo, é mais indicado o uso do Flutter inspector. No caso deste projeto estamos usando Flutter inspector.

a. Para mais informações, leia esse artigo: [Flutter Integration Automated Test Using Appium — 3- Native Element Inspection](https://medium.com/@aradhya.1441/flutter-integration-automated-test-using-appium-3-native-element-inspection-21e04ba326c6)

iii. __Flutter inspector__

a. Abra no visual studio code de acordo com a documentação [Instalacao Devtools e Flutter inspector](https://docs.flutter.dev/tools/devtools/vscode)

- Rode a aplicação

- Aperte os comandos ```ctrl+shift+P``` e escolha as opções:

    ```Flutter: Open DevTools``` e em seguida ```Open Widged Inspector Page```

__obs:__ Para facilitar a instalação dos passos 2 e 4.i, pode seguir esses vídeos [Como Instalar o Flutter no Windows: tudo o que você precisa saber](https://www.youtube.com/watch?v=dpppZ9ySJSY) e [Como Configurar o Emulador Android para Flutter](https://www.youtube.com/watch?v=gNYNvHUSW1s).

__obs:__ Se houver se erro de compatibilidade for exibido após rodar o comando ```flutter doctor --android-licenses```, seguir a orientação descrita na discussão da issue [flutter doctor --android-licenses not working due to java.lang.UnsupportedClassVersionErro](https://github.com/flutter/flutter/issues/120388)
____________________________________________

### Passos para Instalação e Configuração Flutter Driver+Appium

### Projeto Flutter

1. Clone o projeto flutter

i. ATENÇÃO: Na hora de clonar o projeto flutter em uma pasta, deve ser em uma pasta cujo o nome não deve possuir espaço ou caracteres especiais, pois atrapalha a comunicação flutter com o emulador mobile

```bash
git clone https://github.com/{gitUser}/{nomeRepositorio}.git
```
2. Abra o projeto flutter

i. ATENÇÃO: Quando abrir o projeto flutter, baixe as dependencias do flutter

```bash
flutter pub get
```

3. Adicione o pacote do flutter driver nas dependencias de desenvolvimento no arquivo ```pubspec.yaml```

```bash
dev_dependencies:
    test: any
    flutter_test:
        sdk: flutter
    flutter_driver:
        sdk: flutter
```

4. No arquivo "main.dart" adicionar ```enableFlutterDriverExtension()``` na função main

i. ATENÇÃO: deve adicionar a função antes da função ```runApp()```

    ```bash
        import 'package:flutter/material.dart';
        import 'package:flutter_driver/driver_extension.dart';

        void main() {
            enableFlutterDriverExtension();
            runApp(const MyApp());
        }
    ```

### JavaScript e Appium Client Library

#### PROJETO DO ZERO

1. Para criar os testes mobile com appium, deve instalar uma biblioteca appium cliente, para isso instale a biblioteca WebdriverIO.

i. Sabemos que o appium já está instalado, node e npm possuem os requisitos satisfatórios, crie um repositório em algum lugar e inicie novo projeto do Node:

```bash
npm init
```

2. Instale pacote webdriverIO via npm utilizando uma das formas abaixo

i. Instale o pacote ```@wdio/cli``` que irá setar as configurações do projeto, a instalação será na dependencia dev

```bash
npm i -D @wdio/cli
```

a. Para instalar o appium, appium flutter driver e appium-flutter-finder, rode o comando abaixo instalando-os nas dependencias dev

```bash
npm i -D appium appium-flutter-driver appium-flutter-finder @wdio/cli
```

b. Rode o comando para iniciar ou alterar a configuração do pacote ```@wdio```
```bash
npx wdio config
```

3. Instale o pacote para instalar o mecanismo de execução TypeScript e REPL para Node.js.
```bash
npm i -D typescript ts-node
```

4. Instale o pacote ```assert``` com dev dependence para validar e verificar algumas ações

```bash
npm i -D assert
```

5. Configure o arquivo ```wdio.conf.js``` encontre as variáveis ```path``` e a ```baseUrl```, e adicione os valores demonstrados abaixo:

i. Essas variáveis vem setadas vazias como default;

```bash
path: '/wd/hub',
baseUrl: 'http://localhost',
```

6. Configure os capabilities do appium no arquivo ```wdio.conf.js``` como o exemplo abaixo:

__obs__: Para descobrir mais sobre capabilities ou entender a funcionalidade de cada parâmetro, olhe na documentação do appium, na parte de capabilities - [Clique aqui](https://appium.io/docs/en/2.1/guides/caps/)

i. Nesse cenário estamos configurando apenas o android.

```bash
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'Flutter',
        'appium:app': '../flutter_application/build/app/outputs/flutter-apk/app-debug.apk',
        'appium:appPackage': 'com.example.flutter_application',
        'appium:appActivity': 'com.example.flutter_application.MainActivity',
        'appium:noReset': true,
        'appium:newCommandTimeout': '7200',
        'appium:sessionOverride': true,
    }]
```

__obs__: Caso houver alguma dúvida ou dificuldade, procure essas referências para auxilio: [Documentação do Appium](https://appium.io/docs/en/2.1/),[Simplifying Flutter App Automation](https://dev.to/bhadmus/simplifying-flutter-app-automation-2abe) e [Appium in JavaScript](https://testautomationu.applitools.com/appium-javascript-tutorial/)

### Integração com Allure Report

1. Instale o comando para instalar o pacote allure-report salvando como dev dependecie

```bash
npm i -D @wdio/allure-reporter
``` 

2. Instale o comando para instalar o alure commandline para auto geração o report
```bash
npm i -D allure-commandline
```

#### PROJETO JÁ CRIADO:

1. Com o projeto clonado, rode o comando na pasta ```Tests/```:

```bash
npm install
```

2. Rode o arquivo ```main.dart``` do flutter, para gerar o apk

i. Mas antes de rodar o arquivo, verfique se pegou as atualizações do fluter ```flutter pub get```

3. Entre no diretório ```cd Tests/```

```bash
npm run wdio
```

#### Comandos
 
1. Para rodar os testes, mas deve certificar de que o servidor do appium esteja rodando:

```bash
cd TemplateAutomacaoAppiumFlutterDriverEJS/Tests
npm run wdio
```
2. Para gerar o report no allure, rode o comando.

```bash
cd TemplateAutomacaoAppiumFlutterDriverEJS/Tests
npm run allure-report
```

#### Soluções

1. Se houver o erro ao rodar o teste, referente ao appium: HTTP Could not start REST http interface listener - Rode o comando de acordo com solução. Para matar o processo do tipo PID - [Appium Question. If "listen eaddrinuse: address already in use", how to stop it? why it didn't stop?](https://stackoverflow.com/questions/61122027/appium-question-if-listen-eaddrinuse-address-already-in-use-how-to-stop-it) 

i. ATENÇÃO: O Appium service está programado para sobrepor a sessão do appium, e também está programado para esperar um tempo o cliente interagir, se não interagir até esse tempo a sessao é desligada, para saber mais leia a sobre [Capabilities](https://appium.io/docs/en/2.2/guides/caps/). Mas caso acontecer esse problema citado acima, rode o comando abaixo.

```bash
netstat -ano|findstr "PID :4723"
taskkill /pid {PIDNumber} /f
```

2.  Se houver o erro ao rodar o teste, Error: "ts-node/esm/transpile-only 'resolve'" - Rode o comando de acordo com solução - [Error: "ts-node/esm/transpile-only 'resolve'" did not call the next hook in its chain and did](https://stackoverflow.com/questions/75471228/error-ts-node-esm-transpile-only-resolve-did-not-call-the-next-hook-in-its) 

```bash
npm i -D typescript ts-node
```
____________________________________________
