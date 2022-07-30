## React-native from ios

### Env Setting

```
  // before install brew

  1. brew install wacthman
  // install node, npm

  2. npm i -g react-native-cli

  /**
  * if use template
  */
  npm uninstall -g react-native-cli
  npm i -g @react-native-community/cli
  // or
  yarn global add @react-native-community/cli

  3. npx react-native init ProjectName --template react-native-template-typescript --version 0.68.2

  4. install pod
    cd ios
    pod repo update
    pod install

  5. react-native run-ios
```

### Issue

#### cli.function not ...

```
  // cli.function not ...
  0.69 버전에 문제가 존재 0.68.2 버전으로 설치
```

#### [IMPORTANT] ...

```
  // pod install error

  [IMPORTANT]
  Don't forget to include ...

  // M1 에서나는 오류임 (설치 개 오래걸림)

  sudo arch -x86_64 gem install ffi
  arch -x86_64 pod install

  /* reason */
  1. M1은 arm기반이라 arch 명령이 arm64이다. ffi 설치 시 아키텍쳐를 x86_64로 지정해야함
```

#### Could not find a declaration file for module 'styled-components/native'

```
  npm add @types/styled-components-react-native -D
```

#### Cannot find module 'babel-preset-babel-plugin-styled-components' ...

```
  npm install --save-dev babel-plugin-styled-components
```

### Setting

<h1> Styled-components </h1>

```
    npm install --save styled-components
    npm install --save-dev babel-plugin-styled-components @types/styled-components @types/styled-components-react-native

    // babel.config.js

    module.exports = {
    ...
    plugins: ['babel-plugin-styled-components'],
    };
```

<h1></h1>
