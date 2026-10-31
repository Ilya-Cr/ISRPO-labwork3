# my-first-extension-binstep README

This is the README for extension "my-first-extension-binstep".

## Features

Плагин возводит любое целое число в любую целую степень. Результат вычисления степени по модулю остаётся точным до 2 ** 53 - 1 включительно.\
Значения берутся из `.vscode/settings.json` (Подробнее ниже). Значения (2 и 2026) меняются на нужные\
После ввода команды в командную строку выводится значение числа в правом ниже углу, где все цифры разделены через ', '. Также значение копируется в буфер обмена.

## Extension SettingsThis extension contributes the following settings:

* `BinStepSettings.num`: Число, которое нужно возвести в степень.
* `BinStepSettings.exponent`: Степень, в которую возводится число.

``` json
"configuration": [
      {
        "title": "BinStep Configuration",
        "properties": {
          "BinStepSettings.num": {
            "type": "number",
            "default": 2,
            "description": "Основание степени (число, которое возводится в степень)"
          },
          "BinStepSettings.exponent": {
            "type": "number",
            "default": 2026,
            "description": "Степень, в которую возводится число"
          }
        }
      }
    ]
```

> `.vscode/settings.json`:
```json
/*Значения для вычислений*/
"BinStepSettings.num": 2,
"BinStepSettings.exponent": 2026,
```