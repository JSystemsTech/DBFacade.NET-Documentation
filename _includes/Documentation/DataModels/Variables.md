{% include _variables.md %}

{% assign ParamName = 'name' %}
{% assign ParamDBMethodType = 'dBMethodType' %}
{% assign ParamDefaultValue = 'defaultValue' %}

{% assign ParamNameInfo = ParamName | append: Delim1 | append: 'string' | append: Delim1 | append: 'Name of the data row column' %}
{% assign ParamDBMethodTypeInfo = ParamDBMethodType | append: Delim1 | append: 'Type' | append: Delim1 | append: ''  %}
{% assign ParamDefaultValueInfo = ParamDefaultValue | append: Delim1 | append: 'object' | append: Delim1 | append: 'Value type passed in must match property type'  %}
