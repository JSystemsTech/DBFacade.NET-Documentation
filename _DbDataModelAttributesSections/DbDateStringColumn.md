---
title: DbDateStringColumn
# Set the display order for this section
order: 2
# Specify the layout for this section
---
{% include Documentation/DataModels/Variables.md %}

{% assign ClassName = 'DbDateStringColumn' %}

{% assign ParamDateFormat = 'dateFormat' %}
{% assign ParamDateFormatInfo = ParamDateFormat | append: Delim1 | append: 'string' | append: Delim1 | append: 'string format of date value'  %}

{% assign Constructor1 = ParamName | append: Delim1 | append: ParamDateFormat %}
{% assign Constructor2 = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDateFormat %}
{% assign Constructor3 = ParamName | append: Delim1 | append: ParamDefaultValue | append: Delim1 | append: ParamDateFormat %}
{% assign Constructor4 = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDefaultValue | append: Delim1 | append: ParamDateFormat %}

{% assign ConstructorsStr = Constructor1 | append: Delim2 | append: Constructor2 | append: Delim2 | append: Constructor3| append: Delim2 | append: Constructor4 %}
{% assign Constructors =  ConstructorsStr | split: Delim2 %}

{% assign Constructor1Info = ParamNameInfo | append: Delim2 | append: ParamDateFormatInfo %}
{% assign Constructor2Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: ParamDateFormatInfo %}
{% assign Constructor3Info = ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo | append: Delim2 | append: ParamDateFormatInfo %}
{% assign Constructor4Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo | append: Delim2| append: ParamDateFormatInfo %}

{% assign ConstructorsInfoStr = Constructor1Info | append: Delim3 | append: Constructor2Info | append: Delim3 | append: Constructor3Info| append: Delim3 | append: Constructor4Info %}
{% assign ConstructorsInfo =  ConstructorsInfoStr | split: Delim3 %}

{% assign Constructor1Notes = 'Basic constructor' %}
{% assign Constructor2Notes = 'Basic constructor with DbMethod specific binding' %}
{% assign Constructor3Notes = 'Basic constructor with default value' %}
{% assign Constructor4Notes = 'Basic constructor with DbMethod specific binding and default value' %}

{% assign ConstructorsNotesStr = Constructor1Notes | append: Delim1 | append: Constructor2Notes | append: Delim1 | append: Constructor3Notes| append: Delim1 | append: Constructor4Notes %}
{% assign ConstructorsNotes =  ConstructorsNotesStr | split: Delim1 %}

{%- capture code1 -%}
	[DbDateStringColumn("SomeDbColumnName","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code2 -%}
	[DbDateStringColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code3 -%}
	[DbDateStringColumn("SomeDbColumnName", "01/01/1971","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code4 -%}
	[DbDateStringColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "01/01/1971","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{% assign CodeStr = code1 | append: DelimCode | append: code2 | append: DelimCode | append: code3 | append: DelimCode | append: code4 %}
{% assign CodeList =  CodeStr | split: DelimCode %}

{% include Class.md ClassName=ClassName Constructors=Constructors ConstructorsInfo=ConstructorsInfo ConstructorsNotes=ConstructorsNotes CodeList=CodeList %}
