<template>
  <div
    class="uk-child-width-1-3@m uk-grid-small uk-padding-small"
    uk-grid
  >
    <li v-bind:key="product.id" v-for="product in products">
      <Product v-bind:product="product" />
    </li>
  </div>
</template>

<script>
import Product from './Product.vue';
// import { getProducts } from '../helpers/api.js';

export default {
  name: 'ProductList',
  props: {},
  data: function () {
    return {
      products: [
        {
          id: 0,
          title: 'Business Insole',
          description:
            'The 3D-printed insole for your business shoes: Wellness in the office! The neutral, natural bedding of your feet increases your well-being.',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/4nXksCQzpgbpQwWBc2us4M/6f158169643dd4ce8331db771c8215bd/business-insole-320px.png',
        },
        {
          id: 1,
          title: 'Work Insole',
          description:
            'The neutral, natural footbed of your feet gives you more support, reduces the fatigue of your foot muscles, prevents pressure point…',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/tkbcSPYF7rOyBAemnK4Fz/67a1e050581f99113d940183a60a4954/work-insole-320px.png',
        },
        {
          id: 2,
          title: 'Business Insole',
          description:
            'The 3D-printed insole for your business shoes: Wellness in the office! The neutral, natural bedding of your feet increases your well-being.',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/4nXksCQzpgbpQwWBc2us4M/6f158169643dd4ce8331db771c8215bd/business-insole-320px.png',
        },
        {
          id: 3,
          title: 'Biking Insole',
          description:
            'The light weight insole tailored to your personal foot print will help you deliver full power on the pedals.',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/7c6girFieJWGdKaev8KCxC/cdc508a3b66283120b76e15ba0dc10a0/biking-insole-320px.png',
        },
        {
          id: 4,
          title: 'Hiking Insole',
          description:
            'The custom insole to your personal footprint ensures you always embed into your hiking shoe the same way.',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/3RHG9t0uPm4sdjqYe6u3fU/94e928c09ba0611ca477033201895844/hiking-insole-320px.png',
        },
        {
          id: 5,
          title: 'Running Insole',
          description:
            'The bespoke insole matched to your footprint ensures you always retain the perfect physique in your running.',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/5XTKAbK2vFU1uIhBEEEfpI/ddfb7188e79e2a1504721ed53962082e/running-insole-320px-1.png',
        },
        {
          id: 6,
          title: 'Skiing Insole',
          description:
            'Your unique 3D printed insole for skiing. Tailor-made for your feet only. Add your personal fit to your ski boots.',
          image:
            'https://images.ctfassets.net/9eeicl4ji0wj/5foKnU1ePeokOCXAIMEvw5/08c9fc48c4e85a7c9f5ff8a18a062ff4/skiing-insole-320px.png',
        },
      ],
    };
  },
  components: { Product },
  async created() {
    //this.products = await getProducts();
  },
};
</script>

<style scoped></style>
