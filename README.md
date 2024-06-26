<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2022-03-07 22:38:49
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-05-08 10:31:29
 * @FilePath: \personal_website\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# personal_website（个人网站-博客）

## 后端启动
~~~sh
bash`nohup java -jar -Xms64m -Xmx64m web-gateway-1.0-SNAPSHOT.jar > log-gateway.log 2>&1 &` 

bash`nohup java -jar -Xms64m -Xmx64m web-blog-1.0-SNAPSHOT.jar > log-blog.log 2>&1 &` 
~~~

### 问题整改日志

- 【已解决】#BOKE-1# 修复具体博客查看、刷新、评论无法正确运行的问题
- 【已解决】#BOKE-2# 修复修改个人信息点击确定时无法正常修改的问题
- 【已解决】#BOKE-3# 重构-发表评论时取消传递用户ID而是直接验证token
- 【已解决】#BOKE-4# 修复切换到注册界面会发送意外的请求问题，修复头像div显示切换错误问题
- 【已解决】#BOKE-5# 删除冗余，整理代码
- 【已解决】#BOKE-6# 使用mavon-editor进行博客写入与展示
- 【已解决】#BOKE-7# 新增发表博客功能
- 【已解决】#BOKE-8# 修复控制台按钮显示问题
- 【已解决】#BOKE-9# 管理界面-用户信息展示分页问题
- 【已解决】#BOKE-10# 管理界面-用户信息修改不正常问题
- 【已解决】#BOKE-11# 主页面-个人信息-修改信息异常
- 【已解决】#BOKE-12# 主页面-个人信息-修改信息后登录失效
- 【已解决】#BOKE-13# 管理界面-身份控制-新增身份控制功能，只有超级管理员可以进去并修改
- 【已解决】#BOKE-14# 主界面-进入博客-博客评论需要按照时间倒序排序
- 【已解决】#BOKE-15# 主界面-进入博客-博客评论评论后，规则提示需要清空
- 【已解决】#BOKE-16# 主界面-个人信息-更换头像后并不会立即刷新
- 【已解决】#BOKE-17# 主界面-登录注册-vuex重构
- 【已解决】#BOKE-18# 主界面-登录注册-输入完之后按钮不能立即可操作
===========================================================打包节点1
- 【已解决】#BOKE-19# 主界面-进入博客-发表评论后并不能马上刷新
- 【已解决】#BOKE-20# 主界面-素材浏览-新增瀑布流素材语录浏览界面
- 【已解决】#BOKE-21# 主界面-素材浏览-新增总数展示
- 【已解决】#BOKE-22# 主界面-素材浏览-点赞功能
- 【已解决】#BOKE-23# 主界面-素材浏览-评论功能
- 【已解决】#BOKE-24# 主界面-素材浏览-随机获取素材
- 【已解决】#BOKE-25# 主界面-素材浏览-查看素材详情时添加滚动条
- 【已解决】#BOKE-26# 主界面-素材浏览-数据动态展示
===========================================================打包节点20230510A
- 【已解决】#BOKE-27# 主界面-素材浏览-数据懒加载
- 【否决】#BOKE-28# 主界面-博客-改用Marked库
- 【已解决】#BOKE-29# 主界面-素材浏览-详细内容改用弹窗显示
- 【已解决】#BOKE-30# 主界面-素材浏览-查询新增筛选条件：按照赞数量倒序排序
- 【否决】#BOKE-31# 管理界面-首页-概览展示：仪表盘数据等（用户数量/状态、不同分区的博客数量饼图、服务器状态图）
- 【已解决】#BOKE-32# 管理界面-用户-权限管理
- 【已解决】#BOKE-33# 管理界面-博客-博客基本信息管理
- 【否决】#BOKE-34# 管理界面-博客-逻辑管理
- 【已解决】#BOKE-35# 管理界面-评论-逻辑管理
- 【已解决】#BOKE-36# 主界面-我的博客-管理（基本面板展示、编辑博客）
- 【已解决】#BOKE-37# 主界面-素材浏览-详细内容过窄问题
- 【已解决】#BOKE-38# 主界面-素材浏览-重写查询以及查询条件
- 【已解决】#BOKE-39# 主界面-博客详情-移除顶部图片
- 【已解决】#BOKE-40# 主界面-管理界面-网站留言管理
- 【已解决】#BOKE-41# 主界面-留言界面-需要增加分页查询
- 【已解决】#BOKE-42# 管理界面-管理菜单-部分操作面板的删除按钮无法使用
- 【已解决】#BOKE-43# 主界面-管理界面-部分操作面板的删除按钮无法使用
- 【已解决】#BOKE-44# 主界面-管理界面-部分操作面板的多层弹窗遮罩有问题
- 【已解决】#BOKE-45# 主界面-管理界面-管理个人的博客评论
===========================================================打包节点20230601A
- 【已解决】#BOKE-46# 主界面-管理界面-博客列表边上的三个按钮不应该换行，进入评论管理的两个按钮也不应该换行
- 【已解决】#BOKE-47# 主界面-个人信息-头像列表修改，提供QQ号输入直接引用QQ头像
===========================================================打包节点20230601B
- 【已解决】#BOKE-48# 主界面-博客-评论后，评论区不能马上刷新
- 【否决】#BOKE-49# 根目录-背景替换
- 【已解决】#BOKE-50# 替换为https访问
- 【已解决】#BOKE-51# 主界面-管理界面-饼图展示错误/数据错误
- 【已解决】#BOKE-52# 主界面-个人信息-上传头像
- 【已解决】#BOKE-53# 主界面-个人信息-修改信息后不刷新页面也能更新视图
- 【已解决】#BOKE-54# 主界面-个人信息-上传头像需要加入限制
===========================================================打包节点20230620A
- 【已解决】#BOKE-55# 主界面-个人信息-头像上传优化
- 【已解决】#BOKE-56# 主界面-编写博客-添加博客插图
- 【已解决】#BOKE-57# 主界面-博客内容-插图展示
===========================================================打包节点20230718A
- 【否决】#BOKE-58# 管理系统-定时任务-对象存储中定时清理没有引用的文件
- 【已解决】#BOKE-59# 主界面-个人信息-头像上传不选择头像时报错问题
- 【已解决】#BOKE-60# 主界面-登录注册页面-随机封面
- 【已解决】#BOKE-61# 管理界面-图片api-新增素材图片上传功能
- 【已解决】#BOKE-62# 管理界面-图片api-meme图片上传校验
- 【已解决】#BOKE-63# 主界面-编辑博客-图片上传校验
- 【已解决】#BOKE-64# 主界面-个人信息-图片上传校验
- 不再使用此方式记录日志
