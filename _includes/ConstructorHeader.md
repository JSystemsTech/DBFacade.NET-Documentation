{% include _variables.md %}
{% assign name = include.name %}
{% assign tag = include.tag |default: 'h4' %}
{% assign params = include.params | split: Delim1 %}
<{{tag}} markdown="0">
<span class="text-purple">{{ name }}</span>
<span class="text-secondary">(</span>

{% for member in params %}
{% if forloop.last == true %}
<span class="text-primary">{{ member }}</span>
{% else %}
<span class="text-primary">{{ member }}</span>
<span class="text-secondary pr-1">,</span>
{% endif %}
{% endfor %}
<span class="text-secondary">)</span>
</{{tag}}>