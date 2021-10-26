AFRAME.registerComponent('plane-rotation-model',{
    schema:{
        speedofRotation:{type:'number',default:0},
        speedofascent:{type:'number',default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedofRotation = this.el.getAttribute('rotation')
            this.data.speedofascent = this.el.getAttribute('position')
            var planerotation = this.data.speedofRotation
            var planeposition = this.data.speedofascent
            if(e.key == "ArrowRight"){
                if(planerotation.x<10){
                    planerotation.x+=0.5
                    this.el.setAttribute("rotation",planerotation)
                }
            }
            if(e.key == "ArrowLeft"){
                if(planerotation.x>-10){
                    planerotation.x-=0.5
                    this.el.setAttribute("rotation",planerotation)
                }
            }
            if(e.key == "ArrowUp"){
                if(planerotation.z<20){
                    planerotation.z+=0.5
                    this.el.setAttribute("rotation",planerotation)
                }
                if(planeposition.y<2){
                    planeposition.y+=0.01
                    this.el.setAttribute("position",planeposition)
                }
            }
            if(e.key == "ArrowDown"){
                if(planerotation.z>-20){
                    planerotation.z-=0.5
                    this.el.setAttribute("rotation",planerotation)
                }
                if(planeposition.y>-2){
                    planeposition.y-=0.01
                    this.el.setAttribute("position",planeposition)
                }
            }
        })
    }
})