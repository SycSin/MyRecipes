<script>
import zxcvbn from "zxcvbn";
import {VueRecaptcha} from "vue-recaptcha";
    module.exports = {
        data: () => ({
            date: null,
            menu: false,
            pickerDate: '1997-1-1',
            showPassword: false,
            password: '',
            rules: {
                required: value => !!value || 'Enter a password',
                min: v => v.length >= 8 || 'Use 8 characters or more for your password',
                strength: v => zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.',
            },
        }),
        components: { VueRecaptcha },
        watch: {
            menu(val) {
                val && setTimeout(() => (
                    this.$refs.picker.activePicker = 'YEAR',
                        this.pickerDate = null
                ))
            },
        },
        methods: {
            save(date) {
                this.$refs.menu.save(date)
                this.pickerDate = date;
            },
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
</script>