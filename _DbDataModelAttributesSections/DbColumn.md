---
title: DbColumn
# Set the display order for this section
order: 1
# Specify the layout for this section
---
DbColumn
#### Basic
```csharp
public class MyDbDataModel{
	[DbColumn("SomeDbColumnName")]
	public string SomeDbColumnProperty {get; private set;}
}    
```
#### Bind to Specific DbMethod
```csharp
public class MyDbDataModel{

	[DbColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName2")]
	public string SomeDbColumnProperty {get; private set;}

}  
```
#### Basic Delimited Value
```csharp
public class MyDbDataModel{

	[DbColumn("SomeDbColumnName", ',')]
	public string[] SomeDbColumnProperty {get; private set;}

}  
```
#### Delimited Value bound to Specific DbMethod
```csharp
public class MyDbDataModel{

	[DbColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName", ',')]
	public string[] SomeDbColumnProperty {get; private set;}

}  
```

#### Basic With Default value
default value must be of same type as property type
```csharp
public class MyDbDataModel{
	[DbColumn("SomeDbColumnName","some default value")]
	public string SomeDbColumnProperty {get; private set;}
}    
```
#### Bind to Specific DbMethod With Default value
default value must be of same type as property type
```csharp
public class MyDbDataModel{

	[DbColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName","some default value")]
	public string SomeDbColumnProperty {get; private set;}

}  
```
#### Basic Delimited Value With Default value
default value must be of same type as property type
```csharp
public class MyDbDataModel{

	[DbColumn("SomeDbColumnName","some default value", ',')]
	public string[] SomeDbColumnProperty {get; private set;}

}  
```
#### Delimited Value bound to Specific DbMethod With Default value
default value must be of same type as property type
```csharp
public class MyDbDataModel{

	[DbColumn(typeof(MyDbMethod.SomeMethod), "SomeDbColumnName","some default value", ',')]
	public string[] SomeDbColumnProperty {get; private set;}

}  
```
