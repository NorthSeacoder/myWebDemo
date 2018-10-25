import Vue from 'vue'
import {
    Button,
    Upload
} from 'element-ui'

[Upload, Button].forEach(i => {
    Vue.use(i)
})