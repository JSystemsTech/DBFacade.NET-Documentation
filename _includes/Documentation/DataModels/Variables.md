{% include _variables.md %}

{% assign ParamName = 'name' %}
{% assign ParamDBMethodType = 'dBMethodType' %}
{% assign ParamDefaultValue = 'defaultValue' %}
{% assign ParamDefaultValueText = 'Value type passed in must match property type' %}

{% assign ParamNameInfo = ParamName | append: Delim1 | append: TypeString | append: Delim1 | append: 'Name of the data row column' %}
{% assign ParamDBMethodTypeInfo = ParamDBMethodType | append: Delim1 | append: TypeType | append: Delim1 | append: ''  %}

{% assign ParamDefaultValueInfo = ParamDefaultValue | append: Delim1 | append: TypeObject | append: Delim1 | append: ParamDefaultValueText %}
{% assign ParamDefaultValueInfoBoolean = ParamDefaultValue | append: Delim1 | append: TypeBoolean | append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoByte = ParamDefaultValue | append: Delim1 | append: TypeByte | append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoChar = ParamDefaultValue | append: Delim1 | append: TypeChar | append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoDateTime = ParamDefaultValue | append: Delim1 | append: TypeDateTime | append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoDecimal = ParamDefaultValue | append: Delim1 | append: TypeDecimal| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoDouble = ParamDefaultValue | append: Delim1 | append: TypeDouble | append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoFloat = ParamDefaultValue | append: Delim1 | append: TypeFloat | append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoGuid = ParamDefaultValue | append: Delim1 | append: TypeGuid| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoShort = ParamDefaultValue | append: Delim1 | append: TypeShort| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoInt = ParamDefaultValue | append: Delim1 | append: TypeInt| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoLong = ParamDefaultValue | append: Delim1 | append: TypeLong| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoUShort = ParamDefaultValue | append: Delim1 | append: TypeUShort| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoUInt = ParamDefaultValue | append: Delim1 | append: TypeUInt| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoULong = ParamDefaultValue | append: Delim1 | append: TypeULong| append: Delim1 | append: ParamDefaultValueText  %}
{% assign ParamDefaultValueInfoString = ParamDefaultValue | append: Delim1 | append: TypeString| append: Delim1 | append: ParamDefaultValueText  %}
