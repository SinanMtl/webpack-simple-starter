// console.log('Hello my friend. How are you?')
import 'object.observe'

window.object = {foo: null}
Object.observe(window.object, (changes) => {
  console.log('Changed:', changes)
})
