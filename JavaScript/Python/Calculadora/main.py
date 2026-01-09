def calcular(operacao):
    numeros = []
    operadores = []
    numero_atual = ""

    # Separar números e operadores
    for char in operacao:
        if char.isdigit() or char == ".":
            numero_atual += char  # Construir número com mais de um dígito ou decimal
        else:
            if numero_atual == "":
                # Impede erro se começar com operador
                return "Erro!"
            numeros.append(float(numero_atual))
            operadores.append(char)
            numero_atual = ""
    if numero_atual != "":
        numeros.append(float(numero_atual))

    # Primeiro *, /
    i = 0
    while i < len(operadores):
        if operadores[i] == "*":
            numeros[i] = numeros[i] * numeros[i+1]
            numeros.pop(i+1)
            operadores.pop(i)
        elif operadores[i] == "/":
            if numeros[i+1] == 0:
                return "Erro: divisão por 0!"
            numeros[i] = numeros[i] / numeros[i+1]
            numeros.pop(i+1)
            operadores.pop(i)
        else:
            i += 1

    # Depois + e -
    resultado = numeros[0]
    for j, op in enumerate(operadores):
        if op == "+":
            resultado += numeros[j+1]
        elif op == "-":
            resultado -= numeros[j+1]

    return resultado

negrito = "\033[1m"
normal = "\033[0m"

def menu(operacao="", resultado=""):
    print(f"\n{negrito}=== CALCULADORA DO RAFAEL ==={normal}")
    print(f"Operação: {operacao}")
    print(f"Resultado: {resultado}\n")

    teclado = [
        [f"   {negrito}C{normal}      ", f"{negrito}AC{normal}         ", "/"],
        ["1", "2", "3", "+"],
        ["4", "5", "6", "-"],
        ["7", "8", "9", "*"],
        ["", "0", "", "="]
    ]

    for linha in teclado:
        print("".join(f"{item:^7}" for item in linha))


def calculadora():
    operacao_atual = ""  # mantém a operação digitada
    resultado = ""

    while True:
        menu(operacao_atual, resultado)
        entrada = input("\nDigite a operação completa (ex: 12+3*2=) ou 'AC'/'sair': ").strip()

        if entrada.lower() == "sair":
            print("Calculadora encerrada!")
            break

        elif entrada.upper() == "AC":
            operacao_atual = ""
            resultado = ""
            continue

        # Processa operação se terminar com '='
        elif entrada.endswith("="):
            operacao_atual = entrada[:-1]  # guarda a operação sem '='
            resultado = calcular(operacao_atual)
            continue

        else:
            print("Digite a operação completa terminando com '=' ou AC.")




calculadora()
