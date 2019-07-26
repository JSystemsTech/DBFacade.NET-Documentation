---
title: DbEnumerableColumn
# Set the display order for this section
order: 3
# Specify the layout for this section
---
{% include Documentation/DataModels/Variables.md %}
{% assign ClassName = 'DbEnumerableColumn' %}

{% assign ParamDelimiter = 'delimiter' %}
{% assign ParamDelimiterInfo = ParamDelimiter | append: Delim1 | append: 'char' | append: Delim1 | append: 'delimiter to split string value'  %}

{% assign Constructor1 = ParamName %}
{% assign Constructor2 = ParamDBMethodType | append: Delim1 | append: ParamName %}
{% assign Constructor3 = ParamName | append: Delim1 | append: ParamDefaultValue %}
{% assign Constructor4 = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDefaultValue %}
{% assign Constructor5 = ParamName | append: Delim1 | append: ParamDelimiter %}
{% assign Constructor6 = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDelimiter %}
{% assign Constructor7 = ParamName | append: Delim1 | append: ParamDefaultValue | append: Delim1 | append: ParamDelimiter %}
{% assign Constructor8 = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDefaultValue | append: Delim1 | append: ParamDelimiter %}

{% assign ConstructorsStr = Constructor1 | append: Delim2 | append: Constructor2 | append: Delim2 | append: Constructor3| append: Delim2 | append: Constructor4 | append: Delim2 | append: Constructor5 | append: Delim2 | append: Constructor6 | append: Delim2 | append: Constructor7 | append: Delim2 | append: Constructor8 %}
{% assign Constructors =  ConstructorsStr | split: Delim2 %}

{% assign Constructor1Info = ParamNameInfo %}
{% assign Constructor2Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo %}
{% assign Constructor3Info = ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo %}
{% assign Constructor4Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo %}
{% assign Constructor5Info = ParamNameInfo | append: Delim2 | append: ParamDelimiterInfo %}
{% assign Constructor6Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: ParamDelimiterInfo %}
{% assign Constructor7Info = ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo | append: Delim2 | append: ParamDelimiterInfo %}
{% assign Constructor8Info = ParamDBMethodTypeInfo | append: Delim2 | append: ParamNameInfo | append: Delim2 | append: ParamDefaultValueInfo | append: Delim2| append: ParamDelimiterInfo %}

{% assign ConstructorsInfoStr = Constructor1Info | append: Delim3 | append: Constructor2Info | append: Delim3 | append: Constructor3Info| append: Delim3 | append: Constructor4Info | append: Delim3 | append: Constructor5Info | append: Delim3 | append: Constructor6Info | append: Delim3 | append: Constructor7Info| append: Delim3 | append: Constructor8Info %}
{% assign ConstructorsInfo =  ConstructorsInfoStr | split: Delim3 %}

{% assign Constructor1Notes = 'Basic constructor with default delimiter %2C' %}
{% assign Constructor2Notes = 'Basic constructor with DbMethod specific binding with default delimiter %2C' %}
{% assign Constructor3Notes = 'Basic constructor with default value with default delimiter %2C' %}
{% assign Constructor4Notes = 'Basic constructor with DbMethod specific binding and default value with default delimiter %2C' %}
{% assign Constructor5Notes = 'Basic constructor with user defined delimiter' %}
{% assign Constructor6Notes = 'Basic constructor with DbMethod specific binding with user defined delimiter' %}
{% assign Constructor7Notes = 'Basic constructor with default value with user defined delimiter' %}
{% assign Constructor8Notes = 'Basic constructor with DbMethod specific binding and default value with user defined delimiter' %}

{% assign ConstructorsNotesStr = Constructor1Notes | append: Delim1 | append: Constructor2Notes | append: Delim1 | append: Constructor3Notes| append: Delim1 | append: Constructor4Notes | append: Delim1 | append: Constructor5Notes | append: Delim1 | append: Constructor6Notes | append: Delim1 | append: Constructor7Notes| append: Delim1 | append: Constructor8Notes%}
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

{%- capture code5 -%}
	[DbDateStringColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "01/01/1971","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code6 -%}
	[DbDateStringColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "01/01/1971","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code7 -%}
	[DbDateStringColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "01/01/1971","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{%- capture code8 -%}
	[DbDateStringColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "01/01/1971","mm/dd/yyyy")]
	public DateTime SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{% assign CodeStr = code1 | append: DelimCode | append: code2 | append: DelimCode | append: code3 | append: DelimCode | append: code4 | append: DelimCode | append: code5 | append: DelimCode | append: code6 | append: DelimCode | append: code7 | append: DelimCode | append: code8%}
{% assign CodeList =  CodeStr | split: DelimCode %}

{% include Class.md ClassName=ClassName Constructors=Constructors ConstructorsInfo=ConstructorsInfo ConstructorsNotes=ConstructorsNotes CodeList=CodeList %}

## Constructors

<table class="table">
<tbody>
<tr><td colspan="3" class="font-weight-bold">Basic with comma delimiter</td></tr>
<tr><td><a href="#DbEnumerableColumn1">DbEnumerableColumn(name)</a></td><td>Basic constructor</td></tr>
<tr><td><a href="#DbEnumerableColumn2">DbEnumerableColumn(dBMethodType, name)</a></td><td>Basic constructor with DbMethod specific binding </td></tr>
<tr><td><a href="#DbEnumerableColumn3">DbEnumerableColumn(name,defaultValue)</a></td><td>Basic constructor with default value</td></tr>
<tr><td><a href="#DbEnumerableColumn4">DbEnumerableColumn(dBMethodType, name,defaultValue)</a></td><td>Basic constructor with DbMethod specific binding and default value</td></tr>

<tr><td colspan="3" class="font-weight-bold">With User defined delimiter</td></tr>
<tr><td><a href="#DbEnumerableColumn5">DbEnumerableColumn(name, delimiter)</a></td><td>Basic constructor</td></tr>
<tr><td><a href="#DbEnumerableColumn6">DbEnumerableColumn(dBMethodType, name, delimiter)</a></td><td>Basic constructor with DbMethod specific binding </td></tr>
<tr><td><a href="#DbEnumerableColumn7">DbEnumerableColumn(name,defaultValue, delimiter)</a></td><td>Basic constructor with default value</td></tr>
<tr><td><a href="#DbEnumerableColumn8">DbEnumerableColumn(dBMethodType, name,defaultValue, delimiter)</a></td><td>Basic constructor with DbMethod specific binding and default value</td></tr>

<tr><td colspan="3" class="font-weight-bold">Array Basic with comma delimiter</td></tr>
<tr><td><a href="#DbEnumerableColumnArray1">DbEnumerableColumn.Array(name)</a></td><td>Basic constructor</td></tr>
<tr><td><a href="#DbEnumerableColumnArray2">DbEnumerableColumn.Array(dBMethodType, name)</a></td><td>Basic constructor with DbMethod specific binding </td></tr>
<tr><td><a href="#DbEnumerableColumnArray3">DbEnumerableColumn.Array(name,defaultValue)</a></td><td>Basic constructor with default value</td></tr>
<tr><td><a href="#DbEnumerableColumnArray4">DbEnumerableColumn.Array(dBMethodType, name,defaultValue)</a></td><td>Basic constructor with DbMethod specific binding and default value</td></tr>

<tr><td colspan="3" class="font-weight-bold">Array With User defined delimiter</td></tr>
<tr><td><a href="#DbEnumerableColumnArray5">DbEnumerableColumn.Array(name, delimiter)</a></td><td>Basic constructor</td></tr>
<tr><td><a href="#DbEnumerableColumnArray6">DbEnumerableColumn.Array(dBMethodType, name, delimiter)</a></td><td>Basic constructor with DbMethod specific binding </td></tr>
<tr><td><a href="#DbEnumerableColumnArray7">DbEnumerableColumn.Array(name,defaultValue, delimiter)</a></td><td>Basic constructor with default value</td></tr>
<tr><td><a href="#DbEnumerableColumnArray8">DbEnumerableColumn.Array(dBMethodType, name,defaultValue, delimiter)</a></td><td>Basic constructor with DbMethod specific binding and default value</td></tr>

<tr><td colspan="3" class="font-weight-bold">List Basic with comma delimiter</td></tr>
<tr><td><a href="#DbEnumerableColumnList1">DbEnumerableColumn.List(name)</a></td><td>Basic constructor</td></tr>
<tr><td><a href="#DbEnumerableColumnList2">DbEnumerableColumn.List(dBMethodType, name)</a></td><td>Basic constructor with DbMethod specific binding </td></tr>
<tr><td><a href="#DbEnumerableColumnList3">DbEnumerableColumn.List(name,defaultValue)</a></td><td>Basic constructor with default value</td></tr>
<tr><td><a href="#DbEnumerableColumnList4">DbEnumerableColumn.List(dBMethodType, name,defaultValue)</a></td><td>Basic constructor with DbMethod specific binding and default value</td></tr>

<tr><td colspan="3" class="font-weight-bold">List With User defined delimiter</td></tr>
<tr><td><a href="#DbEnumerableColumnList5">DbEnumerableColumn.List(name, delimiter)</a></td><td>Basic constructor</td></tr>
<tr><td><a href="#DbEnumerableColumnList6">DbEnumerableColumn.List(dBMethodType, name, delimiter)</a></td><td>Basic constructor with DbMethod specific binding </td></tr>
<tr><td><a href="#DbEnumerableColumnList7">DbEnumerableColumn.List(name,defaultValue, delimiter)</a></td><td>Basic constructor with default value</td></tr>
<tr><td><a href="#DbEnumerableColumnList8">DbEnumerableColumn.List(dBMethodType, name,defaultValue, delimiter)</a></td><td>Basic constructor with DbMethod specific binding and default value</td></tr>
</tbody>
</table>

## Overloads

#### DbEnumerableColumn(name)
<a href="#" id="DbEnumerableColumn1" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn("SomeDbColumnName")]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn(dBMethodType, name)
<a href="#" id="DbEnumerableColumn2" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>string</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName")]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn(name, defaultValue)
<a href="#" id="DbEnumerableColumn3" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn("SomeDbColumnName", "str1,str2,str3")]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn(dBMethodType, name, defaultValue)
<a href="#" id="DbEnumerableColumn4" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>Type</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "str1,str2,str3")]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```


#### DbEnumerableColumn(name, delimiter)
<a href="#" id="DbEnumerableColumn5" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn("SomeDbColumnName", ';')]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn(dBMethodType, name, delimiter)
<a href="#" id="DbEnumerableColumn6" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>string</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", ';')]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn(name, defaultValue, delimiter)
<a href="#" id="DbEnumerableColumn7" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn("SomeDbColumnName", "str1;str2;str3", ';')]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn(dBMethodType, name, defaultValue, delimiter)
<a href="#" id="DbEnumerableColumn8" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>Type</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "str1;str2;str3", ';')]
	public IEnumerable<string> SomeDbColumnProperty {get; private set;}
```













#### DbEnumerableColumn.Array(name)
<a href="#" id="DbEnumerableColumnArray1" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array("SomeDbColumnName")]
	public string[] SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.Array(dBMethodType, name)
<a href="#" id="DbEnumerableColumnArray2" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>string</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName")]
	public string[] SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.Array(name, defaultValue)
<a href="#" id="DbEnumerableColumnArray3" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array("SomeDbColumnName", "str1,str2,str3")]
	public string[] SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.Array(dBMethodType, name, defaultValue)
<a href="#" id="DbEnumerableColumnArray4" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>Type</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "str1,str2,str3")]
	public string[] SomeDbColumnProperty {get; private set;}
```


#### DbEnumerableColumn.Array(name, delimiter)
<a href="#" id="DbEnumerableColumnArray5" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array("SomeDbColumnName", ';')]
	public string[] SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.Array(dBMethodType, name, delimiter)
<a href="#" id="DbEnumerableColumnArray6" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>string</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", ';')]
	public string[] SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.Array(name, defaultValue, delimiter)
<a href="#" id="DbEnumerableColumnArray7" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array("SomeDbColumnName", "str1;str2;str3", ';')]
	public string[] SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.Array(dBMethodType, name, defaultValue, delimiter)
<a href="#" id="DbEnumerableColumnArray8" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>Type</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "str1;str2;str3", ';')]
	public string[] SomeDbColumnProperty {get; private set;}
```












#### DbEnumerableColumn.List(name)
<a href="#" id="DbEnumerableColumnList1" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List("SomeDbColumnName")]
	public List<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.List(dBMethodType, name)
<a href="#" id="DbEnumerableColumnList2" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>string</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName")]
	public List<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.List(name, defaultValue)
<a href="#" id="DbEnumerableColumnList3" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.Array("SomeDbColumnName", "str1,str2,str3")]
	public List<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.List(dBMethodType, name, defaultValue)
<a href="#" id="DbEnumerableColumnList4" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>Type</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "str1,str2,str3")]
	public List<string> SomeDbColumnProperty {get; private set;}
```


#### DbEnumerableColumn.List(name, delimiter)
<a href="#" id="DbEnumerableColumnList5" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List("SomeDbColumnName", ';')]
	public List<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.List(dBMethodType, name, delimiter)
<a href="#" id="DbEnumerableColumnList6" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>string</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", ';')]
	public List<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.List(name, defaultValue, delimiter)
<a href="#" id="DbEnumerableColumnList7" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List("SomeDbColumnName", "str1;str2;str3", ';')]
	public List<string> SomeDbColumnProperty {get; private set;}
```

#### DbEnumerableColumn.List(dBMethodType, name, defaultValue, delimiter)
<a href="#" id="DbEnumerableColumnList8" class="sr-only"></a>
<table class="table">
<thead><tr><th>Param Name</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>dBMethodType</td><td>Type</td><td></td></tr>
<tr><td>name</td><td>string</td><td>Name of the data row column</td></tr>
<tr><td>defaultValue</td><td>object</td><td>value type passed in must match property type</td></tr>
<tr><td>delimiter</td><td>char</td><td>delimiter to split string value</td></tr>
</tbody>
</table>
##### Example
```csharp
	[DbEnumerableColumn.List(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", "str1;str2;str3", ';')]
	public List<string> SomeDbColumnProperty {get; private set;}
```