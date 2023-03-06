import { reactive } from "vue"

const store = reactive({
    characters: [],
    count:0,
    pages:0,
    search:'',
})

export default store