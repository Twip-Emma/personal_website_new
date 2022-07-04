/*
 * @Author: 七画一只妖
 * @Date: 2021-11-20 23:22:54
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-29 10:37:08
 * @Description: file content
 */


// 数据初始化
export default {
    namespaced:true,
    actions: {
        test(){
            console.log("在vuex里面，成功了")
        }
    },
    mutations: {},
    state: {
        // 主页博客展示
        blogList: [
            {
                id: 449,
                title: "博客名称1",
                content: "测试测试测试测试测试测试测试测试测试测试测试测试测试v",
                firstPicture:
                    "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
                flag: "原创",
                views: 99999,
                appreciation: 0,
                createTime: "这里写创建时间",
                updateTime: "这里是更新时间",
                description: "这是简介",
                type: {
                    id: 1,
                    name: "主要技术栈",
                    pic_url:
                        "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
                    color: "#59c9fb",
                },
                tags: [
                    { id: 1, name: "JavaScript" },
                    { id: 2, name: "css" },
                    { id: 3, name: "html" },
                ],
                user: {
                    id: 1,
                    nickname: "七画一只妖",
                    avatar:
                        "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
                    type: "1",
                },
                comments: null,
                tagIds: null,
            },
            {
                id: 450,
                title: "博客名称1",
                content: "测试测试测试测试测试测试测试测试测试测试测试测试测试v",
                firstPicture:
                    "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
                flag: "原创",
                views: 99999,
                appreciation: 0,
                createTime: "这里写创建时间",
                updateTime: "这里是更新时间",
                description: "这是简介",
                type: {
                    id: 1,
                    name: "主要技术栈",
                    pic_url:
                        "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
                    color: "#59c9fb",
                },
                tags: [
                    { id: 1, name: "JavaScript" },
                    { id: 2, name: "css" },
                    { id: 3, name: "html" },
                ],
                user: {
                    id: 1,
                    nickname: "七画一只妖",
                    avatar:
                        "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
                    type: "1",
                },
                comments: null,
                tagIds: null,
            },
            {
                id: 451,
                title: "博客名称1",
                content: "测试测试测试测试测试测试测试测试测试测试测试测试测试v",
                firstPicture:
                    "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
                flag: "原创",
                views: 99999,
                appreciation: 0,
                createTime: "这里写创建时间",
                updateTime: "这里是更新时间",
                description: "这是简介",
                type: {
                    id: 1,
                    name: "主要技术栈",
                    pic_url:
                        "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
                    color: "#59c9fb",
                },
                tags: [
                    { id: 1, name: "JavaScript" },
                    { id: 2, name: "css" },
                    { id: 3, name: "html" },
                ],
                user: {
                    id: 1,
                    nickname: "七画一只妖",
                    avatar:
                        "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
                    type: "1",
                },
                comments: null,
                tagIds: null,
            },
        ],
        essayList: [
            {
              id: "xxxxxx1",
              createTime: "2021-11-17",
              title: "这是标题1",
              content: "文章正文1",
              image: "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            },
            {
              id: "xxxxxx2",
              createTime: "2021-11-06",
              title: "这是标题2",
              content: "文章正文2",
              image: "",
            },
            {
              id: "xxxxxx3",
              createTime: "2021-11-01",
              title: "标题3",
              content: "oh,boy next door",
              image: "",
            }
        ],
        messageList: [
            {
              id: "xxxx1",
              avatar: "???",
              nickname: "昵称",
              createTime: "2021-11-17",
              content: "这是评论1",
            },
            {
              id: "xxxx2",
              avatar: "???",
              nickname: "昵称2",
              createTime: "2021-11-19",
              content: "这是评论2",
            }
        ],
        projectList: [
          {
            id: "1",
            title: "项目名称",
            content:
              "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 0,
          },
          {
            id: "2",
            title: "项目名称",
            content:
              "这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 0,
          },
        ],
        demoList: [
          {
            id: "1",
            title: "其他项目1",
            content: "另一种排版另一种排版另一种排版另一种排版",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 1,
          },
                  {
            id: "2",
            title: "其他项目1",
            content: "另一种排版另一种排版另一种排版另一种排版",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 1,
          },
                  {
            id: "3",
            title: "其他项目1",
            content: "另一种排版另一种排版另一种排版另一种排版",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 1,
          },
                  {
            id: "4",
            title: "其他项目1",
            content: "另一种排版另一种排版另一种排版另一种排版",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 1,
          },
                  {
            id: "5",
            title: "其他项目1",
            content: "另一种排版另一种排版另一种排版另一种排版",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            url: "xxx",
            techs: "技术栈1，技术栈2，技术栈3，技术栈4",
            type: 1,
          },
        ],
        treeData: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '【在线工具】less转css',
                url: 'https://www.matools.com/less'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
        }],
    },
    getters: {}
}