<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { getAssetsFile, getAssetsFileIcon } from '@/utils/commonUse.js'
const optionList = ref(['HOME', 'SERVICES', 'GALLERY', 'CONTACT US'])
const serviceList = ref(['Dermalogica', 'Lumenis', 'Skincare', 'PCA Skin', 'Treatments', 'TriLift'])
const iconList = ref([
  {name: 'fb', url: 'https://www.facebook.com/profile.php?id=61561371057067&mibextid=LQQJ4d'},
  {name: 'ig', url: 'https://www.instagram.com/nataspany?fbclid=IwZXh0bgNhZW0CMTAAAR2F_LqrcGtS2ctenKvz8Ne4p557hFEPx7-zfSROkCSYQfzmin1tkucFtzA_aem_-Y4PpjdBWGciIpeuKGKcGw'},
  {name: 'google', url: 'https://www.google.com/search?q=Nata+Spa+New+York+%E8%B1%90%E5%A6%8D%EF%BD%9C+%E6%9B%BC%E5%93%88%E9%A1%BF%E7%BE%8E%E5%AE%B9%E9%99%A2+%EF%BD%9C%E7%BA%BD%E7%BA%A6%E7%A5%9B%E7%97%98&oq=nata&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYOTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBBzYyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'}
])
const goOut = (url) => {
  window.open(url, '_blank');
}
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1290: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
const showBigPhoto = ref(false)
const p = ref('')
const pType = ref('')
const pLimit = ref(0)
const nowIndex = ref(0)
const nowPic = computed(() => {
  return getAssetsFile(`service/${p.value}.jpg`)
})
const show = (type, idx, limit) => {
  pLimit.value = limit
  pType.value = type
  showBigPhoto.value = true
  nowIndex.value = idx
  p.value = type + (idx + 1).toString()
  const elHtml = document.querySelector('html')
  elHtml.style.overflowY = 'hidden'
}
const changePicIndex = (type) => {
  type == 'back' ? nowIndex.value -= 1 : nowIndex.value += 1
  let n = nowIndex.value
  p.value = pType.value + n.toString()
}
const closeBigPhoto = () => {
  showBigPhoto.value = false
  const elHtml = document.querySelector('html')
  elHtml.style.overflowY = null
}
onMounted(() => {

});
</script>

<template>
  <div class="w-full bg-primaryBg flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center w-full max-w-[1920px]">
      <div class="flex justify-between w-[55%] py-[3rem] text-primary">
        <div class="text-[1.25rem] lato font-bold">Nata Spa New York</div>
        <div class="flex items-center gap-6">
          <div class="cursor-pointer lato" v-for="(item, index) in optionList" :key="index">{{ item }}</div>
        </div>
      </div>
      <div>
        <carousel :autoplay="5000" :wrap-around="true">
          <slide v-for="slide in 3" :key="slide">
            <div class="w-full h-[34rem]">
              <img class="w-full h-full" :src="getAssetsFile(`banner/banner${slide}.png`)" alt="">
            </div>
          </slide>
        </carousel>
      </div>
      <div class="w-[75%] h-[35rem] relative flex justify-end items-center">
        <img class="z-20 absolute top-[25%] left-0 w-[17.5rem] h-[19rem]" src="@/assets/img/homePage1.png" alt="NataSpa">
        <img class="z-30 absolute top-[17.5%] left-[20%] w-[22.5rem] h-[18rem]" src="@/assets/img/homePage2.png" alt="NataSpa">
        <div class="z-10 absolute top-[35%] left-[40%] bg-circleBg rounded-full w-[18rem] h-[18rem]" />
        <div class="z-40 flex flex-col w-[25rem]">
          <div class="text-second text-[40px] lato font-extrabold">TIMELESS BEAUTY,<br>TIMELESS YOU!</div>
          <div class="text-[18px] leading-5 lato">Experience the epitome of luxury and relaxation at our No.1 Best Beauty Spa in NY, New York. With an unrivaled reputation for excellence, we offer a comprehensive range of services that cater to your every care need. Our expert technicians specialize in skincare, acne and spot removal, facial treatments, ensuring that you leave our spa feeling utterly pampered and looking stunning.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-secondBg py-[5rem] flex flex-col justify-center items-center">
    <div class="text-second text-[2rem] pb-[2rem] lato font-normal">NATA SPA SERVICES</div>
    <div class='flex justify-center flex-wrap gap-[4.5rem] w-[75%]'>
      <div v-for="(item, index) in serviceList" :key="index" class="cursor-pointer" @click="show('service', index, serviceList.length)">
        <img class="w-[19.25rem] h-[13rem]" :src="getAssetsFile(`service/service${index + 1}.jpg`)" alt="">
        <div class="bg-second h-[3.5rem] flex justify-center items-center text-white text-[18px] lato font-normal">{{ item }}</div>
      </div>
    </div>
  </div>
  <div class="w-full h-[32.063rem] bg-primaryBg relative flex justify-center items-end">
    <div class="w-[746px] h-[437px] relative bgimg">
      <div data-aos="zoom-in" class="bg-second w-[299px] h-[143px] font-extrabold text-[40px] text-center pt-[19px] text-white lato leading-[48px] tracking-widest absolute bottom-[108px] left-[-150px]">
        About<br/>Nata Spa
      </div>
      <img data-aos="fade-down-left" src="@/assets/img/carousel/c3.jpg" alt="" class="w-[193px] h-[193px] rounded-[50%] absolute right-[-96.5px] bottom-[41px] object-cover">
      <div class="px-[186px] pt-[72px] pb-[35px] leading-[23.04px] font-[600] tracking-widest flex flex-col gap-[12px]">
        <div class="lato" data-aos="fade-up">Established in 2021, Nata Spa NY is dedicated to providing our clients with exceptional care through our professionally trained staff. We offer the most effective treatments to maintain and enhance the health and beauty of your skin.</div>
        <div class="lato" data-aos="fade-up">Our team is committed to delivering personalized skincare advice, customized routines, and expert guidance to help you achieve a radiant complexion every day. Join us and discover how we can assist you in revealing your true beauty.</div>
      </div>
    </div>
  </div>
  <div class="w-full h-[846px] bg-secondBg flex flex-col items-center pt-[168px] gap-[84px]">
    <div class="flex flex-col items-center">
      <div class="lato font-extrabold text-second tracking-widest text-[48px] lato">Visual Journey of Rejuvenation</div>
      <div class="font-[600] text-second tracking-widest text-[32px] dancingScript">Gallery of Radiance</div>
    </div>
    <div class="w-screen py-10 flex flex-col items-center tablet:hidden">
      <div class="max-w-[1000px]">
        <Carousel :snapAlign="'center'" :breakpoints="breakpoints">
          <Slide v-for="slide in 8" :key="slide">
            <div class="carousel__item">
              <img :src="getAssetsFile(`carousel/c${slide}.jpg`)" class="w-[220px] h-[281px] object-cover">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <div class="flex h-[38rem]">
    <div class="w-[55%] bg-primary flex justify-center items-center gap-10">
      <div>
        <img src="@/assets/img/logo.png" alt="">
        <div class="text-[2rem] text-white leading-10 flex justify-center items-center text-center font-extrabold lato">NATA SPA <br>NEW YORK</div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="text-[28px] text-white font-[700] lato">CONTACT US</div>
        <div>
          <div class="text-white font-[300] lato">PHONE</div>
          <div class="text-white font-[600] lato">(518) 212-0188</div>
        </div>
        <div>
          <div class="text-white font-[300] lato">ADDRESS</div>
          <div class="text-white font-[600] lato">22 E 21st St #7R, New York, NY 10010</div>
        </div>
        <div class="flex items-center mt-10">
          <div class="text-white text-[1.5rem] mr-10 lato">FOLLOW US</div>
          <img @click="goOut(item.url)" class="flex cursor-pointer items-center w-[1.5rem] h-[1.5rem] mx-2" v-for="(item, index) in iconList" :key="index" :src="getAssetsFileIcon(`${item.name}.png`)" alt="">
        </div>
      </div>
    </div>
    <div class="h-full w-[45%]"><img class="h-full" src="@/assets/img/footer.png" alt=""></div>
  </div>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pic z-[1000] bg-black" v-if="showBigPhoto">
    <div class="absolute right-10 top-5 text-xl font-semibold z-20 text-white cursor-pointer" @click="closeBigPhoto()">CLOSE</div>
      <img src="@/assets/img/arrow.png" class="rotate-180 w-[50px] absolute top-[50%] left-[10%] translate-y-[-50%] cursor-pointer mobile:left-[2%]" v-if="nowIndex > 1" @click="changePicIndex('back')">
    <img :src="nowPic" class="w-[70vw] h-[80vh] object-contain">
    <img src="@/assets/img/arrow.png" class="w-[50px] absolute top-[50%] right-[10%] translate-y-[-50%] cursor-pointer mobile:right-[2%]" v-if="nowIndex < pLimit" @click="changePicIndex('go')">
  </div>
</template>

<style lang="scss" scoped>
.dancingScript {
  font-family: "Dancing Script", cursive;
}
.lato {
  font-family: "Lato", sans-serif;
}
.bgimg {
  background-image: url('@/assets/img/re.png');
}
:deep(.carousel__next) {
  transform: translate(30px, -30px);
  width: 73px;
  height: 73px;
  background-image: url(@/assets/img/arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  .carousel__icon {
    display: none;
  }
}
:deep(.carousel__prev) {
  transform: translate(-30px, -30px) rotate(180deg);
  width: 73px;
  height: 73px;
  background-image: url(@/assets/img/arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  .carousel__icon {
    display: none;
  }
}
</style>