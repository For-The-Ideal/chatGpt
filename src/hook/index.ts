import {onMounted} from "vue"
type Options = {
  el:HTMLElement
}

export default function(options:Options){

  onMounted(()=>{
    console.log(options,'options')
  })
}
