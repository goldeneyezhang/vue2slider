<template>
  <div id="home">
  <div class="section">
      <modal-dialog>
          <div slot="header">此处是header插槽的内容</div>
          <div>这个DIV将自动默认插槽的内容</div>
      </modal-dialog>
  </div>
  <div class="section">
      <div class="section">
          <announcement :announcement="announcement"></announcement>
    </div>
    <div class="section">
        <slider :slides="slides"></slider>
    </div>
    <div class="section">
        <book-list :books="lastUpdated" heading="最新更新" @onBookSelect="preview($event)">
        </book-list>
    </div>
    <div class="section">
        <book-list :books="recommended" heading="编辑推荐" @onBookSelect="preview($event)">
        </book-list>
    </div>
</div>
</div>
</template>
<script>
    import BookList from './components/BookList.vue'
    import Announcement from './components/Announcement.vue'
    import Slider from './components/Slider.vue'
    import ModalDialog from "./components/Dialog.vue"
    export default{
        data(){
            return {
            announcement:'',
            slides:[],
            lastUpdated:[
            ],
            recommended:[
            ]
            }
        },
        components:{
            BookList,
            Announcement,
            Slider,
            ModalDialog
        },
        methods:{
            preview(book){
                alert("显示图书详情")
            }
        },
        created(){
            this.$http.get('../src/fixtures/home/home.json').then((res)=>{ 
                for (var prop in res.body) {
                    this[prop]=res.body[prop]
                }
            },(error)=>{
                console.log('获取数据失败:${error}')
            })
        }
    }
</script>