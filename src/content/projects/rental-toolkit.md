---
title: Rental Toolkit
description: Django-Anwendung zur Verwaltung von Pachten und Abrechnungen
status: progress
type: Webanwendung
featured: true
year: 2025
pubDatetime: 2026-05-09
thumbnail: '@/assets/images/laptop.jpg'
thumbnailAttribution:
  author: Andras Vas
  authorUrl: https://unsplash.com/@wasdrew?utm_source=felix_hoffmann_portfolio&utm_medium=referral
  source: Unsplash
  sourceUrl: https://unsplash.com/de/fotos/macbook-pro-turned-on-Bd7gNnWJBkU?utm_source=felix_hoffmann_portfolio&utm_medium=referral
githubUrl: https://github.com/felixhoffmnn/rental-toolkit
tags:
  - Django
  - HTMX
  - Celery
  - Tailwind CSS
---

**Rental Toolkit** ist eine Django-Anwendung zur Verwaltung von Pachtverträgen, Objekten, Kontakten, Belegen, Rechnungen und Jahresabrechnungen. Die Anwendung bildet einen konkreten Verwaltungsprozess ab und verbindet Stammdaten, Vertragsdaten und Dokumente.

Kontakte und Objekte können gepflegt, Pachtverträge mit Preisverläufen verknüpft und Belege den jeweiligen Objekten zugeordnet werden. Aus diesen Daten entstehen Jahresabrechnungen und Rechnungen. Abrechnungsstände werden dabei als Snapshots gespeichert, damit erzeugte Dokumente nachvollziehbar bleiben.

Technisch basiert das Projekt auf Django, HTMX, Tailwind CSS und Django Cotton. Längere Aufgaben wie PDF-Erzeugung und E-Mail-Versand laufen über Celery und Redis. Dokumente werden mit Typst gerendert; Rechnungen verwenden `invoice-toolkit`.
