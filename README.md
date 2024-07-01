# UART

Comecei esse projeto com o intuito de testar a comunicação serial com alguns dispositivos embarcados, usando conversores seriais TTL-USB como o CP2102, CH340G e o FT232RL.Fazer dump da memoria flash usando o CH341A e o flashrom.

## 💾 Dispositivos e programas utilizados

**Dispositivos:**

- Multímetro (para testar continuidade)
- Clipe SOIC8
- Coversores seriais TTL-USB
  - CP2102
  - CH340G
  - FT232RL
- Programador de memória flash
  - CH341A

**Programas:**

- picocom
- flashrom

## Comandos

Monitorar porta serial:

```bash
picocom --logfile router-boot.txt -b 115200 /dev/ttyUSB0
```

## Projetos semelhantes

- [TL-WR841N](https://github.com/adamhlt/TL-WR841N)