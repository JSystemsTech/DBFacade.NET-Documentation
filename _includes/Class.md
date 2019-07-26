{% include _variables.md %}
{% assign ClassName = include.ClassName %}
{% assign Constructors = include.Constructors %}
{% assign ConstructorsInfo = include.ConstructorsInfo %}
{% assign ConstructorsNotes = include.ConstructorsNotes %}
{% assign CodeList = include.CodeList %}

### Constructors

<table class="table" markdown="0">
<tbody>
{% for Constructor in Constructors %}
{% assign index = forloop.index | minus: 1 %}
{% assign note = ConstructorsNotes[index] %}
{% assign Id = ClassName|append:index %}
  <tr>
  <td><a href="#{{Id}}">{% include ConstructorHeader.md name=ClassName params=Constructor tag='span' %}</a></td>
  <td>{{note}}</td>
  </tr>
{% endfor %}

</tbody>
</table>

### Overloads

{% for Constructor in Constructors %}
{% assign index = forloop.index | minus: 1 %}
{% assign Data = ConstructorsInfo[index] %}
{% assign Code = CodeList[index] %}
{% assign Id = ClassName|append:index %}

{% include Constructor.md code=Code id=Id ClassName=ClassName header=Constructor data=Data %}
 
{% endfor %}