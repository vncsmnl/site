---
banner_alt: The SOLID Design Principles
banner: https://images.unsplash.com/photo-1598668724808-d08ede183e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
title_prefix: SOLID
title: The SOLID Design Principles
description: Os primeiros 5 princípios do design orientado a objeto
date: '2023-06-29'
---

SOLID é um acrônimo de cinco princípios de design de software orientado a objetos, compilados por Robert C. Martin. O foco é orientar a estrutura de classes e o fluxo de dependências para facilitar a manutenção de sistemas em crescimento.

Quando o projeto é estruturado no estilo orientado a objetos, os componentes precisam interagir sem gerar acoplamento rígido. Vou destrinchar as cinco regras com pragmatismo.

### SRP: Single-responsibility Principle (Responsabilidade Única)

Uma classe tem um motivo para mudar. Se o objeto gerencia a conexão com o banco de dados e também formata um relatório em tela, existe um problema de fronteira. Separe os domínios. No exemplo de código, a classe do carro expõe a locomoção. O ato de dirigir fica isolado na entidade do motorista.

### OCP: Open-closed Principle (Aberto-Fechado)

O design permite adicionar comportamento estendendo a base de código, sem modificar arquivos que já funcionam em produção. Você cria classes derivadas ou implementa interfaces em vez de encher a classe base de blocos condicionais. Um carro esportivo estende o contrato de um carro base, injetando o comportamento de aceleração específica.

### LSP: Liskov Substitution Principle (Substituição de Liskov)

Tipos derivados são substituíveis por seus tipos base. Se o sistema espera a abstração de um veículo, você injeta um carro popular ou esportivo e a execução flui sem quebrar o contrato. O subtipo respeita a assinatura e as premissas do tipo original.

### ISP: Interface Segregation Principle (Segregação de Interface)

Clientes não são forçados a depender de métodos que não utilizam. Interfaces largas geram ruído e acoplamento sem necessidade. É viável dividir os contratos por escopo de uso. Uma interface dita a locomoção e uma interface separada dita o uso do rádio.

### DIP: Dependency Inversion Principle (Inversão de Dependência)

Módulos de alto nível não dependem de implementações de baixo nível. Ambos dependem de abstrações. O motorista não é acoplado aos cilindros do motor de uma marca em específico. Ele depende da interface genérica de direção.

---

Abaixo, estruturei o código em Python usando tipagem estática e classes abstratas (`abc`) para sair do modelo inicial e ilustrar a engenharia de fato.

```python
from abc import ABC, abstractmethod

# SRP: A interface Veiculo foca na movimentação.
# ISP: Não forçamos métodos como "ligar_radio" na interface base.
class Veiculo(ABC):
    @abstractmethod
    def andar(self) -> None:
        pass

class Carro(Veiculo):
    def andar(self) -> None:
        print("O carro está em movimento.")

# OCP: Criamos um comportamento estendendo a abstração, sem alterar a classe Carro.
class CarroEsportivo(Veiculo):
    def andar(self) -> None:
        print("O carro esportivo está acelerando.")

# ISP: Funcionalidades adjacentes ganham suas próprias interfaces.
class AparelhoDeSom(ABC):
    @abstractmethod
    def ligar_radio(self) -> None:
        pass

class CarroComSom(Veiculo, AparelhoDeSom):
    def andar(self) -> None:
        print("O carro está em movimento.")
    
    def ligar_radio(self) -> None:
        print("O rádio está operando.")

# DIP & SRP: O motorista depende da abstração (Veiculo), não da implementação concreta.
class Motorista:
    def __init__(self, veiculo: Veiculo):
        self.veiculo = veiculo

    def dirigir(self) -> None:
        self.veiculo.andar()

# LSP: Classes que implementam Veiculo operam na função base sem efeitos colaterais.
def iniciar_trajeto(veiculo: Veiculo) -> None:
        veiculo.andar()

# Exemplo de uso
carro_padrao = Carro()
carro_veloz = CarroEsportivo()

motorista_um = Motorista(carro_padrao)
motorista_um.dirigir() 

motorista_dois = Motorista(carro_veloz)
motorista_dois.dirigir()

iniciar_trajeto(carro_padrao)
iniciar_trajeto(carro_veloz)

```