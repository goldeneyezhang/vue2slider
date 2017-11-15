<template>
    <div class="dialog-wrapper" :class="{'open':is_open}">
        <div>
            <!--头部及标题-->
            <slot name="header"></slot>
        </div>
         <div>
            <!--内容区域-->
            <slot ></slot>
        </div>
    </div>
</template>
<script>
 import "./dialog.less"
    export default{
        data(){
            return {
                is_open:false
            }
        },
        methods:{
            open(){
                if(!this.is_open){
                    //触发模态窗口打开事件
                    this.$emit('dialogOpen')
                }
                this.is_open=true
            },
            close(){
                if(this.is_open){
                    //触发模态窗口关闭事件
                    this.$emit('dialogClose')
                }
                this.is_open=false
            }
        }
    }
</script>