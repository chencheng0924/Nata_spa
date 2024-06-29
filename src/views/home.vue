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
onMounted(() => {

});
</script>

<template>
  <div class="w-full bg-primaryBg flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center w-full max-w-[1920px]">
      <div class="flex justify-between w-[55%] py-[3rem] text-primary">
        <div class="text-[1.25rem] text-bold">Nata Spa New York</div>
        <div class="flex items-center gap-6">
          <div class="cursor-pointer" v-for="(item, index) in optionList" :key="index">{{ item }}</div>
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
          <div class="text-second text-[40px] text-bold">TIMELESS BEAUTY,<br>TIMELESS YOU!</div>
          <div class="text-[18px] leading-5">Experience the epitome of luxury and relaxation at our No.1 Best Beauty Spa in NY, New York. With an unrivaled reputation for excellence, we offer a comprehensive range of services that cater to your every care need. Our expert technicians specialize in skincare, acne and spot removal, facial treatments, ensuring that you leave our spa feeling utterly pampered and looking stunning.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-secondBg py-[5rem] flex flex-col justify-center items-center">
    <div class="text-second text-[2rem] pb-[2rem]">NATA SPA SERVICES</div>
    <div class='flex justify-center flex-wrap gap-[4.5rem] w-[75%]'>
      <div v-for="(item, index) in serviceList" :key="index" class="cursor-pointer">
        <img class="w-[19.25rem] h-[13rem]" :src="getAssetsFile(`service/service${index + 1}.jpg`)" alt="">
        <div class="bg-second h-[3.5rem] flex justify-center items-center text-white text-[18px]">{{ item }}</div>
      </div>
    </div>
  </div>
  <div class="flex h-[38rem]">
    <div class="w-[55%] bg-primary flex justify-center items-center gap-10">
      <div>
        <img src="@/assets/img/logo.png" alt="">
        <div class="text-[2rem] text-white leading-10 flex justify-center items-center text-center">NATA SPA <br>NEW YORK</div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="text-[28px] text-white font-[700]">CONTACT US</div>
        <div>
          <div class="text-white font-[300]">PHONE</div>
          <div class="text-white font-[600]">(518) 212-0188</div>
        </div>
        <div>
          <div class="text-white font-[300]">ADDRESS</div>
          <div class="text-white font-[600]">22 E 21st St #7R, New York, NY 10010</div>
        </div>
        <div class="flex items-center mt-10">
          <div class="text-white text-[1.5rem] mr-10">FOLLOW US</div>
          <img @click="goOut(item.url)" class="flex cursor-pointer items-center w-[1.5rem] h-[1.5rem] mx-2" v-for="(item, index) in iconList" :key="index" :src="getAssetsFileIcon(`${item.name}.png`)" alt="">
        </div>
      </div>
    </div>
    <div class="h-full w-[45%]"><img class="h-full" src="@/assets/img/footer.png" alt=""></div>
  </div>
</template>

<style lang="scss" scoped>
</style>