{% assign code = include.code %}
{% assign language = include.language %}
{% assign title = include.title | default: 'Example' %}
{% assign type = include.type| default: include.language %}
{% assign BaseId = include.id | default: "now" | date: "%N" %}
<div markdown="0">
<h5>{{title}}</h5>
<div class="card">
<div class="card-header p-2">
<div class="row">
<div class="col">
<span class="h5">{{type}}</span>
</div>
<div class="col">
<span class="float-right">
<button id="copybutton{{ BaseId }}" class="m-0 btn btn-sm btn-primary" data-target="#code{{ BaseId }}">
Copy to clipboard
</button>
</span>
</div>
</div>
</div>
<div class="card-body p-0">
<textarea id="code{{ BaseId }}" class="d-none" readonly>{{ code | xml_escape }}</textarea>
<div markdown="block">
```{{ language }} 
{{ code }}
```
</div>	
</div>
</div>
<script type="text/javascript">
$(document).ready(function(){
	$.WebUtils.CopyButton($('#copybutton{{ BaseId }}'));
});
</script>
</div>
