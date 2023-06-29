---
banner_alt: The SOLID Design Principles
banner: https://images.unsplash.com/photo-1598668724808-d08ede183e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
title_prefix: SOLID
title: The SOLID Design Principles
description: Os primeiros 5 princípios do design orientado a objeto
date: '2023-06-29'
---

## Início

S.O.L.I.D é uma sigla que lembra cinco regras importantes para criar programas de computador usando uma forma de programar chamada **programação orientada a objetos**. Essa forma de programar é como se você criasse vários objetos que podem se comunicar e fazer coisas diferentes. Por exemplo, você pode ter um objeto que representa um carro, outro que representa um motorista, outro que representa uma estrada, e assim por diante.

As regras do S.O.L.I.D são:

- **S** de **Single-responsibility principle** (princípio da responsabilidade única): cada objeto deve ter apenas uma responsabilidade, ou seja, fazer apenas uma coisa bem feita. Por exemplo, o objeto carro deve saber como andar, mas não deve saber como dirigir. Isso é responsabilidade do objeto motorista.

- **O** de **Open-closed principle** (princípio do aberto-fechado): cada objeto deve ser aberto para ser extendido, mas fechado para ser modificado. Isso significa que você pode criar novos objetos a partir de outros objetos, mas sem mudar o que eles já fazem. Por exemplo, você pode criar um objeto carro esportivo a partir do objeto carro, mas sem mudar como o carro anda.

- **L** de **Liskov substitution principle** (princípio da substituição de Liskov): cada objeto deve poder ser substituído por outro objeto que tenha a mesma responsabilidade. Isso significa que você pode usar qualquer tipo de carro no lugar de outro carro, desde que eles façam a mesma coisa. Por exemplo, você pode usar um carro esportivo ou um carro popular para levar o motorista até a estrada.

- **I** de **Interface segregation principle** (princípio da segregação de interface): cada objeto deve ter apenas as interfaces que precisa para se comunicar com outros objetos. Uma interface é como um contrato que diz o que um objeto pode fazer e como ele pode fazer. Por exemplo, o objeto carro pode ter uma interface que diz como ele anda, mas não precisa ter uma interface que diz como ele liga o rádio. Isso é irrelevante para outros objetos.

- **D** de **Dependency inversion principle** (princípio da inversão de dependência): cada objeto deve depender de abstrações e não de detalhes. Uma abstração é algo mais geral e simples, enquanto um detalhe é algo mais específico e complexo. Por exemplo, o objeto motorista deve depender do objeto carro, mas não dos detalhes de como o carro funciona por dentro. Isso é abstrair o carro.

Essas regras ajudam a criar programas mais fáceis de entender, adaptar e melhorar. Elas foram criadas por um programador chamado Robert C. Martin (Tio Bob) no ano 2000 e são usadas por muitos programadores no mundo todo.

```python # Princípio da Responsabilidade Única (SRP)
class Carro:
    def andar(self):
        print("O carro está andando.")

class Motorista:
    def dirigir(self, carro):
        carro.andar()

# Princípio do Aberto-Fechado (OCP)
class CarroEsportivo(Carro):
    def andar(self):
        print("O carro esportivo está andando rápido.")

# Princípio da Substituição de Liskov (LSP)
def levar_carro_ate_estrada(carro: Carro):
    carro.andar()

# Princípio da Segregação de Interface (ISP)
class Carro:
    def andar(self):
        pass

class CarroComRadio:
    def ligar_radio(self):
        print("O rádio está ligado.")

# Princípio da Inversão de Dependência (DIP)
class Motorista:
    def __init__(self, carro: Carro):
        self.carro = carro

    def dirigir(self):
        self.carro.andar()

# Exemplo de uso
carro = Carro()
carro_esportivo = CarroEsportivo()
estrada = Estrada()

motorista = Motorista(carro)
motorista.dirigir()  # O motorista dirige o carro

motorista = Motorista(carro_esportivo)
motorista.dirigir()  # O motorista dirige o carro esportivo

levar_carro_ate_estrada(carro)  # Levando um carro até a estrada
levar_carro_ate_estrada(carro_esportivo)  # Levando um carro esportivo até a estrada
```