//TODO: import file into Signup.vue
export default{
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            showPassword: false,
            password: '',
            rules: {
                required: value => !!value || 'Enter a password',
                min: v => v.length >= 8 || 'Use 8 characters or more for your password',
                strength: v => zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.',
            },
        }
    },

    computed: {
        score() {
            const result = zxcvbn(this.password);

            switch (result.score) {
                case 4:
                    return {
                        color: "light-blue",
                        value: 100
                    };
                case 3:
                    return {
                        color: "light-green",
                        value: 75
                    };
                case 2:
                    return {
                        color: "yellow",
                        value: 50
                    };
                case 1:
                    return {
                        color: "orange",
                        value: 25
                    };
                default:
                    return {
                        color: "red",
                        value: 0
                    };
            }
        }
    }
}