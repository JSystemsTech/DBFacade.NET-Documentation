{% assign id = include.id %}
{% assign ClassName = include.ClassName %}
{% assign header = include.header %}
{% assign data = include.data %}
{% assign code = include.code %}
{% assign CodeId = id | append: 'Example' %}

{% include ScrollAnchor.md id=id%}
{% include ConstructorHeader.md name=ClassName params=header%}
{% include ConstructorTable.md data=data%}
{% include CodeBlockCSharp.md code=code id=CodeId%}