<template>
    <paystack
        buttonClass="px-4 py-2 text-white transition duration-200 bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
        buttonText="Pay Online"
        :publicKey="publicKey"
        :email="email"
        :amount="totalAmount * 100"
        :reference="reference"
        :onSuccess="onSuccessfulPayment"
        :onCancel="onCancelledPayment"
      ></paystack>
</template>
<script>
import paystack from "vue3-paystack";
import { nanoid } from "nanoid";
import { mapGetters } from "vuex";
import db from "@/firebase_init.js"
import { collection, addDoc } from "firebase/firestore";

export default {
  components: {
    paystack,
  },
  data() {
    return{
        publicKey:'pk_test_f1babb2ab4d89005bbc826e96e83bf3075594799',
        amount:1000,
        email:'oladipokayode0@gmail.com',
    }
  },
  props: ['name', 'delivery_address', 'email'],
  computed: {
    reference: function() {
      return nanoid(15);
    },
    ...mapGetters({
      totalAmount: "cart/getTotalPrice",
    }),
  },
  methods: {
    onSuccessfulPayment: async function(response) {
      
      addDoc(collection(db, "orders"), {
            name: this.$props.name,
            email: this.$props.email,
            delivery_address: this.$props.delivery_address,
            products: JSON.parse(JSON.stringify(this.$store.state.cart))
        })
        .then(() => {
          // console.log(data)
          this.$store.commit('cart/clearCart');
          this.$router.push("/")
          this.$store.commit('toast/setToast', {
              type: 'success',
              message: 'Order placed successfully',
              status: true,
          })
          
      })
    },
    onCancelledPayment: function() {
      console.log("Payment cancelled by user");
    },
  },
};
</script>