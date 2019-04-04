<template>
    <div class='goodsdesc'>
        <h3>{{info.title}}</h3>
        <hr>
        <p>{{info.Paragraph}}</p>
    </div>
</template>

<script>
import goodsxiangxi from './../../mock.js'
    export default{
        data(){
            return {
                info:''
            }
        },
        created(){
            this.getGoodsdesc()
        },
        methods:{
            getGoodsdesc(){
                this.$http.get('http://goodsxiangxi.cn').then((success)=>{
                    this.info=success.body[0]
                    console.log(success.body)
                })
            }
        }

    }

</script>

<style lang="less" scoped>
.goodsdesc{
    padding: 4px; 
    h3{
        font-size: 16px;
        color:#266aff;
        text-align: center;
        margin:15px 0;
    }
}
</style>
