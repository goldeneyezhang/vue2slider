<template>
    <div class="dialog">
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
<style>
    .dialog{
        position: absolute;
        top:24px;
        left: 24px;
        right: 24px;
        bottom:24px;
        display: none;
        background: #ffffff;
        box-shadow:0 0 10px rgba(0,0,0,5);
        z-index:500;/*放置于顶层*/
    }
</style>
<script>
    export default{}
</script>