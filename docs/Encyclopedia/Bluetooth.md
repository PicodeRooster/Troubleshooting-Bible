---
title: Bluetooth
type: encyclopedia
tags:
  - networking
  - peripherals
  - security
sources:
  - CompTIA A+
  - Bluetooth SIG
---
# Bluetooth

**Bluetooth** is a short-range wireless communication standard used to exchange data between devices over the 2.4 GHz ISM (Industrial, Scientific, and Medical) frequency band. Governed by the Bluetooth Special Interest Group (SIG), it is widely deployed in personal area networks (PANs) and is standard across consumer electronics, peripherals, and IoT devices worldwide.

## How It Works

Bluetooth uses **Frequency-Hopping Spread Spectrum (FHSS)**, rapidly cycling between frequencies to reduce interference and improve connection reliability. Two distinct radio types serve different use cases:

**Bluetooth Classic (BR/EDR)** operates across 79 channels and supports point-to-point connections. It is optimized for continuous data streaming and is the standard radio protocol behind wireless speakers, headphones, and in-car entertainment systems. It also supports data transfer applications such as mobile printing.

**Bluetooth LE (Low Energy)** operates across 40 channels and is engineered for minimal power consumption. It supports point-to-point, broadcast, and mesh topologies, making it well-suited for IoT sensors, medical devices, and smart peripherals. Bluetooth LE also functions as a positioning technology, enabling devices to determine the presence, distance, and direction of other nearby devices.

## Common Uses

- Audio peripherals (headsets, speakers, in-car systems)
- Input devices (keyboards, mice)
- Mobile data transfer and printing
- IoT sensors and smart home devices
- Indoor location and asset tracking

## Common Issues

- **Pairing failures** — caused by outdated drivers, incorrect passkeys, or RF interference
- **Unstable connections** — drops during audio playback or calls; often resolved by removing and re-pairing the device
- **Device not visible** — toggle Bluetooth off and on, restart both devices; on Android, clearing the Bluetooth cache can also help

## Security Risks

Bluetooth is exploitable in close-range attacks, particularly in high-traffic public environments such as airports and cafes:

- **Bluejacking** — sending unsolicited messages to nearby Bluetooth devices
- **Bluesnarfing** — unauthorized access to a device's data over Bluetooth
- **Bluebugging** — remote hijacking of a device to intercept calls, send messages, or inject malware
