const app = Vue.createApp({
    data() {
        return {
            userName: null,
            userEmail: null,
            userComment: null
        }
    },
    methods: {
        submitFeedback() {
            alert(`Thank you for your feedback, ${this.userName}!`);
            this.userName = null;
            this.userEmail = null;
            this.userComment = null;
        }
    }
});
app.mount('#feedback-form');