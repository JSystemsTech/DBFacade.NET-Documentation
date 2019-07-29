{% include Documentation/DataModels/Variables.md %}

{% assign DefaultType = include.DefaultType %}
{% assign SubClassName = include.SubClassName | default: ''%}

{{SubClassName| append: Delim2 | append: ParamNameInfo | append: Delim2 | append: DefaultType}}
{{DelimType}}
{{ SubClassName|append: Delim2 | append: ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: DefaultType }}