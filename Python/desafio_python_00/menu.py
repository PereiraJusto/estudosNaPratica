menu = """
------------------- MENU ------------------
[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair
------------------------------------------
=> """

saldo = 0
limite = 500
extrato = ""
numero_saques = 0
LIMITE_SAQUES = 3

def depositar(valor, saldo, extrato, /):
    if valor > 0:
        saldo += valor
        extrato += f"Depósito: R$ {valor:.2f}\n"
        print(f"\nDeposito no valor de R$ {valor:.2f} realizado com sucesso.\n")
    else:
        print("\nOperação falhou! O valor informado é invalido.\n")
    return saldo, extrato

def sacar(*, valor, saldo, extrato, limite, numero_saques, LIMITE_SAQUES):
    if valor <= saldo and valor <= limite and numero_saques < LIMITE_SAQUES and valor > 0:
        saldo -= valor
        extrato += f"Saque: R$ {valor:.2f}\n"
        numero_saques += 1
        print(f"\nSaque no valor de R$ {valor:.2f} realizado com sucesso.\n")
    else:
        print("\nOperação falhou! Verifique o valor informado e tente novamente.\n")
    return saldo, extrato, numero_saques

while True:

    opcao = input(menu)

    if opcao == "d":
        valor = float(input("\nInforme o valor do depósito: "))
        saldo, extrato = depositar(valor, saldo, extrato)

    elif opcao == "s":
        valor = float(input("\nInforme o valor do saque: "))
        saldo, extrato, numero_saques = sacar(
            valor=valor,
            saldo=saldo,
            extrato=extrato,
            limite=limite,
            numero_saques=numero_saques,
            LIMITE_SAQUES=LIMITE_SAQUES
        )
        
    elif opcao == "e":
        print("\n================ EXTRATO ================")
        print("Não foram realizadas movimentações." if not extrato else extrato)
        print(f"\nSaldo: R$ {saldo:.2f}")
        print("==========================================")

    elif opcao == "q":
        break

    else:
        print("\nOperação inválida, por favor selecione novamente a operação desejada.\n")