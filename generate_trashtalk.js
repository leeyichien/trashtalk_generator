//generate_trashtalk.js

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

//define generateTrashtalk function
function generateTrashtalk(options) {

  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單吧！', '很容易吧！', '很快吧！', '很正常吧！']

  let trashtalk = '身為一個'

  if (options.targetRadios === 'engineer') {
    trashtalk += '工程師'
    trashtalk += sample(task.engineer)
  }
  if (options.targetRadios === 'designer') {
    trashtalk += '設計師'
    trashtalk += sample(task.designer)
  }
  if (options.targetRadios === 'entrepreneur') {
    trashtalk += '創業家'
    trashtalk += sample(task.entrepreneur)
  }

  trashtalk += sample(phrase)

  // return the generated password
  return trashtalk
}


// export generatePassword function for other files to use
module.exports = generateTrashtalk