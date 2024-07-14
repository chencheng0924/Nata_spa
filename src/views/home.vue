<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'
import { getAssetsFile, getAssetsFileIcon } from '@/utils/commonUse.js'
const optionList = ref(['HOME', 'ABOUT', 'SERVICES', 'GALLERY', 'CONTACT US'])
const serviceList = ref(['Dermalogica', 'PCA Skin Chemical Peel', 'Steller M22', 'Casmara', 'Dermalogica Micro-Needling', 'Laser Hair Removal', 'TriLift'])
const iconList = ref([
  {name: 'fb', url: 'https://www.facebook.com/profile.php?id=61561371057067&mibextid=LQQJ4d'},
  {name: 'ig', url: 'https://www.instagram.com/nataspany?fbclid=IwZXh0bgNhZW0CMTAAAR2F_LqrcGtS2ctenKvz8Ne4p557hFEPx7-zfSROkCSYQfzmin1tkucFtzA_aem_-Y4PpjdBWGciIpeuKGKcGw'},
  {name: 'google', url: 'https://www.google.com/search?q=Nata+Spa+New+York+%E8%B1%90%E5%A6%8D%EF%BD%9C+%E6%9B%BC%E5%93%88%E9%A1%BF%E7%BE%8E%E5%AE%B9%E9%99%A2+%EF%BD%9C%E7%BA%BD%E7%BA%A6%E7%A5%9B%E7%97%98&oq=nata&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYOTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBBzYyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'}
])
const inputList = ref([
  {title: 'NAME', type: 'input', model: 'name'},
  {title: 'EMAIL', type: 'input', model: 'email'},
  {title: 'MESSAGE', type: 'textarea', max: 50, model: 'message'},
])
const ruleFormRef = ref('')
const tableForm = reactive({
  name: '',
  email: '',
  message: '',
})
const rules = reactive({
  name: [
    { required: true, message: "Please enter your name", trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
  ],
  message: [
    { required: true, message: 'Please enter your message', trigger: 'blur' },
  ],
})
const btnDis = ref(false)
const successMes = () => {
  ElMessage('successfully sent.')
}
const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
      if (valid) {
        btnDis.value = true
        const mailData = {
          Name: tableForm.name,
          email: tableForm.email,
          message: tableForm.message,
        }
        emailjs.send('service_dmyuq3x', 'template_wpc6tuk', mailData, 'Gj4qVySalyOlMjmDT').then(() => {
          tableForm.name = ''
          tableForm.email = ''
          tableForm.message = ''
          btnDis.value = false
          successMes()
        })
        return true
      } else {
        return false
      }
    })
  } 
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
const picType = ref('')
const nowPic = computed(() => {
  return getAssetsFile(`service/${p.value}.${picType.value}`)
})
const show = (type, idx, limit, picTypeName) => {
  console.log(idx)
  pLimit.value = limit
  pType.value = type
  showBigPhoto.value = true
  nowIndex.value = idx
  p.value = type + (idx + 1).toString()
  picType.value = picTypeName
  console.log(picType.value)
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
const scrollTo = (id) => {
  const element = document.getElementById(id)
  if(element){
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 120;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
const treatments = ref([
  {
    type: 1,
    treatments: [
      {
        title: '',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'Pro Clam Treatment', memberPrice: 179.9, nonMemberPrice: 269 },
          { name: 'Pro Clear Treatment', memberPrice: 179.9, nonMemberPrice: 269 },
          { name: 'Pro Bright Anti-aging Treatment', memberPrice: 179.9, nonMemberPrice: 269 }
        ]
      }
    ]
  },
  {
    type: 1,
    treatments: [
      {
        title: '',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'Facial', memberPrice: 200, nonMemberPrice: 269 },
          { name: 'Neck', memberPrice: 140, nonMemberPrice: 199 },
          { name: 'Chest', memberPrice: 140, nonMemberPrice: 199 },
          { name: 'Neck+Chest', memberPrice: 180, nonMemberPrice: 249 },
          { name: 'Upper Arm', memberPrice: 200, nonMemberPrice: 269 },
          { name: 'Forearm', memberPrice: 180, nonMemberPrice: 249 },
          { name: 'Whole Arm', memberPrice: 250, nonMemberPrice: 349 },
          { name: 'Back', memberPrice: 250, nonMemberPrice: 349 },
          { name: 'Hip', memberPrice: 200, nonMemberPrice: 269 },
          { name: 'Thigh', memberPrice: 250, nonMemberPrice: 349 },
          { name: 'Calf', memberPrice: 200, nonMemberPrice: 269 },
          { name: 'Whole Leg', memberPrice: 320, nonMemberPrice: 449 }
        ]
      }
    ]
  },
  {
    type: 1,
    treatments: [
      {
        title: '',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'IPL Facial', memberPrice: 400, nonMemberPrice: 499 },
          { name: 'ResurFx(Non-ablative fractional laser)', memberPrice: 600, nonMemberPrice: 699 }
        ]
      }
    ]
  },
  {
    type: 1,
    treatments: [
      {
        title: '',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'Skin Sensations Treatment', memberPrice: 180, nonMemberPrice: 269 },
          { name: 'Age Defense Treatment', memberPrice: 180, nonMemberPrice: 269 },
          { name: 'Ocean Miracle Treatment', memberPrice: 180, nonMemberPrice: 269 },
          { name: 'Purifying Treatment', memberPrice: 180, nonMemberPrice: 269 },
          { name: 'Infinity Rejuvenation Treatment', memberPrice: 180, nonMemberPrice: 269 },
          { name: 'Rgnerin Treatment', memberPrice: 180, nonMemberPrice: 269 }
        ]
      }
    ]
  },
  {
    type: 1,
    treatments: [
      {
        title: '',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'Brightening', memberPrice: 267, nonMemberPrice: 369 },
          { name: 'Anti-acne', memberPrice: 267, nonMemberPrice: 369 },
          { name: 'Anti-age', memberPrice: 267, nonMemberPrice: 369 },
          { name: 'Hydration', memberPrice: 267, nonMemberPrice: 369 },
          { name: 'ASCE SRLV-S', memberPrice: 333, nonMemberPrice: 469 }
        ]
      }
    ]
  },
  {
    type: 2,
    treatments: [
      {
        title: '',
        headerList: ['Times'],
        items: [
          { name: 'Facial', price: 200, times: 5 },
          { name: 'Lip', price: 140, times: 5 },
          { name: 'Armpit', price: 140, times: 5 },
          { name: 'Whole Are', price: 180, times: 5 },
          { name: 'Chest', price: 200, times: 5 },
          { name: 'Whole Back', price: 180, times: 5 },
          { name: 'Whole Leg', price: 250, times: 5 },
          { name: 'Finger', price: 250, times: 5 },
          { name: 'Toes', price: 200, times: 5 },
          { name: 'Abdomen', price: 250, times: 5 },
          { name: 'Neck', price: 200, times: 5 }
        ]
      }
    ]
  },
  {
    type: 1, 
    treatments: [
      {
        title: 'Trilift',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'Trilift 3 in 1(Face+eye+trifx)', memberPrice: 1299, nonMemberPrice: 933 },
          { name: 'Trilift 2 in 1(Face+eye)', memberPrice: 799, nonMemberPrice: 699 },
          { name: 'Trilift Face', memberPrice: 699, nonMemberPrice: 533 },
          { name: 'Trilift Eye', memberPrice: 349, nonMemberPrice: 233 }
        ]
      },
      {
        title: 'Trifx (RF micro-needling)',
        headerList: ['Member Price', 'Non-Member Price'],
        items: [
          { name: 'Trifx Face+Neck', memberPrice: 799, nonMemberPrice: 599 },
          { name: 'Trifx Face', memberPrice: 699, nonMemberPrice: 566 },
          { name: 'Trifx Neck', memberPrice: 599, nonMemberPrice: 466 },
        ]
      }
    ]
  }
])
const countLength = (list) => {
  return `w-1/${12/(list.length)}`
}
const countLength2 = (list) => {
  return `w-4/${12/(list.length)}`
}
onMounted(() => {

});
</script>

<template>
  <div class="w-full bg-primaryBg flex flex-col justify-center items-center pt-[126px]">
    <div id="HOME" class="flex flex-col justify-center items-center w-full">
      <div class="w-full fixed top-0 z-50 flex justify-evenly py-[3rem] text-primary bg-[#f8f8f8]">
        <div class="text-[1.25rem] font-bold lato">Nata Spa New York</div>
        <div class="flex items-center gap-6">
          <div class="cursor-pointer lato" v-for="(item, index) in optionList" :key="index" @click="scrollTo(item)">{{
            item }}</div>
        </div>
      </div>
      <!-- banner 輪播 -->
      <!-- <div class="w-full">
        <carousel :autoplay="5000" :wrap-around="true">
          <slide v-for="slide in 3" :key="slide">
            <div class="w-full h-[34rem]">
              <img class="w-full h-full" :src="getAssetsFile(`banner/banner${slide}.png`)" alt="">
            </div>
          </slide>
        </carousel>
      </div> -->
      <!-- banner + 左側配字 (new) -->
      <div class="bannerBg relative">
        <div class="absolute top-[30%] left-[14%] flex flex-col gap-[37px]">
          <div data-aos="fade-right" data-aos-duration="1500"
            class="text-white font-[600] text-[38px] tracking-widest lato">Beauty Begins
            with<br />Healthy
            Skin.<br />Begin Your Journey at<br />Nata Spa.</div>
          <div data-aos="fade-right" data-aos-duration="1500" class="text-[20px] font-[500] tracking-widest lato">Make
            an appointment: (518) 212-0188</div>
        </div>
      </div>
      <div id="ABOUT" class="w-full flex justify-center bg-[#f8f8f8] py-[9rem]">
        <div class="w-[80%] flex items-center justify-center">
          <img class="h-[557px] laptop:h-[377px]" src="@/assets/img/homePage.png" alt="NataSpa">
          <div
            class="bg-white py-[2rem] px-[3rem] text-[#185EDB] font-[800] text-[3rem] leading-[50px] flex flex-col items-center justify-center gap-[1rem] h-[90%]">
            <div class="whitespace-nowrap lato laptop:hidden">
              <span>YOUR PATH TO</span>
              <hr>
              <span>PERFECT SKIN</span>
            </div>
            <div class="lato desktop:hidden">
              <span class="whitespace-nowrap text-[20px]">YOUR PATH TO PERFECT SKIN</span>
            </div>
            <div
              class="text-[#000] text-[18px] font-[400] leading-5 lato w-full tracking-widest laptop:w-[326px] laptop:text-[14px]">
              Established in 2021, Nata Spa NY is dedicated to providing our clients with exceptional care through our
              professionally trained staff. We offer the most effective treatments to maintain and enhance the health
              and beauty of your skin.
            </div>
            <div
              class="text-[#000] text-[18px] font-[400] leading-5 lato w-full tracking-widest laptop:w-[326px] laptop:text-[14px]">
              Our team is committed to delivering personalized skincare advice, customized routines, and expert guidance
              to help you achieve a radiant complexion every day. Join us and discover how we can assist you in
              revealing your true beauty.
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="w-[75rem] h-[35rem] relative flex justify-end items-center max-w-[120rem]">
        <img class="z-20 absolute top-[25%] left-0 w-[17.5rem] h-[19rem]" src="@/assets/img/homePage1.png" alt="NataSpa">
        <img class="z-30 absolute top-[17.5%] left-[20%] w-[22.5rem] h-[18rem]" src="@/assets/img/homePage2.png" alt="NataSpa">
        <div class="z-10 absolute top-[35%] left-[40%] bg-circleBg rounded-full w-[18rem] h-[18rem]" />
        <div class="z-40 flex flex-col w-[25rem]">
          <div class="text-second text-[40px] lato font-extrabold">TIMELESS BEAUTY,<br>TIMELESS YOU!</div>
          <div class="text-[18px] leading-5 lato">Experience the epitome of luxury and relaxation at our No.1 Best Beauty Spa in NY, New York. With an unrivaled reputation for excellence, we offer a comprehensive range of services that cater to your every care need. Our expert technicians specialize in skincare, acne and spot removal, facial treatments, ensuring that you leave our spa feeling utterly pampered and looking stunning.</div>
        </div>
      </div> -->
    </div>
  </div>
  <div id="SERVICES" class="bg-secondBg py-[5rem] px-[12.5%] flex flex-col justify-center items-center">
    <div class="text-second text-[2rem] pb-[2rem]">
      <div class="font-[800]">NATA SPA SERVICES</div>
      <div class="text-[20px] text-[#000]">
        We specializes in non-invasive facial and body treatments. We utilize injectables, advanced laser technology,
        and medical-grade skincare to help you look and feel your best.
      </div>
    </div>
    <div class='flex flex-col justify-center flex-wrap gap-[4.5rem] w-full'>
      <!-- @click="show('service', index, serviceList.length)" -->
      <div v-for="(item, index) in serviceList" :key="index" class="flex gap-[3rem]">
        <div class="w-[70%] flex items-start">
          <img class="w-full h-[19.5rem] object-contain" :src="getAssetsFile(`service/service${index + 1}.png`)" alt="">
        </div>
        <div class="w-full">
          <div
            class="bg-black w-full h-[3.5rem] flex justify-center items-center text-white text-[1.5rem] lato font-normal lato">
            {{ item }}</div>
          <div class="max-w-3xl mx-auto">
            <div v-for="(group, groupIndex) in treatments" :key="groupIndex" class="mb-8 lato">
              <template v-if="groupIndex == index">
                <div v-for="(itm, idx) in group.treatments" :key="idx">
                  <!-- <div class="text-left my-[1.5rem] lato text-black font-[700] text-[20px]">{{ itm.title }}</div> -->
                  <table class="w-full text-left lato">
                    <thead>
                      <tr>
                        <th class="py-2 text-[20px] font-[700]" :style="{ width: '85%' }"
                          :class="{'!w-[70%]': itm.headerList.length > 1}">{{ itm.title }}</th>
                        <th class="py-2 text-center lato" :style="{ width: `${ˇ30 / itm.headerList.length}%` }"
                          :class="{'!w-[15%]': itm.headerList.length == 1 }" v-for="(itm2, idx2) in itm.headerList"
                          :key="idx2">
                          {{ itm2 }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="treatment in itm.items" :key="treatment.name"
                        class="border-b border-dotted border-gray-300">
                        <td class="py-2 flex gap-[2rem] items-center lato">
                          <span>{{ treatment.name }}</span>
                          <span class="flex-grow border-b-[2.5px] border-dotted border-gray-500 mx-2"></span>
                        </td>
                        <td v-if="group.type == 1" class="py-2 text-center">${{ treatment.memberPrice }}</td>
                        <td v-if="group.type == 1" class="py-2 text-center lato">${{ treatment.nonMemberPrice }}</td>
                        <td v-if="group.type == 2" class="py-2 text-center lato">${{ treatment.price }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 半圓簡介區 -->
  <!-- <div class="w-full h-[32.063rem] bg-primaryBg relative flex justify-center items-end">
    <div class="w-[746px] h-[437px] relative bgimg">
      <div data-aos="zoom-in" data-aos-duration="1500"
        class="bg-second w-[299px] h-[143px] font-extrabold text-[40px] text-center pt-[19px] text-white lato leading-[48px] tracking-widest absolute bottom-[108px] left-[-150px]">
        About<br />Nata Spa
      </div>
      <img data-aos="fade-down-left" data-aos-duration="1500" src="@/assets/img/carousel/c3.jpg" alt=""
        class="w-[193px] h-[193px] rounded-[50%] absolute right-[-96.5px] bottom-[41px] object-cover">
      <div class="px-[186px] pt-[72px] pb-[35px] leading-[23.04px] font-[600] tracking-widest flex flex-col gap-[12px]">
        <div class="lato" data-aos="fade-up" data-aos-duration="2000">Established in 2021, Nata Spa NY is dedicated to
          providing our clients with exceptional care through our professionally trained staff. We offer the most
          effective treatments to maintain and enhance the health and beauty of your skin.</div>
        <div class="lato" data-aos="fade-up" data-aos-duration="2000">Our team is committed to delivering personalized
          skincare advice, customized routines, and expert guidance to help you achieve a radiant complexion every day.
          Join us and discover how we can assist you in revealing your true beauty.</div>
      </div>
    </div>
  </div> -->
  <div id="GALLERY" class="w-full bg-[#f8f8f8] flex flex-col items-center py-[130px] gap-[84px]">
    <div class="flex flex-col items-center">
      <div class="lato font-extrabold text-second tracking-widest text-[48px] lato">Visual Journey of Rejuvenation</div>
      <div class="font-[600] text-second tracking-widest text-[32px] dancingScript">Gallery of Radiance</div>
    </div>
    <div class="w-screen py-10 flex flex-col items-center tablet:hidden">
      <div class="max-w-[1000px]">
        <Carousel :snapAlign="'center'" :breakpoints="breakpoints">
          <Slide v-for="slide in 13" :key="slide">
            <div class="carousel__item" @click="show('c', slide - 1, 13, 'jpg')">
              <img :src="getAssetsFile(`carousel/c${slide}.png`)"
                class="w-[220px] h-[281px] object-cover cursor-pointer">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <div id="CONTACT US" class="bg-contactUsBg flex flex-col justify-center items-center">
    <div class="text-white pt-[6rem]">
      <div class="text-[2.25rem] font-[700] lato tracking-widest"><span class="text-[2.5rem] dancingScript">Connect
        </span> with Us for Your Glow-Up!</div>
      <div class="text-[2.25rem] font-[700] text-center dancingScript">Start Your Spa Experience <span
          class="lato tracking-widest">Today</span></div>
    </div>
    <div class="w-full flex justify-center py-[5rem]">
      <div class="flex justify-center items-center w-[1200px]">
        <!-- <div class="w-[50%] h-full flex justify-center items-center">
          <div class="w-[25.75rem] relative flex flex-col">
            <img class="w-full h-full object-cover" src="@/assets/img/contact1.png" alt="NataSpa">
            <img class="w-[80%] flex self-end h-full object-cover mr-5" src="@/assets/img/contact2.png" alt="NataSpa">
            <img class="w-[14rem] h-[13rem] object-cover absolute top-[15rem] left-[-8rem]" src="@/assets/img/star.png"
              alt="">
          </div>
        </div> -->
        <a href="https://maps.app.goo.gl/5qfwdLNSHUCk3VtQ7" target="_blank">
          <img src="@/assets/img/map.png" alt=""
            class="desktop:w-[658px] laptop:w-[497px] translate-x-[30px] relative z-[100]">
        </a>
        <div class="desktop:w-[566px] laptop:w-[531px] flex justify-center items-center relative">
          <div class="w-[45.5rem] h-[48.5rem] bg-white rounded-2xl flex flex-col justify-center items-center">
            <div class="text-[1.5rem] relative pb-[1.5rem]">CONTACT US<div
                class="absolute bottom-0 right-[-25%] h-[2px] w-[150%] bg-black"></div>
            </div>
            <el-form :model="tableForm" ref="ruleFormRef" :rules="rules"
              class="flex flex-col justify-center items-center gap-[1.5rem] my-[2.5rem]">
              <el-form-item v-for="(item, index) in inputList" :key="index" :label="item.title" class="flex flex-col"
                :prop="item.model">
                <el-input v-model="tableForm[item.model]" class="w-[391px]"
                  :class="{'!h-[166px]': item.type == 'textarea'}" :placeholder="`Please enter your ${item.model}`"
                  :type="item.type" :maxlength="item.max" />
              </el-form-item>
              <el-button :disabled="btnDis" class="bg-black text-white w-[8rem] h-[3.5rem] rounded-2xl"
                @click="submitForm(ruleFormRef)">SUBMIT</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 四大圖片區 -->
  <div class="flex gap-[8px] py-[8px] px-[8px] relative">
    <img src="@/assets/img/four.png" alt="" class="w-full">
    <!-- <img :src="getAssetsFile(`pp${pic}.jpg`) " alt="" v-for="pic in 4" :key="pic"> -->
    <span
      class="absolute bottom-[80px] left-[50%] translate-x-[-50%] lato font-extrabold text-[64px] text-white italic">Unveil
      Your True Beauty Today!</span>
  </div>
  <div class="flex px-[12.5%] py-[6rem] justify-center">
    <div class="flex gap-[70px]">
      <div>
        <img src="@/assets/img/logo.png" alt="" class="desktop:w-[279] laptop:w-[215px]">
      </div>
      <div class="flex flex-col items-start">
        <span class="lato text-[39px] font-[800] tracking-widest">NATA SPA NEW YORK</span>
        <div class="flex gap-[58px] mt-[38px]">
          <div class="cursor-pointer text-[22px] font-[800]" @click="scrollTo(item)" v-for="(item, index) in optionList"
            :key="index">{{ item }}
          </div>
        </div>
        <div class="flex gap-[92px] mt-[48px]">
          <div class="flex flex-col">
            <div class="text-[24px] font-bold lato">CONTACT US</div>
            <div class="text-[19px] font-[400] lato">
              <div>(518) 212-0188</div>
              <div>22 E 21st St #7R, New York, NY 10010</div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="text-[24px] font-bold lato">FOLLOW US</div>
            <div class="flex mt-[20px]">
              <img @click="goOut(item.url)" class="flex cursor-pointer items-center w-[1.5rem] h-[1.5rem] mx-2"
                v-for="(item, index) in iconList" :key="index" :src="getAssetsFileIcon(`${item.name}.png`)" alt="">
            </div>
          </div>
        </div>
        <div class="mt-[46px] text-[14px] font-[300]">@2024 Nata Spa New York. All Rights Reserved.</div>
      </div>
    </div>
    <!-- <div class="w-full h-[312px] ml-[3rem]">
      <div class="text-[2rem] text-[#000] font-[800]">NATA SPA NEW YORK</div>
      <div class="flex justify-evenly items-center w-full h-[90%]">
        <div class="flex flex-col justify-evenly h-full">
          <div class="cursor-pointer text-[18px] font-[800]" v-for="(item, index) in optionList" :key="index">{{ item }}
          </div>
        </div>
        <div
          class="h-full text-[20px] text-[#000] font-[700] whitespace-nowrap flex flex-col justify-evenly gap-[1rem] pt-10">
          <div>CONTACT US</div>
          <div class="text-[16px] font-[400]">
            <div>(518) 212-0188</div>
            <div>22 E 21st St #7R, New York, NY 10010</div>
          </div>
          <div class="text-[12px] font-[300]">@2024 Nata Spa New York. All Rights Reserved.</div>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <div class="text-[#000] text-[1.5rem] lato">FOLLOW US</div>
          <div class="flex">
            <img @click="goOut(item.url)" class="flex cursor-pointer items-center w-[1.5rem] h-[1.5rem] mx-2"
              v-for="(item, index) in iconList" :key="index" :src="getAssetsFileIcon(`${item.name}.png`)" alt="">
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="w-[60%] bg-primary flex justify-center items-center gap-10">
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
    <div class="h-full w-[40%]"><img class="w-full h-full object-cover" src="@/assets/img/footer.png" alt=""></div> -->
  </div>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pic z-[1000]" v-if="showBigPhoto">
    <div class="pic w-screen h-screen absolute left-0 top-0 bg-black" @click="closeBigPhoto()"></div>
    <div class="absolute right-10 top-5 text-xl font-semibold text-white cursor-pointer z-[10]"
      @click="closeBigPhoto()">
      CLOSE</div>
    <img src="@/assets/img/arrow.png"
      class="rotate-180 w-[50px] absolute top-[50%] left-[10%] translate-y-[-50%] cursor-pointer mobile:left-[2%] z-[10]"
      v-if="nowIndex > 1" @click="changePicIndex('back')">
    <img :src="nowPic" class="h-[80vh] object-contain z-[10]">
    <img src="@/assets/img/arrow.png"
      class="w-[50px] absolute top-[50%] right-[10%] translate-y-[-50%] cursor-pointer mobile:right-[2%] z-[10]"
      v-if="nowIndex < pLimit" @click="changePicIndex('go')">
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
.bannerBg {
  background-image: url('@/assets/img/newBanner.png');
  width: 100vw;
  height: calc(100vw / 1920 * 822);
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
:deep(.el-form){
  .el-form-item__label{
    justify-content: flex-start;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 7px;
  }
  .el-input__wrapper, .el-textarea{
    height: 66px;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    .el-textarea__inner{
      height: 166px;
    }
  }
}
.star-shape {
  width: 200px;
  height: 200px;
  background-color: white;
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
    50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  padding: 20px;
  box-sizing: border-box;
}
</style>