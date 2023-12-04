# Testes automatizados para mobile flutter

Testes automatizados mobile utilizando um appium flutter driver com java script

GitHub do projeto - [clique aqui](https://github.com/fercassia/)

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
- Ferramenta de inspesionar - [Appium Inspector](https://github.com/appium/appium-inspector) ou [Flutter Inspector](https://docs.flutter.dev/tools/devtools/inspector?gclid=Cj0KCQiAyKurBhD5ARIsALamXaFzJcGS9DHIg2e4HTyzEgUHq5_bLy51wqIxKRrzx5mrO5rCsFTLQ1UaAhXGEALw_wcB&gclsrc=aw.ds)
- Appium Flutter Driver - [Instalação Appium Flutter Driver](https://github.com/appium/appium-flutter-driver#installation)
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

6. Instale o Appium

i. ATENÇÃO: Versão desktop do Appium foi descontinuada, por problemas de segurança. Diante disso é indicado a instalação do appium pelo terminal.
   
ii. Após instalar o appium, rode-o. Mas Antes, set a permissão para rodar o appium pelo terminal
    ```C:\Users\LINQ> Set-ExecutionPolicy RemoteSigned ```

   [Fonte: "Execução de scripts foi desabilitada neste sistema"?](https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema)

7. Instale os drivers do appium

i. Rode o comando abaixo para instalar o driver appium flutter driver

```bash
    appium driver install --source=npm appium-flutter-driver
```

ii. Rode o comando abaixo para instalar o appium junto com os drivers de automação

a. Nessa automação, está sendo usado apenas o driver para automação de android ```UIAutomator2```

```bash
    npm install --location=global appium --drivers=xcuitest,uiautomator2
```

__Obs:__ Para verificar se há algum update rode os comandos abaixo:

i. Para verificar os drivers

```bash
    appium driver list --updates
```
ii. Se o update estiver disponivel

```bash
    appium driver update xcuitest
```

8. Instale o Appium inspector ou Flutter inspector, conforme a documentação

i. ATENÇÃO: O appium inspector para inspecionar aplicativos flutter, não conseguem usar identificador único, geralmente precisa-se utilizar o XPath, tornando menos infeciente para inspecionar. Mas, se não possuir acesso ao codigo fonte da aplicação, é indicado utilizar o appium inspector, porém, se tem acesso ao codigo, é mais indicado o uso do Flutter inspector.

a. Para mais informações, leia esse artigo: [Flutter Integration Automated Test Using Appium — 3- Native Element Inspection](https://medium.com/@aradhya.1441/flutter-integration-automated-test-using-appium-3-native-element-inspection-21e04ba326c6)

ii. __Appium inspector__

a. Baixe a release e instale de acordo com a documentação

b. Configure o appium inspector

__obs:__ O Appium inspector funcionar precisa aprovar o Cors

- Após a instalação encontre o arquivo ```settings``` na pasta de instalação do appium inspector 

    ```bash
    C:\Users\{user}\AppData\Roaming\appium-inspector\settings.json
    ```

- No arquivo adicione uma configuração nos objetos ```advanced```

    ```bash
    "advanced":{"allowCors":true,"allowUnauthorized":true}
    ```

iii. __Flutter inspector__

a. Abra no visual studio code de acordo com a documentação [Instalacao Devtools e Flutter inspector](https://docs.flutter.dev/tools/devtools/vscode)

- Rode a aplicação

- Aperte os comandos ```ctrl+shift+P``` e escolha as opções:

    ```Flutter: Open DevTools``` e em seguida ```Open Widged Inspector Page```

    
__obs:__ Para facilitar a instalação dos passos 2 e 4.i, pode seguir esses vídeos [Como Instalar o Flutter no Windows: tudo o que você precisa saber](https://www.youtube.com/watch?v=dpppZ9ySJSY) e [Como Configurar o Emulador Android para Flutter](https://www.youtube.com/watch?v=gNYNvHUSW1s).

__obs:__ Se houver se erro de compatibilidade for exibido após rodar o comando ```flutter doctor --android-licenses```, seguir a orientação descrita na discussão da issue [flutter doctor --android-licenses not working due to java.lang.UnsupportedClassVersionErro](https://github.com/flutter/flutter/issues/120388)
____________________________________________

### Passos para Instalação e Configuração do Robot+Flutter Driver+Appium

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

i. o pacote webdriveio sozinho, a instalação será na dependencia dev

```bash
npm i -D webdriverio
```

ii. o pacote ```@wdio/cli``` que irá setar as configurações do projeto, a instalação será na dependencia dev

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

c. Exemplo das configurações (os passos de diretório foram removidos neste exemplo):

```bash
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
? Which mobile environment you would like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices 
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Which reporter do you want to use? spec, allure
? Do you want to add a plugin to your test setup? wait-for: utilities that provide functionalities to wait for certain conditions till 
a defined task is complete.
   > https://www.npmjs.com/package/wdio-wait-for, Testing Library: utilities that encourage good testing practices laid down by        
dom-testing-library.
   > https://testing-library.com/docs/webdriverio-testing-library/intro
? Do you want to add a service to your test setup? appium
? Do you want me to run `npm install` Yes
```

3. Instale o pacote ```assert``` com dev dependence para validar e verificar algumas ações

```bash
npm i -D assert
```

4. Instale o comando para instalar o pacote allure-commandline

```bash
npm install -g allure-commandline --save-dev
```

i.Configure a geração do report automatico de acordo com a documentação - [WebdriverIO Allura Report](https://webdriver.io/docs/allure-reporter)

5. Configure o arquivo ```wdio.conf.js``` encontre as variáveis ```path``` e a ```baseUrl```, e adicione os valores demonstrados abaixo:

i. Essas variáveis vem setadas vazias como default;

```bash
path: '/wd/hub',
baseUrl: 'http://localhost',
```

6. Configure os capabilities do appium no arquivo ```wdio.conf.js``` como o exemplo abaixo:

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
        'appium:noReset': true
    }]
```
__obs__: Caso houver alguma dúvida ou dificuldade, procure essas referências para auxilio: [Documentação do Appium](https://appium.io/docs/en/2.1/),[Simplifying Flutter App Automation](https://dev.to/bhadmus/simplifying-flutter-app-automation-2abe) e [Appium in JavaScript](https://testautomationu.applitools.com/appium-javascript-tutorial/)

#### PROJETO JÁ CRIADO:

1. Com o projeto clonado, rode o comando na pasta ```Tests```:

```bash
npm install
```

### Appium

1. Comando para rodar o servidor do appium

```bash
appium --base-path=/wd/hub
```
__obs:__ Se houver erro referente ao appium, entre na documentação do appium [Migrating from Appium 1.x to Appium 2.x](https://appium.io/docs/en/2.0/guides/migrating-1-to-2/#image-analysis-features-moved-to-plugin)

2. Configurar o __Appium Inspector__ com os mesmos dados do arquivo ```wdio.conf.js```. Exemplo:

i. automationName se ```UIAutomator2``` abre o aplicativo no appium inspector, se for ```flutter``` abre apenas a aplicação no emulador

```bash
{
  "platformName": "Android",
  "appium:automationName": "flutter",
  "appium:platformVersion": "12",
  "appium:deviceName": "emulator-5554",
  "appium:app": "C:\\Users\\{users}\\OneDrive\\Documents\\TemplateAutomacaoAppiumFlutterDriverEJS\\flutter_application\\build\\app\\outputs\\apk\\debug\\app-debug.apk",
  "appium:appPackage": "com.example.flutter_application",
  "appium:appActivity": "com.example.flutter_application.MainActivity",
  "appium:noReset": true
}
```

ii. Se ainda houver dúvidas, consulte as documentações do appium e appium inspector

iii. configurado o appium inspector, salve a configuração e se desejar rodar a aplicação com inspector clique no botão ```Start Session```
    
a. ATENÇÃO!!: Antes de iniciar a sessão, deve iniciar o servidor do appium com o comando abaixo:
   
```bash
appium --base-path=/wd/hub
```

#### Comandos
 
1. Para rodar os testes, mas deve certificar de que o servidor do appium esteja rodando:

```bash
cd TemplateAutomacaoAppiumFlutterDriverEJS/Tests
npm run wdio
```
2. Para gerar o report no allure, rode o comando. Caso o report não for gerado automaticamente

```bash
cd TemplateAutomacaoAppiumFlutterDriverEJS/Tests
npm run allure-report
```

____________________________________________
