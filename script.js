const scContainer = document.getElementById('js--sc--container');
randomNumber = Math.floor(Math.random() * 130);
// document.getElementById("result").innerHTML ="<br/><br/>reward is ₹ " + randomNumber;


const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: './front-image.png',
  //  imageBackgroundSrc: './scratch-image-1.png',
  // htmlBackground: '<div class="inner_html"><p id="reward">Subscribe for more Videos</p></div>',
  clearZoneRadius: 30,  
  nPoints:50,
  pointSize: 4
})

sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)

  
  })
  
  document.getElementById("result").innerHTML ="<br/><br/>Your reward is ₹ " + randomNumber;


}).catch((error) => {
  alert(error.message);
});
