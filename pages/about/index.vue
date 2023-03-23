<template>
  <div>
    <div class="bg-white rounded-b-[20rem] border-yellowHood border-b-2">
      <div class="h-[10rem] lg:h-[15rem] xl:h-[20rem] container mx-auto flex flex-row justify-center items-center text-center
        ">
        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3"
          class="hidden sm:flex w-[4rem] md:w-[6rem] lg:w-[7rem]" viewBox="0 0 111 3">
          <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none" stroke="#fcb900"
            stroke-linecap="round" stroke-width="3" />
        </svg>
        <span class="font-Lalezar md:top-16 text-sm md:text-[2rem] lg:text-[3rem]">درباره ما</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="3"
          class="hidden sm:flex w-[4rem] md:w-[6rem] lg:w-[7rem]" viewBox="0 0 111 3">
          <line id="Line_2" data-name="Line 2" x2="108" transform="translate(1.5 1.5)" fill="none" stroke="#fcb900"
            stroke-linecap="round" stroke-width="3" />
        </svg>
      </div>
    </div>

    <!-- Card -->
    <div class="mt-[2rem]">
      <!-- Container -->
      <div
        class="relative container mx-auto bg-bgBg shadow-lg -top-[4rem] md:-top-[3rem] lg:-top-[7rem] min-h-[20rem] w-[20rem] sm:w-[25rem] md:w-[29rem] lg:w-[40rem] xl:w-[50rem]">
        <div class="flex flex-col justify-center">
          <!-- 
                        Inja bayad edit beshe hanooz khoob nist va kar nemikone
                     -->
          <img srcset="
              ~/static/images/about_us.jpg  640w,
              ~/static/images/about_lg.jpg  768w,
              ~/static/images/about_xl.jpg 1024w
            " sizes="70vmin" alt="about us image" class="w-full" />
          <p
            class=" font-VazirLight text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-start pt-5 px-2 md:px-5 lg:px-8 leading-8 lg:leading-10 xl:leading-[2.75rem]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
          <p
            class=" hidden sm:flex font-VazirLight text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-start pt-3 px-2 md:px-5 lg:px-8 leading-8 lg:leading-10 xl:leading-[2.75rem]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  head() {
    return {
      title: "درباره ما",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "هر آنچه درباره خدمات و پرسنل شرکت ما باید بدانید",
        },
      ],
    };
  },
};
</script>