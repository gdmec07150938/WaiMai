<template>
    <div class="foot-item">
        <i class="icon-class">
            <slot name='icon'></slot>
        </i>
        <i class="label-class">
            <slot name="label">label</slot>
        </i>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="scss" rel="stylesheet/scss">
    .foot-item{
        display: inline-block;
        width: 40px;
        height: 34px;
        padding: 7px;
        flex: 0 0 40px;
        text-align: center;
        .icon-class{
            display: block;
            overflow: hidden;
            width: 20px;
            height: 20px;
            font-size: 20px;
            text-align: center;
            margin: 0 auto;
            & > * {
                width: 20px;
                height: 20px;
            }
        }
        .label-class{
            display: block;
            overflow: hidden;
            width: 100%;
            height: 14px;
            line-height: 14px;
            font-size: 10px;
            & > * {
                font-size: 10px;
            }
        }
    }
</style>
