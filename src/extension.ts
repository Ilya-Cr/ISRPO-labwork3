// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) { // вызов функции при активации плагина

	console.log('Congratulations, your extension "my-first-extension-binstep" is now active!'); // Сообщение, что плагин работает

	const disposable = vscode.commands.registerCommand('my-first-extenshion-binstep.binStep',  () => {
		// Получение значений из settings.json, иначе - значения по умолчанию
		const num = vscode.workspace.getConfiguration('BinStepSettings').get('num', 2);
		const exponent = vscode.workspace.getConfiguration('BinStepSettings').get('exponent', 2026);

		// Функция для перевода числа в строку, состоящую из цифр, разделённых ', '
		function bigIntToDigitArray(bigInt: bigint) {
			return bigInt.toString().split('').join(", ");
		} 
		const bignum = BigInt(num) ** BigInt(exponent); // Вычисление степени exponent числа num
		const string = bigIntToDigitArray(bignum); // Запись результата функции
		vscode.window.showInformationMessage('Hold your grade:', string); // Вывод числа в виде сообщения в правом нижнем углу VS Code
		vscode.env.clipboard.writeText(string); // Копирование значения в буфер обмена
		vscode.window.showInformationMessage('The number has been copied to your clipboard'); // Сообщение о копировании в буфер обмена
	});

	context.subscriptions.push(disposable); // Удаление команды при деактивации плагина
}

// This method is called when your extension is deactivated
export function deactivate() {}
