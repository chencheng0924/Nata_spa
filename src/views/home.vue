<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'
import { getAssetsFile, getAssetsFileIcon } from '@/utils/commonUse.js'
const optionList = ref(['HOME', 'SERVICES', 'GALLERY', 'CONTACT US'])
const serviceList = ref(['Dermalogica', 'Lumenis', 'Skincare', 'PCA Skin', 'Treatments', 'TriLift'])
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
const successMes = () => {
  ElMessage('successfully sent.')
}
const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
      if (valid) {
        const mailData = {
          name: tableForm.name,
          email: tableForm.email,
          message: tableForm.message,
        }
        console.log('mailData', mailData)
        emailjs.send('service_dmyuq3x', 'template_wpc6tuk', mailData, 'Gj4qVySalyOlMjmDT').then(() => {
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
onMounted(() => {

});
</script>

<template>
  <div class="w-full bg-primaryBg flex flex-col justify-center items-center pt-[126px]">
    <div id="HOME" class="flex flex-col justify-center items-center w-full">
      <div class="w-full fixed top-0 z-50 flex justify-evenly py-[3rem] text-primary bg-primaryBg">
        <div class="text-[1.25rem] text-bold">Nata Spa New York</div>
        <div class="flex items-center gap-6">
          <div class="cursor-pointer" v-for="(item, index) in optionList" :key="index" @click="scrollTo(item)">{{ item }}</div>
        </div>
      </div>
      <div class="w-full">
        <carousel :autoplay="5000" :wrap-around="true">
          <slide v-for="slide in 3" :key="slide">
            <div class="w-full h-[34rem]">
              <img class="w-full h-full" :src="getAssetsFile(`banner/banner${slide}.png`)" alt="">
            </div>
          </slide>
        </carousel>
      </div>
      <div class="w-[75rem] h-[35rem] relative flex justify-end items-center max-w-[120rem]">
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
  <div id="SERVICES" class="bg-secondBg py-[5rem] flex flex-col justify-center items-center">
    <div class="text-second text-[2rem] pb-[2rem]">NATA SPA SERVICES</div>
    <div class='flex justify-center flex-wrap gap-[4.5rem] w-[75rem]'>
      <div v-for="(item, index) in serviceList" :key="index" class="cursor-pointer">
        <img class="w-[19.25rem] h-[13rem]" :src="getAssetsFile(`service/service${index + 1}.jpg`)" alt="">
        <div class="bg-second h-[3.5rem] flex justify-center items-center text-white text-[18px]">{{ item }}</div>
      </div>
    </div>
  </div>
  <div class="bg-contactUsBg flex flex-col justify-center items-center">
    <div class="text-white pt-[6rem]">
      <div class="text-[2.25rem] font-[700]"><span class="text-[2.5rem]">Connect</span>with Us for Your Glow-Up!</div>
      <div class="text-[2.25rem] font-[700]">Start Your Spa Experience <span>Today</span></div>
    </div>
    <div class="w-full flex justify-center py-[5rem]">
      <div class="flex justify-center items-center w-[1200px]">
        <div class="w-[30%] h-full" />
        <div class="w-[70%] flex justify-center items-center relative">
          <div class="w-[25.75rem] h-[17.5rem] absolute left-[-35%]">
            <img class="w-full h-full object-cover" src="@/assets/img/homePage2.png" alt="NataSpa">
            <img class="w-[14.75rem] h-[13.5rem] object-cover absolute top-[9.5rem] left-[-9.5rem]" src="@/assets/img/star.png" alt="">
          </div>
          <div class="w-[45.5rem] h-[48.5rem] bg-white rounded-2xl flex flex-col justify-center items-center">
            <div class="text-[1.5rem] relative pb-[1.5rem]">CONTACT US<div class="absolute bottom-0 right-[-25%] h-[2px] w-[150%] bg-black"></div></div>
            <el-form :model="tableForm" ref="ruleFormRef" :rules="rules" class="flex flex-col justify-center items-center gap-[1.5rem] my-[2.5rem]">
              <el-form-item v-for="(item, index) in inputList" :key="index" :label="item.title" class="flex flex-col" :prop="item.model">
                <el-input v-model="tableForm[item.model]" class="w-[391px]" :class="{'!h-[166px]': item.type == 'textarea'}" :placeholder="`Please enter your ${item.model}`" :type="item.type" :maxlength="item.max" />
              </el-form-item>
              <el-button class="bg-black text-white w-[8rem] h-[3.5rem] rounded-2xl" @click="submitForm(ruleFormRef)">SUBMIT</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="CONTACT US" class="flex h-[38rem]">
    <div class="w-[60%] bg-primary flex justify-center items-center gap-10">
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
    <div class="h-full w-[40%]"><img class="w-full h-full object-cover" src="@/assets/img/footer.png" alt=""></div>
  </div>
</template>

<style lang="scss" scoped>
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