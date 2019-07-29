{% include _variables.md %}
{% assign _ClassName = include.ClassName %}
{% assign _Constructors = include.Constructors %}
{% assign _ConstructorsInfo = include.ConstructorsInfo %}
{% assign _ConstructorsNotes = include.ConstructorsNotes %}
{% assign _CodeList = include.CodeList %}
{% assign _UseDerivedClassName = include.UseDerivedClassName | default: 'false' %}

### Constructors

<table class="table" markdown="0">
<tbody>
{% for Constructor in _Constructors %}
{% assign index = forloop.index | minus: 1 %}
{% assign note = _ConstructorsNotes[index] %}


{% assign _DerivedClassName = _ClassName %}
{% if _UseDerivedClassName =='true' %}
{% assign _SubClassName = _ConstructorsInfo[index]|split:Delim2| first| strip%}
{% assign _DerivedClassName = _DerivedClassName | append:'.' | append:_SubClassName %}
{% endif %}


{% assign Id = _DerivedClassName| replace: '.', ''|append:index %}
  <tr>
  <td><a href="#{{Id}}">{% include ConstructorHeader.md name=_DerivedClassName params=Constructor tag='span' %}</a></td>
  <td>{{note}}</td>
  </tr>
{% endfor %}

</tbody>
</table>

### Overloads

{% for Constructor in _Constructors %}
{% assign index = forloop.index | minus: 1 %}
{% assign Data = _ConstructorsInfo[index] %}

{% assign _DerivedClassName = _ClassName %}
{% if _UseDerivedClassName =='true' %}
{% assign _SubClassName = Data|split:Delim2| first| strip %}
{% assign _DerivedClassName = _DerivedClassName | append:'.' | append:_SubClassName %}
{% assign Data = Data |split:Delim2| shift |join:Delim2%}
{% endif %}

{% assign Code = _CodeList[index] %}
{% assign Id = _DerivedClassName| replace: '.', ''|append:index %}

{% include Constructor.md code=Code id=Id ClassName=_DerivedClassName header=Constructor data=Data %}
 
{% endfor %}