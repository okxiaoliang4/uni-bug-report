<template>
    <view class="content">
        <view v-for="item in list">
            <Card v-for="card in item.children" :card="card" />
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../components/card/card.vue'

const list = ref([
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">备考阶段</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">课程学习</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">《课程1名称》<a class=\"_remind-rich__a\" href=\"customJump://%7B%22action%22%3A%22push%22%2C%22options%22%3A%7B%22actionType%22%3A%22fullPath%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22query%22%3A%7B%7D%7D%7D\">前往学习></a></div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">《课程1名称》<a class=\"_remind-rich__a\" href=\"customJump://%7B%22action%22%3A%22push%22%2C%22options%22%3A%7B%22actionType%22%3A%22fullPath%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22query%22%3A%7B%7D%7D%7D\">前往学习></a></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">真题演练</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">2020年考试真题   <a class=\"_remind-rich__a\" href=\"customJump://%7B%22action%22%3A%22push%22%2C%22options%22%3A%7B%22actionType%22%3A%22fullPath%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22query%22%3A%7B%7D%7D%7D\"> 前往练习></a></div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">2020年考试真题   <a class=\"_remind-rich__a\" href=\"customJump://%7B%22action%22%3A%22push%22%2C%22options%22%3A%7B%22actionType%22%3A%22fullPath%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22query%22%3A%7B%7D%7D%7D\"> 前往练习></a></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "start": 1642176000000,
            "end": 1646755200000
        },
        "title": {
            "text": "2021年12月28日前"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">报考材料准备</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">电子版照片</div>"
                        }
                    },
                    {
                        "button": {
                            "link": {
                                "options": {
                                    "text": "<div>须为考生本人近期正面免冠半身证件照。白色背景，JPG格式，大于10KB，像素大于等于295*413，<div style=\"color:red\">注意：需下载照片审核处理工具，通过审核后再进行上传。</div></div>",
                                    "title": "照片详细规格"
                                },
                                "action": "show-popup"
                            },
                            "text": "详细规格"
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">照片规格：考生本人近期正面免冠半身证件照</div>"
                        }
                    },
                    {
                        "button": {
                            "link": {
                                "options": {
                                    "action_type": "fullPath",
                                    "query": {},
                                    "appId": "wxc208a30b208e59ce",
                                    "url": "/pages/home/Home"
                                },
                                "action": "navigateToMiniProgram"
                            },
                            "text": "前往拍照"
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">在线拍照，5分钟迅速搞定报考照片</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">毕业证书</div>"
                        }
                    },
                    {
                        "popover": {
                            "text": "如，居民身份证、港澳台居民居住证、港澳居民来往内地通行证、台湾居民来往大陆通行证、护照。"
                        },
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">有效身份证</div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "end": 1646755200000
        },
        "title": {
            "text": "2021年12月28日前"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">网上报名</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">操作指引</div>"
                        }
                    },
                    {
                        "button": {
                            "link": {
                                "options": {
                                    "actionType": "fullPath",
                                    "query": {
                                        "src": "https%3A%2F%2Fwww.parameters.cn%2Fentry.html%3FjumpUrl%3Dhttps%3A%2F%2Fpassport.neea.edu.cn%2F"
                                    },
                                    "url": "@WEBVIEW"
                                },
                                "action": "push"
                            },
                            "text": "快捷入口"
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\"><div>步骤一：注册并登录会计职称网上报名系统，各省市报名入口不同</div></div>"
                        }
                    },
                    {
                        "button": {
                            "link": {
                                "options": {
                                    "action_type": "fullPath",
                                    "query": {},
                                    "appId": "wxc208a30b208e59ce",
                                    "url": "/pages/home/Home"
                                },
                                "action": "navigateToMiniProgram"
                            },
                            "text": "前往拍照"
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\"><div>步骤二：填写个人信息、上传证件照、打印信息表完成缴费</div></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">相关费用</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">具体缴费金额由各省级承办机构根据考试需要和当地物价水平确定，全国各省市各不相同。  <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%222022%E6%8A%A5%E8%80%83%E4%BB%B7%E6%A0%BC%22%2C%22text%22%3A%22%3Cdiv%3E%3Cimg%20src%3D%5C%22https%3A%2F%2Fc01.parameters.cn%2Fimage%2F%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%80%83%E8%AF%95%E6%8A%A5%E8%80%83%E4%BB%B7%E6%A0%BC.jpg%5C%22%3E%3C%2Fimg%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">查看2022报考价格></a></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">注意事项</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">（一）报名参加中级会计资格考  <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%22%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%22%2C%22text%22%3A%22%3Cdiv%3E%3Cdiv%3E%EF%BC%88%E4%B8%80%EF%BC%89%E6%8A%A5%E5%90%8D%E5%8F%82%E5%8A%A0%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%B5%84%E6%A0%BC%E8%80%83%E8%AF%95%E7%9A%84%E4%BA%BA%E5%91%98%EF%BC%8C%E5%9F%BA%E6%9C%AC%E6%8A%A5%E8%80%83%E6%9D%A1%E4%BB%B6%EF%BC%9A%3Cdiv%3E1.%E9%81%B5%E5%AE%88%E3%80%8A%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E4%BC%9A%E8%AE%A1%E6%B3%95%E3%80%8B%E5%92%8C%E5%9B%BD%E5%AE%B6%E7%BB%9F%E4%B8%80%E7%9A%84%E4%BC%9A%E8%AE%A1%E5%88%B6%E5%BA%A6%E7%AD%89%E6%B3%95%E5%BE%8B%E6%B3%95%E8%A7%84%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E2.%E5%85%B7%E5%A4%87%E8%89%AF%E5%A5%BD%E7%9A%84%E8%81%8C%E4%B8%9A%E9%81%93%E5%BE%B7%EF%BC%8C%E6%97%A0%E4%B8%A5%E9%87%8D%E8%BF%9D%E5%8F%8D%E8%B4%A2%E7%BB%8F%E7%BA%AA%E5%BE%8B%E7%9A%84%E8%A1%8C%E4%B8%BA%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E3.%E7%83%AD%E7%88%B1%E4%BC%9A%E8%AE%A1%E5%B7%A5%E4%BD%9C%EF%BC%8C%E5%85%B7%E5%A4%87%E7%9B%B8%E5%BA%94%E7%9A%84%E4%BC%9A%E8%AE%A1%E4%B8%93%E4%B8%9A%E7%9F%A5%E8%AF%86%E5%92%8C%E4%B8%9A%E5%8A%A1%E6%8A%80%E8%83%BD%E3%80%82%E6%8A%A5%E5%90%8D%E5%8F%82%E5%8A%A0%E4%B8%AD%E7%BA%A7%E8%B5%84%E6%A0%BC%E8%80%83%E8%AF%95%E7%9A%84%E4%BA%BA%E5%91%98%EF%BC%8C%E9%99%A4%E5%85%B7%E5%A4%87%E5%9F%BA%E6%9C%AC%E6%9D%A1%E4%BB%B6%E5%A4%96%EF%BC%8C%E8%BF%98%E5%BF%85%E9%A1%BB%E5%85%B7%E5%A4%87%E4%B8%8B%E5%88%97%E6%9D%A1%E4%BB%B6%E4%B9%8B%E4%B8%80%EF%BC%9A%3C%2Fdiv%3E%3Cdiv%3E1.%E5%85%B7%E5%A4%87%E5%A4%A7%E5%AD%A6%E4%B8%93%E7%A7%91%E5%AD%A6%E5%8E%86%EF%BC%8C%E4%BB%8E%E4%BA%8B%E4%BC%9A%E8%AE%A1%E5%B7%A5%E4%BD%9C%E6%BB%A15%E5%B9%B4%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E2.%E5%85%B7%E5%A4%87%E5%A4%A7%E5%AD%A6%E6%9C%AC%E7%A7%91%E5%AD%A6%E5%8E%86%E6%88%96%E5%AD%A6%E5%A3%AB%E5%AD%A6%E4%BD%8D%EF%BC%8C%E4%BB%8E%E4%BA%8B%E4%BC%9A%E8%AE%A1%E5%B7%A5%E4%BD%9C%E6%BB%A14%E5%B9%B4%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E3.%E5%85%B7%E5%A4%87%E7%AC%AC%E4%BA%8C%E5%AD%A6%E5%A3%AB%E5%AD%A6%E4%BD%8D%E6%88%96%E7%A0%94%E7%A9%B6%E7%94%9F%E7%8F%AD%E6%AF%95%E4%B8%9A%EF%BC%8C%E4%BB%8E%E4%BA%8B%E4%BC%9A%E8%AE%A1%E5%B7%A5%E4%BD%9C%E6%BB%A12%E5%B9%B4%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E4.%E5%85%B7%E5%A4%87%E7%A1%95%E5%A3%AB%E5%AD%A6%E4%BD%8D%EF%BC%8C%E4%BB%8E%E4%BA%8B%E4%BC%9A%E8%AE%A1%E5%B7%A5%E4%BD%9C%E6%BB%A11%E5%B9%B4%3C%2Fdiv%3E%3Cdiv%3E5.%E5%85%B7%E5%A4%87%E5%8D%9A%E5%A3%AB%E5%AD%A6%E4%BD%8D%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E6.%E9%80%9A%E8%BF%87%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E8%80%83%E8%AF%95%EF%BC%8C%E5%8F%96%E5%BE%97%E7%BB%8F%E6%B5%8E%E3%80%81%E7%BB%9F%E8%AE%A1%E3%80%81%E5%AE%A1%E8%AE%A1%E4%B8%93%E4%B8%9A%E6%8A%80%E6%9C%AF%E4%B8%AD%E7%BA%A7%E8%B5%84%E6%A0%BC%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E%EF%BC%88%E4%BA%8C%EF%BC%89%E6%89%80%E6%9C%89%E6%8A%A5%E5%90%8D%E5%8F%82%E5%8A%A0%E8%80%83%E8%AF%95%E4%BA%BA%E5%91%98%EF%BC%8C%E5%9D%87%E5%9C%A8%E5%85%B6%E6%8A%A5%E5%90%8D%E6%89%80%E5%9C%A8%E5%9C%B0%E5%8F%82%E5%8A%A0%E8%80%83%E8%AF%95%E3%80%82%E6%89%80%E4%BB%A5%E5%9C%A8%E6%8A%A5%E5%90%8D%E6%97%B6%E8%A6%81%E8%B0%A8%E6%85%8E%E9%80%89%E6%8B%A9%E6%8A%A5%E8%80%83%E7%82%B9%E3%80%822022%E5%B9%B4%E6%8A%A5%E5%90%8D%E7%AE%80%E7%AB%A0%E5%AF%B9%E6%8A%A5%E8%80%83%E7%82%B9%E8%A7%84%E5%AE%9A%E5%A6%82%E4%B8%8B%EF%BC%9A%3C%2Fdiv%3E%3Cdiv%3E1.%E5%9C%A8%E8%81%8C%E5%9C%A8%E5%B2%97%E4%BA%BA%E5%91%98%EF%BC%9A%E6%8C%89%E5%B1%9E%E5%9C%B0%E5%8C%96%E5%8E%9F%E5%88%99%E5%9C%A8%E5%85%B6%E5%B7%A5%E4%BD%9C%E5%8D%95%E4%BD%8D%E6%89%80%E5%9C%A8%E5%9C%B0%E6%8A%A5%E5%90%8D%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E2.%E5%9C%A8%E6%A0%A1%E5%AD%A6%E7%94%9F%EF%BC%9A%E6%8C%89%E5%85%B6%E5%AD%A6%E7%B1%8D%E6%89%80%E5%9C%A8%E5%9C%B0%E6%8A%A5%E5%90%8D%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E3.%E5%85%B6%E4%BB%96%E4%BA%BA%E5%91%98%EF%BC%9A%E6%8C%89%E5%9C%A8%E5%85%B6%E6%88%B7%E7%B1%8D%E6%89%80%E5%9C%A8%E5%9C%B0%E6%88%96%E5%B1%85%E4%BD%8F%E5%9C%B0%E6%8A%A5%E5%90%8D%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E4.%E9%A6%99%E6%B8%AF%E3%80%81%E6%BE%B3%E9%97%A8%E5%92%8C%E5%8F%B0%E6%B9%BE%E5%B1%85%E6%B0%91%EF%BC%9A%E6%8C%89%E5%B0%B1%E8%BF%91%E6%96%B9%E4%BE%BF%E5%8E%9F%E5%88%99%E5%9C%A8%E5%86%85%E5%9C%B0%E6%8A%A5%E5%90%8D%E3%80%82%E6%9C%89%E5%B7%A5%E4%BD%9C%E5%8D%95%E4%BD%8D%E7%9A%84%EF%BC%8C%E5%9C%A8%E5%85%B6%E5%B7%A5%E4%BD%9C%E5%8D%95%E4%BD%8D%E6%89%80%E5%9C%A8%E5%9C%B0%E6%8A%A5%E5%90%8D%EF%BC%9B%E4%B8%BA%E5%9C%A8%E6%A0%A1%E5%AD%A6%E7%94%9F%E7%9A%84%EF%BC%8C%E5%9C%A8%E5%85%B6%E5%AD%A6%E7%B1%8D%E6%89%80%E5%9C%A8%E5%9C%B0%E6%8A%A5%E5%90%8D%E3%80%82%E5%9C%A8%E6%8A%A5%E5%90%8D%E7%BC%B4%E8%B4%B9%E6%88%90%E5%8A%9F%E5%90%8E%EF%BC%8C%E9%9C%80%E8%A6%81%E7%A1%AE%E8%AE%A4%E6%8A%A5%E5%90%8D%E7%8A%B6%E6%80%81%EF%BC%8C%E5%86%8D%E6%AC%A1%E7%99%BB%E5%BD%95%E5%85%A8%E5%9B%BD%E4%BC%9A%E8%AE%A1%E8%B5%84%E6%A0%BC%E8%AF%84%E4%BB%B7%E7%BD%91%E9%A6%96%E9%A1%B5%EF%BC%8C%E7%82%B9%E5%87%BB%E5%B7%A6%E4%BE%A7%E2%80%9C%E6%8A%A5%E5%90%8D%E7%8A%B6%E6%80%81%E6%9F%A5%E8%AF%A2%E2%80%9D%E6%8C%89%E9%92%AE%E8%BF%9B%E5%85%A5%E3%80%82%E5%A6%82%E6%9E%9C%E6%98%BE%E7%A4%BA%E2%80%9C%E6%8A%A5%E5%90%8D%E5%B7%B2%E6%88%90%E5%8A%9F%E2%80%9D%E5%AD%97%E6%A0%B7%EF%BC%8C%E5%88%99%E4%BB%A3%E8%A1%A8%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9F%E4%BA%86%E3%80%82%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">查看详情></a></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "start": 1646841600000,
            "end": 1648656000000
        },
        "title": {
            "text": "2022.03.10~2022.03.31"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">资格审核</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">需携带材料</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">1、考生本人二代居民身份证原件及复印件   <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%22%E9%9C%80%E6%90%BA%E5%B8%A6%E6%9D%90%E6%96%99%22%2C%22text%22%3A%22%3Cdiv%3E%3Cdiv%3E1%E3%80%81%E8%80%83%E7%94%9F%E6%9C%AC%E4%BA%BA%E4%BA%8C%E4%BB%A3%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8E%9F%E4%BB%B6%E5%8F%8A%E5%A4%8D%E5%8D%B0%E4%BB%B6%3C%2Fdiv%3E%3Cdiv%3E2%E3%80%81%E5%AD%A6%E5%8E%86(%E5%AD%A6%E4%BD%8D)%E8%AF%81%E4%B9%A6%E5%8E%9F%E4%BB%B6%E5%8F%8A%E5%A4%8D%E5%8D%B0%E4%BB%B6%3C%2Fdiv%3E%3Cdiv%3E3%E3%80%81%E5%88%9D%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%80%83%E7%94%9F%E6%8A%A5%E5%90%8D%E4%BF%A1%E6%81%AF%E8%A1%A8%3Cp%3E%3C%2Fp%3E%3C%2Fdiv%3E%3Cdiv%3E4%E3%80%81%E9%83%A8%E5%88%86%E5%9C%B0%E5%8C%BA%E8%A6%81%E6%B1%82%E8%80%83%E7%94%9F%E6%9C%AC%E4%BA%BA%E7%AD%BE%E5%90%8D%E5%B9%B6%E7%BB%8F%E6%89%80%E5%9C%A8%E5%8D%95%E4%BD%8D%E6%88%96%E5%AD%A6%E6%A0%A1%E5%8A%A0%E7%9B%96%E5%85%AC%E7%AB%A0(%E5%90%84%E5%9C%B0%E6%94%BF%E7%AD%96%E4%B8%8D%E4%B8%80)%E3%80%82%3C%2Fdiv%3E%3Cp%3E%3C%2Fp%3E%3Cdiv%3E5%E3%80%81%E6%88%B7%E7%B1%8D%E8%AF%81%E6%98%8E%3C%2Fdiv%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">\n展开></a></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">注意事项</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">(一)确认资格审核方式，所有的   <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%22%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%22%2C%22text%22%3A%22%3Cdiv%3E%3Cdiv%3E%EF%BC%88%E4%B8%80%EF%BC%89%E7%A1%AE%E8%AE%A4%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E6%96%B9%E5%BC%8F%EF%BC%8C%E6%89%80%E6%9C%89%E7%9A%84%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%81%8C%E7%A7%B0%E8%80%83%E7%94%9F%E9%83%BD%E9%9C%80%E8%A6%81%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%EF%BC%8C%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E5%88%86%E4%B8%BA%E4%B8%89%E7%A7%8D%EF%BC%9A%E7%BD%91%E4%B8%8A%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E3%80%81%E7%8E%B0%E5%9C%BA%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E3%80%81%E8%80%83%E5%90%8E%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E3%80%82%E5%90%84%E5%9C%B0%E5%8C%BA%E6%9C%89%E6%89%80%E4%B8%8D%E5%90%8C%EF%BC%8C%E5%85%B7%E4%BD%93%E5%AE%A1%E6%A0%B8%E6%96%B9%E5%BC%8F%E8%80%83%E7%94%9F%E8%A6%81%E4%BB%A5%E6%8A%A5%E8%80%83%E6%89%80%E5%9C%A8%E5%9C%B0%E5%8F%91%E5%B8%83%E7%9A%84%E6%8A%A5%E5%90%8D%E7%AE%80%E7%AB%A0%E4%B8%BA%E5%87%86%E3%80%82%3C%2Fdiv%3E%20%3Cdiv%3E1.%E7%BD%91%E4%B8%8A%E5%AE%A1%E6%A0%B8%EF%BC%9A%E8%80%83%E7%94%9F%E6%8F%90%E4%BA%A4%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E5%90%8E%EF%BC%8C%E5%9C%A8%E8%A7%84%E5%AE%9A%E7%9A%84%E5%87%A0%E5%A4%A9%E5%86%85%E9%87%8D%E6%96%B0%E7%99%BB%E5%BD%95%E6%8A%A5%E5%90%8D%E7%B3%BB%E7%BB%9F%EF%BC%8C%E5%8D%B3%E5%8F%AF%E6%9F%A5%E7%9C%8B%E5%AE%A1%E6%A0%B8%E7%8A%B6%E6%80%81%E3%80%82%3C%2Fdiv%3E%20%3Cdiv%3E2.%E7%8E%B0%E5%9C%BA%E5%AE%A1%E6%A0%B8%EF%BC%9A%E8%80%83%E7%94%9F%E5%9C%A8%E7%BD%91%E4%B8%8A%E6%8A%A5%E5%90%8D%E5%90%8E%EF%BC%8C%E5%9C%A8%E8%A7%84%E5%AE%9A%E7%9A%84%E6%97%B6%E9%97%B4%E5%86%85%E6%90%BA%E5%B8%A6%E6%8A%A5%E5%90%8D%E8%A1%A8%EF%BC%88%E8%A6%81%E6%B1%82%E5%8A%A0%E7%9B%96%E5%85%AC%E7%AB%A0%EF%BC%89%E3%80%81%E5%AD%A6%E5%8E%86%E8%AF%81%E4%B9%A6%E5%8F%8A%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%98%8E%E7%AD%89%E8%B5%84%E6%96%99%E5%88%B0%E7%9B%B8%E5%85%B3%E9%83%A8%E9%97%A8%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%EF%BC%8C%E8%AF%A6%E7%BB%86%E6%83%85%E5%86%B5%E8%AF%B7%E6%9F%A5%E7%9C%8B%E4%B8%8B%E8%A1%A8%E5%90%84%E5%9C%B0%E8%AF%A6%E6%83%85%E3%80%82%3C%2Fdiv%3E%20%3Cdiv%3E3.%E8%80%83%E5%90%8E%E5%AE%A1%E6%A0%B8%EF%BC%9A%E8%80%83%E7%94%9F%E5%9C%A8%E6%8A%A5%E5%90%8D%E5%90%8E%E7%9B%B4%E6%8E%A5%E5%8F%82%E5%8A%A0%E8%80%83%E8%AF%95%EF%BC%8C%E5%BE%85%E4%B8%89%E7%A7%91%E6%88%90%E7%BB%A9%E5%90%88%E6%A0%BC%E5%90%8E%EF%BC%8C%E5%88%B0%E7%9B%B8%E5%85%B3%E9%83%A8%E9%97%A8%E8%BF%9B%E8%A1%8C%E6%8A%A5%E5%90%8D%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%EF%BC%8C%E5%AE%A1%E6%A0%B8%E4%B8%8D%E9%80%9A%E8%BF%87%E7%9A%84%E8%80%83%E7%94%9F%E4%B8%8D%E4%BA%88%E9%A2%81%E5%8F%91%E8%AF%81%E4%B9%A6%E3%80%82%3C%2Fdiv%3E%20%3Cdiv%3E%EF%BC%88%E4%BA%8C%EF%BC%89%E7%BD%91%E4%B8%8A%E5%AE%A1%E6%A0%B8%2F%E7%8E%B0%E5%9C%BA%E5%AE%A1%E6%A0%B8%E5%90%8E%EF%BC%8C%E8%80%83%E7%94%9F%E9%87%8D%E6%96%B0%E7%99%BB%E5%BD%95%E6%8A%A5%E5%90%8D%E7%BD%91%E7%AB%99%EF%BC%8C%E5%9C%A8%E7%BD%91%E4%B8%8A%E6%8A%A5%E5%90%8D%E6%97%B6%E6%AE%B5%E5%86%85%E9%80%9A%E8%BF%87%E7%BD%91%E4%B8%8A%E9%93%B6%E8%A1%8C%E7%BC%B4%E7%BA%B3%E6%8A%A5%E5%90%8D%E8%B4%B9%EF%BC%8C%E8%80%83%E8%AF%95%E6%8A%A5%E5%90%8D%E5%8F%8A%E7%BC%B4%E8%B4%B9%E7%BB%9F%E4%B8%80%E5%9C%A83%E6%9C%8831%E6%97%A514%3A00%E6%88%AA%E6%AD%A2%E3%80%82%E5%A6%82%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E5%92%8C%E4%BF%A1%E6%81%AF%E7%A1%AE%E8%AE%A4%E8%99%BD%E7%84%B6%E5%AE%8C%E6%88%90%E4%BD%86%E6%9C%AA%E6%8C%89%E8%A6%81%E6%B1%82%E5%8F%8A%E6%97%B6%E7%BC%B4%E8%B4%B9%E7%9A%84%E5%B1%9E%E4%BA%8E%E6%8A%A5%E5%90%8D%E4%B8%8D%E6%88%90%E5%8A%9F%EF%BC%8C%E6%97%A0%E6%B3%95%E5%8F%82%E5%8A%A0%E8%80%83%E8%AF%95%E3%80%82%3C%2Fdiv%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">查看详情></a></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "start": 1646841600000,
            "end": 1648656000000
        },
        "title": {
            "text": "2022年03月26日~2022年03月28日"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">打印准考证</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">请在指定时间段登录全国会计资格评价网，考生可以点击下载打印准考证。<a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22actionType%22%3A%22fullPath%22%2C%22query%22%3A%7B%22src%22%3A%22http%3A%2F%2Fkzp.mof.gov.cn%2Flist_warning.jsp%22%7D%2C%22url%22%3A%22%40WEBVIEW%22%7D%2C%22action%22%3A%22push%22%7D\">快捷入口></a></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "end": 1660060800000
        },
        "title": {
            "text": "2022年03月13日~2022年03月26日"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">中级会计资格考试</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">需携带考试材料</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">准考证、有效身份证件</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">考试日程</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">考试日程   <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%22%E8%80%83%E8%AF%95%E6%97%A5%E7%A8%8B%22%2C%22text%22%3A%22%3Cdiv%3E%3Cimg%20src%3D%5C%22https%3A%2F%2Fc01.parameters.cn%2Fimage%2F%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%80%83%E8%AF%95%E6%97%A5%E7%A8%8B.png%5C%22%3E%3C%2Fimg%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">查看></a></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">考试地点</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">以准考证显示为准。</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">注意事项</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">中级资格考试于2022年9月3日  <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%22%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%22%2C%22text%22%3A%22%3Cdiv%3E%3Cdiv%3E%EF%BC%88%E4%B8%80%EF%BC%89%E4%B8%AD%E7%BA%A7%E8%B5%84%E6%A0%BC%E8%80%83%E8%AF%95%E4%BA%8E2022%E5%B9%B49%E6%9C%883%E6%97%A5%E8%87%B35%E6%97%A5%E4%B8%BE%E8%A1%8C%EF%BC%8C%E5%85%B13%E4%B8%AA%E6%89%B9%E6%AC%A1%E3%80%82%E5%85%B6%E4%B8%AD%E3%80%8A%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E5%AE%9E%E5%8A%A1%E3%80%8B%E7%A7%91%E7%9B%AE%E8%80%83%E8%AF%95%E6%97%B6%E9%95%BF%E4%B8%BA165%E5%88%86%E9%92%9F%EF%BC%8C%E3%80%8A%E8%B4%A2%E5%8A%A1%E7%AE%A1%E7%90%86%E3%80%8B%E7%A7%91%E7%9B%AE%E8%80%83%E8%AF%95%E6%97%B6%E9%95%BF%E4%B8%BA135%E5%88%86%E9%92%9F%EF%BC%8C%E3%80%8A%E7%BB%8F%E6%B5%8E%E6%B3%95%E3%80%8B%E7%A7%91%E7%9B%AE%E8%80%83%E8%AF%95%E6%97%B6%E9%95%BF%E4%B8%BA120%E5%88%86%E9%92%9F%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E%EF%BC%88%E4%BA%8C%EF%BC%89%E5%8F%82%E5%8A%A0%E4%B8%AD%E7%BA%A7%E8%B5%84%E6%A0%BC%E8%80%83%E8%AF%95%E7%9A%84%E4%BA%BA%E5%91%98%EF%BC%8C%E5%BA%94%E5%9C%A8%E8%BF%9E%E7%BB%AD2%E4%B8%AA%E8%80%83%E8%AF%95%E5%B9%B4%E5%BA%A6%E5%86%85%E9%80%9A%E8%BF%87%E5%85%A8%E9%83%A8%E7%A7%91%E7%9B%AE%E7%9A%84%E8%80%83%E8%AF%95%EF%BC%8C%E6%96%B9%E5%8F%AF%E5%8F%96%E5%BE%97%E4%B8%AD%E7%BA%A7%E8%B5%84%E6%A0%BC%E8%AF%81%E4%B9%A6%E3%80%82%3Cdiv%3E%3C%2Fdiv%3E%EF%BC%88%E4%B8%89%EF%BC%89%E8%80%83%E8%AF%95%E6%96%B9%E5%BC%8F%EF%BC%9A%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%81%8C%E7%A7%B0%E5%85%A8%E9%83%A8%E5%AE%9E%E8%A1%8C%E6%97%A0%E7%BA%B8%E5%8C%96%E8%80%83%E8%AF%95%EF%BC%8C%E8%80%83%E8%AF%95%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%8A%E8%BF%9B%E8%A1%8C%E3%80%82%E8%AF%95%E9%A2%98%E3%80%81%E7%AD%94%E9%A2%98%E8%A6%81%E6%B1%82%E5%92%8C%E7%AD%94%E9%A2%98%E7%95%8C%E9%9D%A2%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%98%BE%E7%A4%BA%E5%B1%8F%E4%B8%8A%E6%98%BE%E7%A4%BA%EF%BC%8C%E8%80%83%E7%94%9F%E5%BA%94%E4%BD%BF%E7%94%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%BC%A0%E6%A0%87%E5%92%8C%E9%94%AE%E7%9B%98%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%AD%94%E9%A2%98%E7%95%8C%E9%9D%A2%E4%B8%8A%E8%BF%9B%E8%A1%8C%E7%AD%94%E9%A2%98%E3%80%82%3C%2Fdiv%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">查看详情></a></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "start": 1662134400000,
            "end": 1662307200000
        },
        "title": {
            "text": "2022年03月26日~2022年03月28日"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">查询成绩</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">查询成绩</div>"
                        }
                    },
                    {
                        "button": {
                            "link": {
                                "options": {
                                    "actionType": "fullPath",
                                    "query": {
                                        "src": "http://58.56.20.38:81/pas/querycert.jsp"
                                    },
                                    "url": "@WEBVIEW"
                                },
                                "action": "push"
                            },
                            "text": "查询入口"
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__span\">成绩查询入口</div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "end": 1666195200000
        },
        "title": {
            "text": "2022年04月25日~2022年05月28日"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">资格复核</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">需携带材料</div>"
                        }
                    },
                    {
                        "fold": {
                            "enable": true,
                            "open": false
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\"><div>1、考生本人二代居民身份证原件及复印件</div><div>2、学历(学位)证书原件及复印件</div><div>3、初级会计考生报名信息表<p></p></div><div>4、部分地区要求考生本人签名并经所在单位或学校加盖公章(各地政策不一)。</div><p></p><div>5、户籍证明</div></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">注意事项</div>"
                        }
                    },
                    {
                        "fold": {
                            "enable": true,
                            "open": false
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\"><div>（一）部分地区实行考后资格审核，即中级会计师考试成绩公布后成绩合格的考生按照当地管理部门的要求持相关材料到指定地点进行审核。</div><div>（二）资格复核时间一般是成绩查询后一个月内。具体时间范围以各地财政局或者考试相关部门官方通知为准。</div></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "start": 1665331200000,
            "end": 1668873600000
        },
        "title": {
            "text": "考后45个工作日内"
        }
    },
    {
        "children": [
            {
                "children": [
                    {
                        "type": "h2",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/title-icon.png",
                            "text": "<div class=\"_remind-rich__h2\">资格证书领取</div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">需携带材料</div>"
                        }
                    },
                    {
                        "fold": {
                            "enable": true,
                            "open": false
                        },
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\"><div>1、成绩通知单</div><div>2、考生本人具备报名资格的学历(或学位)证书原件</div><div>3、考生本人的有效身份证原件<p></p></div><div>4、近期正面免冠同底彩色照片</div><p></p><div>5、用钢笔或签字笔填写《资格考试合格人员登记表》</div></div>"
                        }
                    },
                    {
                        "type": "h3",
                        "title": {
                            "icon": "https://c01.parameters.cn/image/examinationApp/images/article-icon.png",
                            "text": "<div class=\"_remind-rich__h3\">注意事项</div>"
                        }
                    },
                    {
                        "type": "content",
                        "title": {
                            "text": "<div class=\"_remind-rich__div\">1.中级会计职称合格证一般在考后  <a class=\"_remind-rich__a\" href=\"customJump://%7B%22options%22%3A%7B%22title%22%3A%22%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9%22%2C%22text%22%3A%22%3Cdiv%3E%3Cdiv%3E%EF%BC%88%E4%B8%80%EF%BC%89%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E8%81%8C%E7%A7%B0%E5%90%88%E6%A0%BC%E8%AF%81%E4%B8%80%E8%88%AC%E5%9C%A8%E8%80%83%E5%90%8E%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%B7%A6%E5%8F%B3%E5%BC%80%E5%A7%8B%E9%A2%86%E5%8F%96%E3%80%82%3C%2Fdiv%3E%3Cdiv%3E%EF%BC%88%E4%BA%8C%EF%BC%89%E9%83%A8%E5%88%86%E5%AE%9E%E8%A1%8C%E8%80%83%E5%90%8E%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E5%9C%B0%E5%8C%BA%E6%88%90%E7%BB%A9%E5%90%88%E6%A0%BC%E7%9A%84%E8%80%83%E7%94%9F%E9%A2%86%E5%8F%96%E8%B5%84%E6%A0%BC%E8%AF%81%E4%B9%A6%E5%89%8D%E9%9C%80%E5%85%88%E5%88%B0%E6%8C%87%E5%AE%9A%E5%9C%B0%E7%82%B9%E8%BF%9B%E8%A1%8C%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E6%8A%A5%E5%90%8D%E8%B5%84%E6%A0%BC%E5%AE%A1%E6%A0%B8%E5%86%8D%E9%A2%86%E5%8F%96%E8%AF%81%E4%B9%A6%E3%80%82%E5%AF%B9%E4%B8%8D%E7%AC%A6%E5%90%88%E6%8A%A5%E5%90%8D%E6%9D%A1%E4%BB%B6%E6%8F%90%E4%BE%9B%E8%99%9A%E5%81%87%E4%BF%A1%E6%81%AF%E8%80%85%EF%BC%8C%E5%8D%B3%E4%BD%BF%E8%80%83%E8%AF%95%E9%80%9A%E8%BF%87%E4%B9%9F%E4%B8%8D%E4%BA%88%E6%A0%B8%E5%8F%91%E8%B5%84%E6%A0%BC%E8%AF%81%E4%B9%A6%E3%80%82%E9%A2%86%E5%8F%96%E5%9C%B0%E5%9D%80%E4%BB%A5%E5%8F%8A%E6%97%A5%E6%9C%9F%EF%BC%8C%E9%9C%80%E5%85%B3%E6%B3%A8%E5%90%84%E5%9C%B0%E8%B4%A2%E6%94%BF%E9%83%A8%E9%97%A8%E5%AE%98%E6%96%B9%E9%80%9A%E7%9F%A5%E5%85%AC%E5%91%8A%E7%94%B3%E9%A2%86%E8%AF%81%E4%B9%A6%E3%80%82%3C%2Fdiv%3E%3C%2Fdiv%3E%22%7D%2C%22action%22%3A%22show-popup%22%7D\">查看详情></a></div>"
                        }
                    }
                ],
                "type": "card"
            }
        ],
        "time": {
            "start": 1674144000000,
            "end": 1676822400000
        },
        "title": {
            "text": "考后45个工作日内"
        }
    }
])
</script>

<style>
</style>
