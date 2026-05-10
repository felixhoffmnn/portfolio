---
title: Invoice Toolkit
description: Typst-basierte Rechnungen und Briefe aus Konfigurationsdateien
status: progress
type: Open-Source-Tooling
featured: true
year: 2026
pubDatetime: 2026-05-09
thumbnail: '@/assets/images/invoice-toolkit-preview.png'
githubUrl: https://github.com/felixhoffmnn/invoice-toolkit
tags:
  - Python
  - Typst
  - Pydantic
  - CLI
---

**Invoice Toolkit** ist ein Python-Paket zum Erstellen von Rechnungen und Briefen aus strukturierten Dateien. Stammdaten, Kunden und Rechnungspositionen werden als YAML, CSV oder Markdown gepflegt; die Ausgabe wird mit Typst als PDF gerendert.

Die Eingaben werden mit Pydantic validiert. Für Editor-Unterstützung kann das Paket JSON-Schemas für die Konfigurationsdateien erzeugen. Neben klassischen PDF-Rechnungen unterstützt es Briefe, Umsatzsteuerfälle, XRechnung-XML und die Nutzung über `uvx`.

Das Projekt ist kein vollständiges Buchhaltungssystem. Es konzentriert sich auf Vorlagen, Validierung und reproduzierbare Dokumentgenerierung. `rental-toolkit` nutzt das Paket ebenfalls für die Erstellung von Rechnungs-PDFs.
