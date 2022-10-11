<template>
  <div>
    <!-- Categories text with 2 yellow Svg -->
    <div class=" my-[1rem] mt-[4rem] mx-auto flex flex-row items-center justify-center font-Lalezar gap-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3" class="flex w-[5rem] md:w-[7rem]"
        viewBox="0 0 111 3">
        <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none" stroke="#fcb900"
          stroke-linecap="round" stroke-width="3" />
      </svg>
      <span class="font-Lalezar text-[0.75rem] md:text-[1rem] lg:text-[1.5rem]">دسته بندی محصولات</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3" class="flex w-[5rem] md:w-[7rem]"
        viewBox="0 0 111 3">
        <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none" stroke="#fcb900"
          stroke-linecap="round" stroke-width="3" />
      </svg>
    </div>

    <!-- Background white -->
    <div class="bg-white">
      <!-- Container -->
      <div class="container mx-auto my-[2.5rem]">
        <!-- Content -->
        <div class="flex flex-col md:flex-row">
          <!-- Image -->
          <div class="md:w-1/2">
            <img src="~/assets/images/hidden.png" alt="hidden hood" class="" />
          </div>
          <!-- Text -->
          <div class="flex flex-col md:w-1/2 px-2">
            <p class=" pb-2 text-start font-Lalezar text-[0.75rem] md:text-[1.5rem]"> هود مخفی</p>
            <p class=" pb-4 text-start font-VazirLight text-[0.75rem] md:text-[1rem]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <button class=" ml-[3rem] mr-auto w-[7rem] lg:w-[10rem] h-[2rem] lg:h-[3rem] bg-yellowHood rounded-tr-lg rounded-bl-lg hover:shadow-lg hover:drop-shadow-lg hover:shadow-yellow-400
              ">
              <p class=" text-[0.75rem] lg:text-[1rem] text-center text-textGray hover:text-white mb-1 px-1">جزئیات
                بیشتر</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesSection",
};
</script>