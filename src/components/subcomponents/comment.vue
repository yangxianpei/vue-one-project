<template>
    <div class="commentcomtainer">
        <h3>发表评论</h3>
        <hr>
        <textarea  placeholder="请发表评论(最多120个字,注:没有上传服务器只是演示)" maxlength="120" v-model="sentcomment"></textarea>
        <mt-button type="primary" size='large' @click='sentcmt' >发表评论</mt-button>
        <div class="comment-list" v-for="(item, i) in commmentlist" :key="item.Date">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.Name}}&nbsp;&nbsp;&nbsp;发表时间:{{item.Date}}
                </div>
                <div class="cmt-body">
                    {{item.Paragraph}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size='large' plain @click='getmore'>加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    import comm from "./../../mock.js";
    let i=0;
    export default{
        data(){
            return{
                commmentlist:[],
                sentcomment:''//评论输入的内容
            }
        },
        created(){
            this.getcomment()
        },
        methods:{
            getcomment(){
                this.$http.get("http://s.cn").then((success)=>{
                    this.commmentlist=this.commmentlist.concat(success.body[i])
                    // console.log(success.body)
                })
            },
            getmore(){
                i++,
                console.log(i),
                 this.getcomment()
            },
            sentcmt(){
                //校验是否为空  .trim()去空格
                if(this.sentcomment.trim().length===0){
                    return Toast("评论不能为空")
                }

                // this.$http.post("api/postcomment/"+$route.params.id,{
                //     content:this.sentcomment.trim()
                // }).then((success)=>{
                //      if(result.body.status===0){
                //          var cmt={
                //              user_name:'匿名用户',
                //              add_time:Date.now(),
                //              content:this.msg.trim()
                //          }
                //      }
                // })

                var cmt={
                             Name:'匿名用户',
                             Date:Date.now(),
                             Paragraph:this.sentcomment.trim()
                         }

                this.commmentlist.unshift(cmt)
                this.sentcomment=''
            }
        },
        props:['    '] //注册父组件Newsinfo的id

    }




</script>

<style lang="less" scoped>
.commentcomtainer{
    h3{
        font-size: 16px;
    }
    textarea{
        font-size: 14px;
        height:80px;
        margin:0;
    }
    .comment-list{
        margin:5px 0;
        .cmt-item{
            .cmt-title{
                background-color:#ccc;
                font-size: 13px;
                line-height: 30px;
            }
            .cmt-body{
                font-size: 12px;
                line-height: 20px;
                text-indent: 2em;//缩近
            }
        }
    }
}

</style>
