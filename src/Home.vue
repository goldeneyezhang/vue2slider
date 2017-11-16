<template>
  <div id="home">
  <div class="section">
      <modal-dialog ref="dialog" @dialogClose="selected=undefined">
          <div slot="header">
              <div class="dismiss" @click.prevent="$refs.dialog.close()"></div>
            </div>
         <div v-if="selected">
              <img :src="selected.img_url">
          </div>
         <div v-if="selected">
              {{selected.title}}
          </div>
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
    import faker from "./fixtures/faker.js"

    //判断当前环境是否是开发环境
    const debug=process.env.Node_ENV!=='production'

    export default{
        data(){
            return {
            announcement:'',
            slides:[],
            lastUpdated:[
            ],
            recommended:[
            ],
            selected:undefined
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
               this.selected=book
               this.$refs.dialog.open()
            }
        },
        created(){
            if(debug){
                const fakeData=faker.getHomeData()
                for (var prop in fakeData){
                    this[prop]=fakeData[prop]
                }
            }
            else{
            this.$http.get('../src/fixtures/home.json').then((res)=>{ 
                for (var prop in res.body) {
                    this[prop]=res.body[prop]
                }
            },(error)=>{
                console.log('获取数据失败:${error}')
            })
            }
        }
    }
</script>