---
title: DbColumnDefault
---
{% include Documentation/DataModels/Variables.md %}


Boolean 
Byte 
Char 
DateTime
Decimal 
Double 
Float 
Guid 
Short
Int 
Long 
UShort 
UInt 
ULong 
String


{% assign ConstructorA = ParamName | append: Delim1 | append: ParamDefaultValue | split: Delim2%}
{% assign ConstructorB = ParamDBMethodType | append: Delim1 | append: ParamName | append: Delim1 | append: ParamDefaultValue | split: Delim2%}

{% assign Constructors =  ConstructorA | concat: ConstructorB  %}
{% assign ConstructorsTypeBase =  Constructors %}

{% assign ConstructorNotesA = 'Basic constructor with default value' | split: Delim1%}
{% assign ConstructorNotesB = 'Basic constructor with DbMethod specific binding and default value' | split: Delim1%}

{% assign ConstructorNotes =  ConstructorNotesA | concat: ConstructorNotesB  %}
{% assign ConstructorNotesTypeBase =  ConstructorNotes %}


{% capture ConstructorInfoBoolean %}
{% include Documentation/DataModels/DbColumnConstructorInfo.md  DefaultType=ParamDefaultValueInfoBoolean SubClassName='Boolean'%}
{% endcapture %}
{% assign ConstructorInfoBoolean = ConstructorInfoBoolean | split: DelimType %}
{% assign ConstructorsInfo =  ConstructorInfoBoolean %}
{% assign Constructors =  Constructors | concat: ConstructorsTypeBase  %}
{% assign ConstructorNotes =  ConstructorNotes | concat: ConstructorNotesTypeBase  %}

{%- capture BooleanExampleA -%}
[DbColumnDefault.Boolean("SomeDbColumnName", True)]
public string SomeDbColumnProperty {get; private set;}
{%- endcapture -%}

{%- capture BooleanExampleB -%}
[DbColumnDefault.Boolean(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", True)]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{% assign BooleanExamples = BooleanExampleA| append: DelimCode| appand: BooleanExampleB | split: DelimCode %}
{% assign ExampleCode = BooleanExamples %}






{% capture ConstructorInfoByte %}
{% include Documentation/DataModels/DbColumnConstructorInfo.md  DefaultType=ParamDefaultValueInfoByte SubClassName='Byte'%}
{% endcapture %}
{% assign ConstructorInfoByte = ConstructorInfoByte | split: DelimType %}
{% assign ConstructorsInfo =  ConstructorsInfo| concat: ConstructorInfoByte %}
{% assign Constructors =  Constructors | concat: ConstructorsTypeBase  %}
{% assign ConstructorNotes =  ConstructorNotes | concat: ConstructorNotesTypeBase  %}

{%- capture ByteExampleA -%}
[DbColumnDefault.Byte("SomeDbColumnName", True)]
public string SomeDbColumnProperty {get; private set;}
{%- endcapture -%}

{%- capture ByteExampleB -%}
[DbColumnDefault.Byte(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", True)]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{% assign ByteExamples = ByteExampleA| append: DelimCode| appand: ByteExampleB | split: DelimCode %}
{% assign ExampleCode = ExampleCode | concat: ByteExamples %}



{% capture ConstructorInfoChar %}
{% include Documentation/DataModels/DbColumnConstructorInfo.md  DefaultType=ParamDefaultValueInfoChar SubClassName='Char'%}
{% endcapture %}
{% assign ConstructorInfoChar = ConstructorInfoChar | split: DelimType %}
{% assign ConstructorsInfo =  ConstructorsInfo| concat: ConstructorInfoChar %}
{% assign Constructors =  Constructors | concat: ConstructorsTypeBase  %}
{% assign ConstructorNotes =  ConstructorNotes | concat: ConstructorNotesTypeBase  %}

{%- capture CharExampleA -%}
[DbColumnDefault.Char("SomeDbColumnName", 'c')]
public string SomeDbColumnProperty {get; private set;}
{%- endcapture -%}

{%- capture CharExampleB -%}
[DbColumnDefault.Char(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", 'c')]
public string SomeDbColumnProperty {get; private set;}	
{%- endcapture -%}

{% assign CharExamples = CharExampleA| append: DelimCode| appand: CharExampleB | split: DelimCode %}
{% assign ExampleCode = ExampleCode | concat: CharExamples %}


{% assign InstanceClassName = 'DbColumnDefault' %}
{% include Class.md ClassName=InstanceClassName Constructors=Constructors ConstructorsInfo=ConstructorsInfo ConstructorsNotes=ConstructorsNotes CodeList=ExampleCode UseDerivedClassName = 'true'%}


