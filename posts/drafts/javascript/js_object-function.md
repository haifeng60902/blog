对象的方法
==========

对象不仅可以有属性，还可以有 _方法_ 。方法也是作为对象的属性存在的：

	var line={
		p1:point1,
		p2:point2
	};
	line.length=function(){
		var x=this.p2.x-this.p1.x;
		var y=this.p2.y-this.p1.y;
		return Math.sqrt(x*x+y*y);
	}; // 为 line 对象添加 length() 方法
	// 访问对象的方法
	var len=line.length();

内置方法
--------

自定义方法
----------