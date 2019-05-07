---
layout: page
title: Documentation
---
{% assign sections = site.sections | sort: 'order' %}
{% for section in sections %}
  {% if section.include != null %}
    {% include {{ section.include }} %}
  {% else %}
    {% include sections/default.html %}
  {% endif %}
{% endfor %}
## Getting Started

## Components
## Database Connection
## DbMethods

## Data Models

### DbDataModel

### DbParamModel
#### Builtin Simple Parameters
#### Validation

### DbResponse

## Data Models Attributes


## Validation

## Facade Files
### DomainFacade
### DomainManager

### CustomFacade

