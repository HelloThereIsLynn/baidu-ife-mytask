## 0216

**要求：**

- 参考示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示    
- 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
- 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
- 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
- 用户可以点击表格列中的“删除”按钮，删掉那一行的数据

删除部分是参照海贼兄弟队写的代码，在此感谢>=<. 新手写的不好~~   
关于target,在http://www.cnblogs.com/leejersey/p/3801452.html中有讲解，
就是把事件加到父级(table)上，触发执行效果。event.target是标准下的事件源,.就是要操作的元素，nodeName用来找标签.sssss