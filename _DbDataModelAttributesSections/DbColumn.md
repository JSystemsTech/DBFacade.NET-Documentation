---
title: DbColumn
# Set the display order for this section
order: 1
# Specify the layout for this section
---
{% include Documentation/DataModels/Variables.md %}

{% assign ClassName = 'DBColumn' %}

{% assign Constructor1 = ParamName %}
{% assign Constructor2 = ParamDBMethodType | append: Delim1 | append: ParamName %}
{% assign Constructor3 = ParamName | append: Delim1 | append: ParamDefaultValue %}
{% assign Constructor4 = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDefaultValue %}

{% assign ConstructorsStr = Constructor1 | append: Delim2 | append: Constructor2 | append: Delim2 | append: Constructor3| append: Delim2 | append: Constructor4 %}
{% assign Constructors =  ConstructorsStr | split: Delim2 %}

{% assign Constructor1Info = ParamNameInfo %}
{% assign Constructor2Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo %}
{% assign Constructor3Info = ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo %}
{% assign Constructor4Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo %}

{% assign ConstructorsInfoStr = Constructor1Info | append: Delim3 | append: Constructor2Info | append: Delim3 | append: Constructor3Info| append: Delim3 | append: Constructor4Info %}
{% assign ConstructorsInfo =  ConstructorsInfoStr | split: Delim3 %}

{% assign Constructor1Notes = 'Basic constructor' %}
{% assign Constructor2Notes = 'Basic constructor with DbMethod specific binding' %}
{% assign Constructor3Notes = 'Basic constructor with default value' %}
{% assign Constructor4Notes = 'Basic constructor with DbMethod specific binding and default value' %}

{% assign ConstructorsNotesStr = Constructor1Notes | append: Delim1 | append: Constructor2Notes | append: Delim1 | append: Constructor3Notes| append: Delim1 | append: Constructor4Notes %}
{% assign ConstructorsNotes =  ConstructorsNotesStr | split: Delim1 %}

{%- capture code1 -%}
[DbColumn("SomeDbColumnName")]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code2 -%}
[DbColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName")]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code3 -%}
[DbColumn("SomeDbColumnName", "my default value")]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code4 -%}
[DbColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "my default value")]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{% assign CodeStr = code1 | append: DelimCode | append: code2 | append: DelimCode | append: code3 | append: DelimCode | append: code4 %}
{% assign CodeList =  CodeStr | split: DelimCode %}

{% include Class.md ClassName=ClassName Constructors=Constructors ConstructorsInfo=ConstructorsInfo ConstructorsNotes=ConstructorsNotes CodeList=CodeList %}


