{% include _variables.md %}
{% assign rows = include.data | split: Delim2 %}
<table class="table" markdown="0">
<thead>
<tr>
<th>Param Name</th>
<th>Type</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
{% for row in rows %}
  <tr>
  {% assign cols = row | split: Delim1 %}
  {% for col in cols %}
  {% if forloop.index == 2 %}
  {% assign FirstChar = col | slice: 0 %}
  {% assign FirstCharUpper = FirstChar | upcase %}
  {% if FirstChar == FirstCharUpper %}
  <td class="text-teal font-weight-bold">  
  {{col}}
  </td>
  {% else %}
  <td class="text-primary font-weight-bold">
  {{col}}
  </td>
  {% endif %}
  {% else %}
  <td>
  {{col}}
  </td>
  {% endif %}
  
{% endfor %}
  </tr>
{% endfor %}

</tbody>
</table>